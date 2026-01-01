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
  isBanned?: boolean;
  createdAt: string;
}

type FilterType = "all" | "active" | "banned";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");

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
      }
    } catch {
      alert("Ban 처리 실패");
    }
  };

  const filteredContents = contents.filter((c) => {
    if (filter === "banned") return c.isBanned === true;
    if (filter === "active") return !c.isBanned;
    return true;
  });

  const bannedCount = contents.filter((c) => c.isBanned).length;

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
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">IsoLog 콘텐츠 관리</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">
              총 {contents.length}개 | Ban {bannedCount}개
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
        <div className="flex gap-2 mb-6">
          {(["all", "active", "banned"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
              }`}
            >
              {f === "all" ? "전체" : f === "active" ? "활성" : "Ban됨"}
            </button>
          ))}
        </div>

        {/* 콘텐츠 목록 */}
        {loading ? (
          <div className="text-center py-12 text-gray-400">로딩 중...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-400">{error}</div>
        ) : (
          <div className="space-y-3">
            {filteredContents.map((content) => (
              <div
                key={content.urlHash}
                className={`p-4 rounded-lg border ${
                  content.isBanned
                    ? "bg-red-950/30 border-red-900/50"
                    : "bg-zinc-900 border-zinc-800"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${
                          content.language === "ko"
                            ? "bg-blue-900/50 text-blue-300"
                            : "bg-green-900/50 text-green-300"
                        }`}
                      >
                        {content.language}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-gray-400">
                        {content.contentType || "article"}
                      </span>
                      {content.isBanned && (
                        <span className="text-xs px-2 py-0.5 rounded bg-red-900/50 text-red-300">
                          BANNED
                        </span>
                      )}
                    </div>
                    <a
                      href={content.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white hover:text-blue-400 line-clamp-1"
                    >
                      {content.title}
                    </a>
                    <p className="text-sm text-gray-400 line-clamp-2 mt-1">
                      {content.snippet}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span>{content.source}</span>
                      <span>
                        {new Date(content.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleBan(content.urlHash, !!content.isBanned)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0 ${
                      content.isBanned
                        ? "bg-green-600 hover:bg-green-500 text-white"
                        : "bg-red-600 hover:bg-red-500 text-white"
                    }`}
                  >
                    {content.isBanned ? "복원" : "Ban"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
