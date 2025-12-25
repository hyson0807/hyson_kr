import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // www → non-www 리다이렉트 (SEO 중복 페이지 문제 해결)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.hyson.kr',
          },
        ],
        destination: 'https://hyson.kr/:path*',
        permanent: true, // 301 리다이렉트
      },
    ];
  },
};

export default nextConfig;
