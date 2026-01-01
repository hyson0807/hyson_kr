import { NextResponse } from "next/server";
import { UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { docClient, TABLE_NAME } from "@/app/lib/dynamodb";

export async function POST(request: Request) {
  // 인증 체크
  const authHeader = request.headers.get("Authorization");
  if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { urlHash, isBanned } = await request.json();

    if (!urlHash || typeof isBanned !== "boolean") {
      return NextResponse.json(
        { error: "urlHash and isBanned are required" },
        { status: 400 }
      );
    }

    const command = new UpdateCommand({
      TableName: TABLE_NAME,
      Key: {
        PK: "CONTENT",
        SK: urlHash,
      },
      UpdateExpression: "SET isBanned = :isBanned",
      ExpressionAttributeValues: {
        ":isBanned": isBanned,
      },
      ReturnValues: "ALL_NEW",
    });

    const { Attributes } = await docClient.send(command);

    return NextResponse.json({
      success: true,
      content: Attributes,
    });
  } catch (error) {
    console.error("Ban 토글 실패:", error);
    return NextResponse.json(
      { error: "Failed to toggle ban" },
      { status: 500 }
    );
  }
}
