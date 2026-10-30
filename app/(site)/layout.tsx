import { Header } from '../components/site/Header';
import { Footer } from '../components/site/Footer';
import { FloatingCta } from '../components/site/FloatingCta';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
