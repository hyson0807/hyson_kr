"use client";

import { useState, useEffect } from "react";

interface Content {
  urlHash: string;
  url: string;
  title: string;
  snippet: string;
  source: string;
  language: string;
  contentType: string;
  thumbnailUrl?: string | null;
  isBanned?: boolean;
  isVerified?: boolean;
  createdAt: string;
  // AI 분석 필드
  aiScore?: number;
  aiReason?: string;
  aiVerdict?: "approve" | "reject" | "review";
  aiAnalyzedAt?: string;
}

type FilterType = "all" | "active" | "banned" | "verified" | "unverified";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [languageFilter, setLanguageFilter] = useState<"all" | "ko" | "en">("all");
  const [aiFilter, setAiFilter] = useState<"all" | "approve" | "review" | "reject" | "unanalyzed">("all");
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);

  // 세션 체크
  useEffect(() => {
    const saved = sessionStorage.getItem("isolog_admin_auth");
    if (saved) {
      setIsAuthenticated(true);
      setPassword(saved);
    }
  }, []);

  // 인증 후 콘텐츠 로드
  useEffect(() => {
    if (isAuthenticated) {
      fetchContents();
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    sessionStorage.setItem("isolog_admin_auth", password);
    setIsAuthenticated(true);
  };

  const fetchContents = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/isolog/contents", {
        headers: {
          Authorization: `Bearer ${password}`,
        },
      });

      if (!res.ok) {
        if (res.status === 401) {
          setIsAuthenticated(false);
          sessionStorage.removeItem("isolog_admin_auth");
          setError("인증 실패");
          return;
        }
        throw new Error("Failed to fetch");
      }

      const data = await res.json();
      setContents(data.contents);
    } catch {
      setError("콘텐츠를 불러오는데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const toggleBan = async (urlHash: string, currentBanned: boolean) => {
    try {
      const res = await fetch("/api/isolog/ban", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({
          urlHash,
          isBanned: !currentBanned,
        }),
      });

      if (res.ok) {
        setContents((prev) =>
          prev.map((c) =>
            c.urlHash === urlHash ? { ...c, isBanned: !currentBanned } : c
          )
        );
        // 선택된 콘텐츠도 업데이트
        if (selectedContent?.urlHash === urlHash) {
          setSelectedContent((prev) =>
            prev ? { ...prev, isBanned: !currentBanned } : null
          );
        }
      }
    } catch {
      alert("Ban 처리 실패");
    }
  };

  const deleteContent = async (urlHash: string, title: string) => {
    if (!confirm(`정말 삭제하시겠습니까?\n\n"${title}"\n\n이 작업은 되돌릴 수 없습니다.`)) {
      return;
    }

    try {
      const res = await fetch("/api/isolog/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ urlHash }),
      });

      if (res.ok) {
        setContents((prev) => prev.filter((c) => c.urlHash !== urlHash));
        // 선택된 콘텐츠가 삭제된 경우 선택 해제
        if (selectedContent?.urlHash === urlHash) {
          setSelectedContent(null);
        }
      } else {
        alert("삭제 실패");
      }
    } catch {
      alert("삭제 처리 실패");
    }
  };

  const toggleVerify = async (urlHash: string, currentVerified: boolean) => {
    try {
      const res = await fetch("/api/isolog/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({
          urlHash,
          isVerified: !currentVerified,
        }),
      });

      if (res.ok) {
        setContents((prev) =>
          prev.map((c) =>
            c.urlHash === urlHash ? { ...c, isVerified: !currentVerified } : c
          )
        );
        // 선택된 콘텐츠도 업데이트
        if (selectedContent?.urlHash === urlHash) {
          setSelectedContent((prev) =>
            prev ? { ...prev, isVerified: !currentVerified } : null
          );
        }
      }
    } catch {
      alert("Verify 처리 실패");
    }
  };

  const filteredContents = contents.filter((c) => {
    // 기본 필터
    if (filter === "banned") return c.isBanned === true;
    if (filter === "active") return !c.isBanned;
    if (filter === "verified") return c.isVerified === true;
    if (filter === "unverified") {
      if (c.isVerified || c.isBanned) return false;
      // 언어 필터 적용
      if (languageFilter !== "all" && c.language !== languageFilter) return false;
      // AI 필터 적용
      if (aiFilter === "unanalyzed" && c.aiAnalyzedAt) return false;
      if (aiFilter === "approve" && c.aiVerdict !== "approve") return false;
      if (aiFilter === "review" && c.aiVerdict !== "review") return false;
      if (aiFilter === "reject" && c.aiVerdict !== "reject") return false;
      return true;
    }
    return true;
  });

  const bannedCount = contents.filter((c) => c.isBanned).length;
  const verifiedCount = contents.filter((c) => c.isVerified).length;

  // 로그인 화면
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 w-full max-w-sm">
          <h1 className="text-xl font-bold text-white mb-6">IsoLog Admin</h1>
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

  // 관리자 대시보드
  return (
    <div className="h-screen bg-zinc-950 text-white flex flex-col">
      {/* 헤더 */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
        <h1 className="text-xl font-bold">IsoLog 콘텐츠 관리</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">
            총 {contents.length}개 | 확인 {verifiedCount}개 | Ban {bannedCount}개
          </span>
          <button
            onClick={() => {
              sessionStorage.removeItem("isolog_admin_auth");
              setIsAuthenticated(false);
            }}
            className="px-4 py-2 text-sm bg-zinc-800 rounded-lg hover:bg-zinc-700"
          >
            로그아웃
          </button>
        </div>
      </div>

      {/* 필터 */}
      <div className="flex items-center gap-4 px-6 py-3 border-b border-zinc-800">
        <div className="flex gap-2">
          {(["all", "unverified", "verified", "banned"] as const).map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                if (f !== "unverified") {
                  setLanguageFilter("all");
                  setAiFilter("all");
                }
              }}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
              }`}
            >
              {f === "all" ? "전체" : f === "unverified" ? "미확인" : f === "verified" ? "확인됨" : "Ban됨"}
            </button>
          ))}
        </div>

        {/* 언어 필터 (미확인 탭에서만) */}
        {filter === "unverified" && (
          <>
            <div className="w-px h-6 bg-zinc-700" />
            <div className="flex gap-1">
              {(["all", "ko", "en"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguageFilter(lang)}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    languageFilter === lang
                      ? lang === "ko"
                        ? "bg-blue-600 text-white"
                        : lang === "en"
                        ? "bg-green-600 text-white"
                        : "bg-zinc-600 text-white"
                      : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
                  }`}
                >
                  {lang === "all" ? "전체" : lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* AI 판정 필터 */}
            <div className="w-px h-6 bg-zinc-700" />
            <div className="flex gap-1">
              {(["all", "approve", "review", "reject", "unanalyzed"] as const).map((ai) => (
                <button
                  key={ai}
                  onClick={() => setAiFilter(ai)}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    aiFilter === ai
                      ? ai === "approve"
                        ? "bg-green-600 text-white"
                        : ai === "reject"
                        ? "bg-red-600 text-white"
                        : ai === "review"
                        ? "bg-yellow-600 text-white"
                        : ai === "unanalyzed"
                        ? "bg-purple-600 text-white"
                        : "bg-zinc-600 text-white"
                      : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
                  }`}
                >
                  {ai === "all" ? "AI전체" : ai === "approve" ? "✓승인" : ai === "reject" ? "✗거절" : ai === "review" ? "?검토" : "미분석"}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* 메인 콘텐츠 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 좌측: 리스트 */}
        <div className="w-1/2 border-r border-zinc-800 overflow-y-auto">
          {loading ? (
            <div className="text-center py-12 text-gray-400">로딩 중...</div>
          ) : error ? (
            <div className="text-center py-12 text-red-400">{error}</div>
          ) : (
            <div>
              {filteredContents.map((content) => (
                <div
                  key={content.urlHash}
                  onClick={() => setSelectedContent(content)}
                  className={`px-4 py-3 border-b border-zinc-800 cursor-pointer transition-colors ${
                    selectedContent?.urlHash === content.urlHash
                      ? "bg-blue-600/20 border-l-2 border-l-blue-500"
                      : content.isBanned
                      ? "bg-red-950/20 hover:bg-red-950/30"
                      : "hover:bg-zinc-900"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-xs px-1.5 py-0.5 rounded ${
                            content.language === "ko"
                              ? "bg-blue-900/50 text-blue-300"
                              : "bg-green-900/50 text-green-300"
                          }`}
                        >
                          {content.language}
                        </span>
                        <span className="text-xs text-gray-500">
                          {content.contentType || "article"}
                        </span>
                        {content.isVerified && (
                          <span className="text-xs px-1.5 py-0.5 rounded bg-emerald-900/50 text-emerald-300">
                            ✓
                          </span>
                        )}
                        {content.isBanned && (
                          <span className="text-xs px-1.5 py-0.5 rounded bg-red-900/50 text-red-300">
                            BAN
                          </span>
                        )}
                        {/* AI 점수 배지 */}
                        {content.aiVerdict && (
                          <span
                            className={`text-xs px-1.5 py-0.5 rounded ${
                              content.aiVerdict === "approve"
                                ? "bg-green-900/50 text-green-300"
                                : content.aiVerdict === "reject"
                                ? "bg-red-900/50 text-red-300"
                                : "bg-yellow-900/50 text-yellow-300"
                            }`}
                            title={content.aiReason}
                          >
                            AI {content.aiScore}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-white line-clamp-1">
                        {content.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {content.source} · {new Date(content.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <a
                        href={content.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2 py-1 text-xs bg-zinc-700 text-gray-300 rounded hover:bg-zinc-600 transition-colors"
                      >
                        열기
                      </a>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleVerify(content.urlHash, !!content.isVerified);
                        }}
                        className={`px-2 py-1 text-xs rounded transition-colors ${
                          content.isVerified
                            ? "bg-emerald-700 text-emerald-200 hover:bg-emerald-600"
                            : "bg-zinc-700 text-gray-300 hover:bg-zinc-600"
                        }`}
                      >
                        {content.isVerified ? "✓" : "확인"}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBan(content.urlHash, !!content.isBanned);
                        }}
                        className={`px-2 py-1 text-xs rounded transition-colors ${
                          content.isBanned
                            ? "bg-green-700 text-green-200 hover:bg-green-600"
                            : "bg-red-700 text-red-200 hover:bg-red-600"
                        }`}
                      >
                        {content.isBanned ? "복원" : "Ban"}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteContent(content.urlHash, content.title);
                        }}
                        className="px-2 py-1 text-xs rounded transition-colors bg-zinc-800 text-gray-400 hover:bg-red-800 hover:text-red-200"
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 우측: 미리보기 */}
        <div className="w-1/2 flex flex-col overflow-hidden bg-zinc-900">
          {selectedContent ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 overflow-y-auto">
              {/* 썸네일 */}
              {selectedContent.thumbnailUrl && (
                <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={selectedContent.thumbnailUrl}
                    alt={selectedContent.title}
                    className="max-w-md max-h-64 object-cover"
                  />
                </div>
              )}

              {/* 콘텐츠 정보 */}
              <div className="max-w-2xl w-full text-center">
                {/* 태그 */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      selectedContent.language === "ko"
                        ? "bg-blue-900/50 text-blue-300"
                        : "bg-green-900/50 text-green-300"
                    }`}
                  >
                    {selectedContent.language}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-gray-400">
                    {selectedContent.contentType || "article"}
                  </span>
                  {selectedContent.isVerified && (
                    <span className="text-xs px-2 py-1 rounded bg-emerald-900/50 text-emerald-300">
                      VERIFIED
                    </span>
                  )}
                  {selectedContent.isBanned && (
                    <span className="text-xs px-2 py-1 rounded bg-red-900/50 text-red-300">
                      BANNED
                    </span>
                  )}
                  {/* AI 분석 결과 배지 */}
                  {selectedContent.aiVerdict && (
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        selectedContent.aiVerdict === "approve"
                          ? "bg-green-900/50 text-green-300"
                          : selectedContent.aiVerdict === "reject"
                          ? "bg-red-900/50 text-red-300"
                          : "bg-yellow-900/50 text-yellow-300"
                      }`}
                    >
                      AI {selectedContent.aiVerdict.toUpperCase()} ({selectedContent.aiScore}점)
                    </span>
                  )}
                </div>

                {/* AI 분석 이유 */}
                {selectedContent.aiReason && (
                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-400 mb-1">🤖 AI 분석</p>
                    <p className="text-sm text-gray-300">{selectedContent.aiReason}</p>
                    {selectedContent.aiAnalyzedAt && (
                      <p className="text-xs text-gray-500 mt-2">
                        분석일: {new Date(selectedContent.aiAnalyzedAt).toLocaleString()}
                      </p>
                    )}
                  </div>
                )}

                {/* 제목 */}
                <h2 className="text-xl font-bold text-white mb-4">
                  {selectedContent.title}
                </h2>

                {/* 요약 */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {selectedContent.snippet}
                </p>

                {/* 메타 정보 */}
                <div className="text-sm text-gray-500 mb-8">
                  {selectedContent.source} · {new Date(selectedContent.createdAt).toLocaleDateString()}
                </div>

                {/* 버튼들 */}
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={selectedContent.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium"
                  >
                    새 탭에서 열기
                  </a>
                  <button
                    onClick={() =>
                      toggleVerify(selectedContent.urlHash, !!selectedContent.isVerified)
                    }
                    className={`px-6 py-2.5 text-sm rounded-lg font-medium transition-colors ${
                      selectedContent.isVerified
                        ? "bg-zinc-600 hover:bg-zinc-500 text-white"
                        : "bg-emerald-600 hover:bg-emerald-500 text-white"
                    }`}
                  >
                    {selectedContent.isVerified ? "확인 취소" : "확인 완료"}
                  </button>
                  <button
                    onClick={() =>
                      toggleBan(selectedContent.urlHash, !!selectedContent.isBanned)
                    }
                    className={`px-6 py-2.5 text-sm rounded-lg font-medium transition-colors ${
                      selectedContent.isBanned
                        ? "bg-green-600 hover:bg-green-500 text-white"
                        : "bg-red-600 hover:bg-red-500 text-white"
                    }`}
                  >
                    {selectedContent.isBanned ? "복원" : "Ban"}
                  </button>
                </div>

                {/* URL */}
                <p className="mt-6 text-xs text-gray-600 break-all">
                  {selectedContent.url}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              콘텐츠를 선택하세요
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
