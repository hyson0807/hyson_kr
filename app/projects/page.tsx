import { Metadata } from 'next';
import { apps, getAvailablePrograms } from '../data';
import { PageHero } from '../components/PageHero';
import ProjectsExplorer from './ProjectsExplorer';

export const metadata: Metadata = {
  title: '앱 소개',
  description:
    'Hyson Works에서 개발한 앱들을 소개합니다. IsoLog, LinkJob 등 사용자 경험을 최우선으로 생각하는 크로스플랫폼 앱.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: '앱 소개 | Hyson Works',
    description: 'Hyson Works에서 개발한 앱들을 소개합니다.',
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <PageHero
          title="Projects"
          subtitle="Hyson Works에서 진행한 프로젝트들입니다. 모든 프로젝트는 사용자 경험을 최우선으로 생각하며 개발되었습니다."
        />
        <ProjectsExplorer apps={apps} programs={getAvailablePrograms()} />
      </div>
    </div>
  );
}
