import { Metadata } from 'next';
import { AnimatedSection } from '../../components/AnimatedSection';

export const metadata: Metadata = {
  title: '오픈소스 라이선스 - 꿈틀매쓰',
  description:
    '꿈틀매쓰 앱에서 사용하는 오픈소스 라이브러리 목록과 라이선스 정보입니다.',
  alternates: { canonical: '/ggumteul-math/licenses' },
  openGraph: {
    title: '오픈소스 라이선스 - 꿈틀매쓰 | Hyson Works',
    description:
      '꿈틀매쓰 앱에서 사용하는 오픈소스 라이브러리 목록과 라이선스 정보입니다.',
  },
};

const libraries = [
  // 프론트엔드 (앱)
  { name: 'React', license: 'MIT', url: 'https://github.com/facebook/react' },
  { name: 'React Native', license: 'MIT', url: 'https://github.com/facebook/react-native' },
  { name: 'Expo SDK 54', license: 'MIT', url: 'https://github.com/expo/expo' },
  { name: 'Expo Router', license: 'MIT', url: 'https://github.com/expo/expo/tree/main/packages/expo-router' },
  { name: 'Expo Updates', license: 'MIT', url: 'https://github.com/expo/expo/tree/main/packages/expo-updates' },
  { name: 'Expo Audio', license: 'MIT', url: 'https://github.com/expo/expo/tree/main/packages/expo-audio' },
  { name: 'Expo Haptics', license: 'MIT', url: 'https://github.com/expo/expo/tree/main/packages/expo-haptics' },
  { name: 'Expo Linking', license: 'MIT', url: 'https://github.com/expo/expo/tree/main/packages/expo-linking' },
  { name: 'Expo Web Browser', license: 'MIT', url: 'https://github.com/expo/expo/tree/main/packages/expo-web-browser' },
  { name: 'Expo Secure Store', license: 'MIT', url: 'https://github.com/expo/expo/tree/main/packages/expo-secure-store' },
  { name: 'Expo Application', license: 'MIT', url: 'https://github.com/expo/expo/tree/main/packages/expo-application' },
  { name: 'Expo Constants', license: 'MIT', url: 'https://github.com/expo/expo/tree/main/packages/expo-constants' },
  { name: 'Expo Apple Authentication', license: 'MIT', url: 'https://github.com/expo/expo/tree/main/packages/expo-apple-authentication' },
  { name: '@react-native-google-signin/google-signin', license: 'MIT', url: 'https://github.com/react-native-google-signin/google-signin' },
  { name: 'TanStack React Query', license: 'MIT', url: 'https://github.com/TanStack/query' },
  { name: 'Axios', license: 'MIT', url: 'https://github.com/axios/axios' },
  { name: 'Zustand', license: 'MIT', url: 'https://github.com/pmndrs/zustand' },
  { name: 'NativeWind', license: 'MIT', url: 'https://github.com/marklawlor/nativewind' },
  { name: 'Tailwind CSS', license: 'MIT', url: 'https://github.com/tailwindlabs/tailwindcss' },
  { name: 'React Native Reanimated', license: 'MIT', url: 'https://github.com/software-mansion/react-native-reanimated' },
  { name: 'React Native Gesture Handler', license: 'MIT', url: 'https://github.com/software-mansion/react-native-gesture-handler' },
  { name: 'React Native Screens', license: 'MIT', url: 'https://github.com/software-mansion/react-native-screens' },
  { name: 'React Native Safe Area Context', license: 'MIT', url: 'https://github.com/th3rdwave/react-native-safe-area-context' },
  { name: '@expo/vector-icons', license: 'MIT', url: 'https://github.com/expo/vector-icons' },
  // 백엔드 (서버)
  { name: 'NestJS', license: 'MIT', url: 'https://github.com/nestjs/nest' },
  { name: 'Prisma', license: 'Apache-2.0', url: 'https://github.com/prisma/prisma' },
  { name: 'bcryptjs', license: 'MIT', url: 'https://github.com/dcodeIO/bcrypt.js' },
  { name: 'helmet', license: 'MIT', url: 'https://github.com/helmetjs/helmet' },
  { name: '@nestjs/throttler', license: 'MIT', url: 'https://github.com/nestjs/throttler' },
  { name: '@nestjs/jwt', license: 'MIT', url: 'https://github.com/nestjs/jwt' },
  { name: 'class-validator', license: 'MIT', url: 'https://github.com/typestack/class-validator' },
  { name: 'class-transformer', license: 'MIT', url: 'https://github.com/typestack/class-transformer' },
  { name: 'TypeScript', license: 'Apache-2.0', url: 'https://github.com/microsoft/TypeScript' },
];

const assets = [
  {
    name: 'Kenney.nl 효과음',
    license: 'CC0 1.0',
    url: 'https://kenney.nl/assets',
    description: '탭 효과음, 지렁이 인터랙션 효과음 등',
  },
];

export default function LicensesPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            오픈소스 라이선스
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-500 mb-12">
            꿈틀매쓰 · 꿈틀매쓰 앱은 아래의 오픈소스 라이브러리와 에셋을
            사용합니다.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp">
          <h2 className="text-2xl font-semibold text-white mb-4">
            소프트웨어 라이브러리
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-3 pr-4 text-white font-semibold text-lg">
                    라이브러리
                  </th>
                  <th className="text-left py-3 pr-4 text-white font-semibold text-lg">
                    라이선스
                  </th>
                  <th className="text-left py-3 text-white font-semibold text-lg">
                    소스 코드
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                {libraries.map((lib) => (
                  <tr key={lib.name} className="border-b border-zinc-800/50">
                    <td className="py-3 pr-4 font-medium text-gray-300">
                      {lib.name}
                    </td>
                    <td className="py-3 pr-4">
                      <span className="px-2 py-0.5 bg-blue-900/30 text-blue-400 text-sm rounded">
                        {lib.license}
                      </span>
                    </td>
                    <td className="py-3">
                      <a
                        href={lib.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline text-sm"
                      >
                        GitHub
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={100}>
          <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
            에셋
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-3 pr-4 text-white font-semibold text-lg">
                    에셋
                  </th>
                  <th className="text-left py-3 pr-4 text-white font-semibold text-lg">
                    라이선스
                  </th>
                  <th className="text-left py-3 text-white font-semibold text-lg">
                    출처
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                {assets.map((asset) => (
                  <tr key={asset.name} className="border-b border-zinc-800/50">
                    <td className="py-3 pr-4 font-medium text-gray-300">
                      {asset.name}
                      <p className="text-xs text-gray-500 mt-1">
                        {asset.description}
                      </p>
                    </td>
                    <td className="py-3 pr-4 align-top">
                      <span className="px-2 py-0.5 bg-blue-900/30 text-blue-400 text-sm rounded">
                        {asset.license}
                      </span>
                    </td>
                    <td className="py-3 align-top">
                      <a
                        href={asset.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline text-sm"
                      >
                        링크
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={200}>
          <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-gray-400">
            <h2 className="text-xl font-semibold text-white mb-3">
              MIT License
            </h2>
            <p className="text-sm leading-relaxed">
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the &quot;Software&quot;), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            <p className="text-sm leading-relaxed mt-3">
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </p>
            <p className="text-sm leading-relaxed mt-3">
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF
              ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
              AND NONINFRINGEMENT.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
