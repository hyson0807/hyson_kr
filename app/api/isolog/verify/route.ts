import { NextResponse } from "next/server";
import { GetCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
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

    // 1. 아이템 조회 (language, publishedAt, createdAt 필요)
    const getCommand = new GetCommand({
      TableName: TABLE_NAME,
      Key: {
        PK: "CONTENT",
        SK: urlHash,
      },
    });

    const { Item } = await docClient.send(getCommand);

    if (!Item) {
      return NextResponse.json(
        { error: "Content not found" },
        { status: 404 }
      );
    }

    // 2. 조건부 업데이트
    let updateCommand;

    if (isVerified) {
      // 승인: GSI 필드 추가
      const verifiedLanguage = `VERIFIED#${Item.language}`;
      const publishDate = Item.publishedAt || Item.createdAt;

      updateCommand = new UpdateCommand({
        TableName: TABLE_NAME,
        Key: {
          PK: "CONTENT",
          SK: urlHash,
        },
        UpdateExpression:
          "SET isVerified = :true, verifiedLanguage = :vl, publishDate = :pd",
        ExpressionAttributeValues: {
          ":true": true,
          ":vl": verifiedLanguage,
          ":pd": publishDate,
        },
        ReturnValues: "ALL_NEW",
      });
    } else {
      // 승인 취소: GSI 필드 제거
      updateCommand = new UpdateCommand({
        TableName: TABLE_NAME,
        Key: {
          PK: "CONTENT",
          SK: urlHash,
        },
        UpdateExpression:
          "SET isVerified = :false REMOVE verifiedLanguage, publishDate",
        ExpressionAttributeValues: {
          ":false": false,
        },
        ReturnValues: "ALL_NEW",
      });
    }

    const { Attributes } = await docClient.send(updateCommand);

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
