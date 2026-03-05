import { NextResponse } from "next/server";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { BatchWriteCommand } from "@aws-sdk/lib-dynamodb";
import { docClient, TABLE_NAME } from "@/app/lib/dynamodb";
import { verifyAdminAuth } from "@/app/lib/auth";

export async function DELETE(request: Request) {
  const authError = verifyAdminAuth(request);
  if (authError) return authError;

  try {
    const { urlHash, urlHashes } = await request.json();

    // 벌크 삭제
    if (urlHashes && Array.isArray(urlHashes)) {
      if (urlHashes.length === 0) {
        return NextResponse.json(
          { error: "urlHashes array is empty" },
          { status: 400 }
        );
      }

      let deletedCount = 0;
      const failed: string[] = [];

      // DynamoDB BatchWriteItem 최대 25개씩 청크 처리
      for (let i = 0; i < urlHashes.length; i += 25) {
        const chunk = urlHashes.slice(i, i + 25);
        try {
          const command = new BatchWriteCommand({
            RequestItems: {
              [TABLE_NAME]: chunk.map((hash: string) => ({
                DeleteRequest: {
                  Key: { PK: "CONTENT", SK: hash },
                },
              })),
            },
          });

          const result = await docClient.send(command);

          // UnprocessedItems 처리
          const unprocessed = result.UnprocessedItems?.[TABLE_NAME];
          if (unprocessed && unprocessed.length > 0) {
            const unprocessedKeys = unprocessed
              .map((item) => item.DeleteRequest?.Key?.SK as string)
              .filter(Boolean);
            failed.push(...unprocessedKeys);
            deletedCount += chunk.length - unprocessedKeys.length;
          } else {
            deletedCount += chunk.length;
          }
        } catch {
          failed.push(...chunk);
        }
      }

      return NextResponse.json({
        success: true,
        deletedCount,
        failed,
      });
    }

    // 단건 삭제
    if (!urlHash) {
      return NextResponse.json(
        { error: "urlHash or urlHashes is required" },
        { status: 400 }
      );
    }

    const command = new DeleteCommand({
      TableName: TABLE_NAME,
      Key: {
        PK: "CONTENT",
        SK: urlHash,
      },
    });

    await docClient.send(command);

    return NextResponse.json({
      success: true,
      deletedUrlHash: urlHash,
    });
  } catch (error) {
    console.error("삭제 실패:", error);
    return NextResponse.json(
      { error: "Failed to delete content" },
      { status: 500 }
    );
  }
}
