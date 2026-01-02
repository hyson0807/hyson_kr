import { NextResponse } from "next/server";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { docClient, TABLE_NAME } from "@/app/lib/dynamodb";

export async function DELETE(request: Request) {
  // 인증 체크
  const authHeader = request.headers.get("Authorization");
  if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { urlHash } = await request.json();

    if (!urlHash) {
      return NextResponse.json(
        { error: "urlHash is required" },
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
