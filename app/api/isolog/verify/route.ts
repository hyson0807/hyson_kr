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
    const { urlHash, isVerified } = await request.json();

    if (!urlHash || typeof isVerified !== "boolean") {
      return NextResponse.json(
        { error: "urlHash and isVerified are required" },
        { status: 400 }
      );
    }

    const command = new UpdateCommand({
      TableName: TABLE_NAME,
      Key: {
        PK: "CONTENT",
        SK: urlHash,
      },
      UpdateExpression: "SET isVerified = :isVerified",
      ExpressionAttributeValues: {
        ":isVerified": isVerified,
      },
      ReturnValues: "ALL_NEW",
    });

    const { Attributes } = await docClient.send(command);

    return NextResponse.json({
      success: true,
      content: Attributes,
    });
  } catch (error) {
    console.error("Verify 토글 실패:", error);
    return NextResponse.json(
      { error: "Failed to toggle verify" },
      { status: 500 }
    );
  }
}
