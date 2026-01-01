import { NextResponse } from "next/server";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { docClient, TABLE_NAME } from "@/app/lib/dynamodb";

export async function GET(request: Request) {
  // 인증 체크
  const authHeader = request.headers.get("Authorization");
  if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const command = new ScanCommand({
      TableName: TABLE_NAME,
      FilterExpression: "PK = :pk",
      ExpressionAttributeValues: {
        ":pk": "CONTENT",
      },
    });

    const { Items } = await docClient.send(command);

    // createdAt 기준 최신순 정렬
    const sorted = (Items || []).sort((a, b) =>
      b.createdAt.localeCompare(a.createdAt)
    );

    return NextResponse.json({ contents: sorted });
  } catch (error) {
    console.error("콘텐츠 조회 실패:", error);
    return NextResponse.json(
      { error: "Failed to fetch contents" },
      { status: 500 }
    );
  }
}
