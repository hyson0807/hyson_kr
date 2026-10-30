import { MetadataRoute } from 'next';
import { projects } from './data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hyson.kr';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // hydo — /hydo 는 App Store Connect 의 지원 URL 이라 검색에 노출돼야 한다.
    // 약관·방침은 앱 안에서 링크로 들어오는 문서라 우선순위를 낮게 둔다.
    {
      url: `${baseUrl}/hydo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hydo/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/hydo/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // PRUP — /prup 는 App Store Connect 의 지원 URL, 약관·방침은 앱 결제 화면에서 링크로 들어온다.
    {
      url: `${baseUrl}/prup`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/prup/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/prup/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Play 데이터 보안의 계정 삭제 URL
    {
      url: `${baseUrl}/prup/delete-account`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
