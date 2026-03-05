import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Hyson Works - 하이슨 워크';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#3b82f6',
            marginBottom: 16,
          }}
        >
          Hyson Works
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#a1a1aa',
            marginBottom: 40,
          }}
        >
          꾸준히, 더 나은 앱을 만듭니다
        </div>
        <div
          style={{
            fontSize: 22,
            color: '#71717a',
          }}
        >
          App | Web | Software Development Studio
        </div>
      </div>
    ),
    { ...size },
  );
}
