"use client";

import { useState, useEffect, useMemo } from "react";

interface Report {
  id: string;
  userId: string;
  targetType: "question" | "answer";
  targetId: string;
  reason: string;
  detail: string | null;
  status: "pending" | "resolved" | "dismissed";
  createdAt: string;
  updatedAt: string;
  reporterNickname: string | null;
  reporterEmail: string;
}

interface ReportedContent {
  id: string;
  content: string;
  title?: string;
  category?: string;
  createdAt: string;
  authorId: string;
  authorNickname: string | null;
  authorEmail: string;
  authorProfileImage: string | null;
  questionId?: string;
  questionTitle?: string;
  deletedAt?: string | null;
}

type StatusFilter = "all" | "pending" | "resolved" | "dismissed";

const REASON_LABELS: Record<string, string> = {
  spam: "스팸",
  inappropriate: "부적절한 콘텐츠",
  hate_speech: "혐오 발언",
  privacy: "개인정보 노출",
  other: "기타",
};

const STATUS_LABELS: Record<string, string> = {
  pending: "대기중",
  resolved: "처리완료",
  dismissed: "기각",
};

export default function PibugomAdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [reportedContent, setReportedContent] = useState<ReportedContent | null>(null);
  const [contentLoading, setContentLoading] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("pibugom_admin_auth");
    if (saved) {
      setIsAuthenticated(true);
      setPassword(saved);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchReports();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (selectedReport) {
      fetchContent(selectedReport.targetType, selectedReport.targetId);
    } else {
      setReportedContent(null);
    }
  }, [selectedReport?.id]);

  const handleLogin = () => {
    sessionStorage.setItem("pibugom_admin_auth", password);
    setIsAuthenticated(true);
  };

  const fetchReports = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/pibugom/reports", {
        headers: { Authorization: `Bearer ${password}` },
      });
      if (!res.ok) {
        if (res.status === 401) {
          setIsAuthenticated(false);
          sessionStorage.removeItem("pibugom_admin_auth");
          setError("인증 실패");
          return;
        }
        throw new Error("Failed to fetch");
      }
      const data = await res.json();
      setReports(data.reports);
    } catch (err) {
      console.error("신고 목록 조회 실패:", err);
      setError("신고 목록을 불러오는데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const fetchContent = async (targetType: string, targetId: string) => {
    setContentLoading(true);
    setReportedContent(null);
    try {
      const res = await fetch(
        `/api/pibugom/reports/content?targetType=${targetType}&targetId=${targetId}`,
        { headers: { Authorization: `Bearer ${password}` } }
      );
      if (res.ok) {
        const data = await res.json();
        setReportedContent(data.content);
      }
    } catch (err) {
      console.error("콘텐츠 조회 실패:", err);
    } finally {
      setContentLoading(false);
    }
  };

  const updateStatus = async (reportId: string, status: "resolved" | "dismissed") => {
    try {
      const res = await fetch("/api/pibugom/reports", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ id: reportId, status }),
      });

      if (!res.ok) {
        alert(`상태 변경 실패 (${res.status})`);
        return;
      }

      setReports((prev) =>
        prev.map((r) => (r.id === reportId ? { ...r, status } : r))
      );
      if (selectedReport?.id === reportId) {
        setSelectedReport((prev) => (prev ? { ...prev, status } : null));
      }
    } catch (err) {
      console.error("상태 변경 실패:", err);
      alert("상태 변경 실패");
    }
  };

  const filteredReports = useMemo(
    () =>
      statusFilter === "all"
        ? reports
        : reports.filter((r) => r.status === statusFilter),
    [reports, statusFilter]
  );

  const { pendingCount, resolvedCount, dismissedCount } = useMemo(
    () =>
      reports.reduce(
        (acc, r) => {
          if (r.status === "pending") acc.pendingCount++;
          else if (r.status === "resolved") acc.resolvedCount++;
          else if (r.status === "dismissed") acc.dismissedCount++;
          return acc;
        },
        { pendingCount: 0, resolvedCount: 0, dismissedCount: 0 }
      ),
    [reports]
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 w-full max-w-sm">
          <h1 className="text-xl font-bold text-white mb-6">피부곰 Admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="Password"
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white mb-4 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors"
          >
            로그인
          </button>
          {error && (
            <p className="mt-4 text-red-400 text-sm text-center">{error}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-zinc-950 text-white flex flex-col">
      {/* 헤더 */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
        <h1 className="text-xl font-bold">피부곰 신고 관리</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">
            총 {reports.length}개 | 대기 {pendingCount}개 | 처리 {resolvedCount}개 | 기각 {dismissedCount}개
          </span>
          <button
            onClick={() => {
              sessionStorage.removeItem("pibugom_admin_auth");
              setIsAuthenticated(false);
            }}
            className="px-4 py-2 text-sm bg-zinc-800 rounded-lg hover:bg-zinc-700"
          >
            로그아웃
          </button>
        </div>
      </div>

      {/* 필터 */}
      <div className="flex items-center gap-2 px-6 py-3 border-b border-zinc-800">
        {(["all", "pending", "resolved", "dismissed"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setStatusFilter(f)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              statusFilter === f
                ? f === "pending"
                  ? "bg-yellow-600 text-white"
                  : f === "resolved"
                  ? "bg-green-600 text-white"
                  : f === "dismissed"
                  ? "bg-gray-600 text-white"
                  : "bg-blue-600 text-white"
                : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
            }`}
          >
            {f === "all" ? "전체" : STATUS_LABELS[f]}
            {f === "pending" && pendingCount > 0 && ` (${pendingCount})`}
          </button>
        ))}
      </div>

      {/* 메인 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 좌측: 신고 목록 */}
        <div className="w-1/2 border-r border-zinc-800 overflow-y-auto">
          {loading ? (
            <div className="text-center py-12 text-gray-400">로딩 중...</div>
          ) : error ? (
            <div className="text-center py-12 text-red-400">{error}</div>
          ) : filteredReports.length === 0 ? (
            <div className="text-center py-12 text-gray-500">신고 내역이 없습니다</div>
          ) : (
            filteredReports.map((report) => (
              <div
                key={report.id}
                onClick={() => setSelectedReport(report)}
                className={`px-4 py-3 border-b border-zinc-800 cursor-pointer transition-colors ${
                  selectedReport?.id === report.id
                    ? "bg-blue-600/20 border-l-2 border-l-blue-500"
                    : "hover:bg-zinc-900"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {/* 대상 타입 뱃지 */}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded ${
                      report.targetType === "question"
                        ? "bg-blue-900/50 text-blue-300"
                        : "bg-purple-900/50 text-purple-300"
                    }`}
                  >
                    {report.targetType === "question" ? "질문" : "답변"}
                  </span>
                  {/* 사유 */}
                  <span className="text-xs px-1.5 py-0.5 rounded bg-zinc-800 text-gray-400">
                    {REASON_LABELS[report.reason] ?? report.reason}
                  </span>
                  {/* 상태 뱃지 */}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded ${
                      report.status === "pending"
                        ? "bg-yellow-900/50 text-yellow-300"
                        : report.status === "resolved"
                        ? "bg-green-900/50 text-green-300"
                        : "bg-zinc-700 text-gray-400"
                    }`}
                  >
                    {STATUS_LABELS[report.status]}
                  </span>
                </div>
                <p className="text-sm text-white">
                  신고자: {report.reporterNickname ?? "익명"}{" "}
                  <span className="text-gray-500 text-xs">({report.reporterEmail})</span>
                </p>
                {report.detail && (
                  <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                    {report.detail}
                  </p>
                )}
                <p className="text-xs text-gray-600 mt-1">
                  {new Date(report.createdAt).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>

        {/* 우측: 상세 */}
        <div className="w-1/2 flex flex-col overflow-hidden bg-zinc-900">
          {selectedReport ? (
            <div className="flex-1 overflow-y-auto p-6">
              {/* 신고 정보 */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">신고 정보</h3>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 w-20">신고자</span>
                    <span className="text-sm text-white">
                      {selectedReport.reporterNickname ?? "익명"}{" "}
                      <span className="text-gray-500">({selectedReport.reporterEmail})</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 w-20">대상</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        selectedReport.targetType === "question"
                          ? "bg-blue-900/50 text-blue-300"
                          : "bg-purple-900/50 text-purple-300"
                      }`}
                    >
                      {selectedReport.targetType === "question" ? "질문" : "답변"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 w-20">사유</span>
                    <span className="text-sm text-white">
                      {REASON_LABELS[selectedReport.reason] ?? selectedReport.reason}
                    </span>
                  </div>
                  {selectedReport.detail && (
                    <div className="flex gap-2">
                      <span className="text-sm text-gray-400 w-20 shrink-0">상세</span>
                      <span className="text-sm text-white">{selectedReport.detail}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 w-20">상태</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        selectedReport.status === "pending"
                          ? "bg-yellow-900/50 text-yellow-300"
                          : selectedReport.status === "resolved"
                          ? "bg-green-900/50 text-green-300"
                          : "bg-zinc-700 text-gray-400"
                      }`}
                    >
                      {STATUS_LABELS[selectedReport.status]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 w-20">신고일</span>
                    <span className="text-sm text-gray-300">
                      {new Date(selectedReport.createdAt).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* 신고된 콘텐츠 */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">신고된 콘텐츠</h3>
                {contentLoading ? (
                  <div className="text-center py-8 text-gray-400">로딩 중...</div>
                ) : reportedContent ? (
                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400 w-20">작성자</span>
                      <span className="text-sm text-white">
                        {reportedContent.authorNickname ?? "익명"}{" "}
                        <span className="text-gray-500">({reportedContent.authorEmail})</span>
                      </span>
                    </div>
                    {reportedContent.title && (
                      <div className="flex gap-2">
                        <span className="text-sm text-gray-400 w-20 shrink-0">제목</span>
                        <span className="text-sm text-white font-medium">
                          {reportedContent.title}
                        </span>
                      </div>
                    )}
                    {reportedContent.category && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400 w-20">카테고리</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-orange-900/50 text-orange-300">
                          {reportedContent.category}
                        </span>
                      </div>
                    )}
                    {reportedContent.questionTitle && (
                      <div className="flex gap-2">
                        <span className="text-sm text-gray-400 w-20 shrink-0">원 질문</span>
                        <span className="text-sm text-gray-300">
                          {reportedContent.questionTitle}
                        </span>
                      </div>
                    )}
                    <div className="flex gap-2">
                      <span className="text-sm text-gray-400 w-20 shrink-0">내용</span>
                      <p className="text-sm text-white leading-relaxed whitespace-pre-wrap">
                        {reportedContent.content}
                      </p>
                    </div>
                    {reportedContent.deletedAt && (
                      <div className="mt-2 text-xs text-red-400">
                        이 콘텐츠는 이미 삭제되었습니다
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400 w-20">작성일</span>
                      <span className="text-sm text-gray-300">
                        {new Date(reportedContent.createdAt).toLocaleString()}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    콘텐츠를 찾을 수 없습니다
                  </div>
                )}
              </div>

              {/* 액션 버튼 */}
              {selectedReport.status === "pending" && (
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateStatus(selectedReport.id, "resolved")}
                    className="px-6 py-2.5 text-sm bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors font-medium"
                  >
                    처리 완료
                  </button>
                  <button
                    onClick={() => updateStatus(selectedReport.id, "dismissed")}
                    className="px-6 py-2.5 text-sm bg-zinc-700 text-gray-300 rounded-lg hover:bg-zinc-600 transition-colors font-medium"
                  >
                    기각
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              신고를 선택하세요
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
