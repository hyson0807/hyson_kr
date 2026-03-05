import { NextResponse } from "next/server";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { docClient, TABLE_NAME } from "@/app/lib/dynamodb";
import { verifyAdminAuth } from "@/app/lib/auth";

export async function GET(request: Request) {
  const authError = verifyAdminAuth(request);
  if (authError) return authError;

  try {
    const command = new ScanCommand({
      TableName: TABLE_NAME,
      FilterExpression: "PK = :pk",
      ExpressionAttributeValues: {
        ":pk": "CONTENT",
      },
    });

    const { Items } = await docClient.send(command);

    // 인메모리 정렬: Scan은 전체 RCU를 소비하지만, 아이템 수가 수천 건 이하이므로 허용 가능.
    // 아이템이 만 건 이상으로 늘어나면 GSI + Query 기반으로 전환하여 RCU 절감 필요.
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
