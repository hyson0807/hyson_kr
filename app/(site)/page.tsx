import { Hero } from '../components/home/Hero';
import { ProjectMosaic } from '../components/home/ProjectMosaic';
import { Intro } from '../components/home/Intro';
import { WhyUs } from '../components/home/WhyUs';
import { HomeCanvas } from '../components/home/HomeCanvas';
import { Stats } from '../components/home/Stats';
import { Banner } from '../components/home/Banner';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { TechMarquee } from '../components/home/TechMarquee';
import { FinalCta } from '../components/home/FinalCta';

export default function Home() {
  return (
    <>
      <HomeCanvas
        dark={
          <>
            <Hero />
            <ProjectMosaic />
            <Intro />
            <WhyUs />
          </>
        }
        light={<Stats />}
      />
      <Banner />
      <FeaturedProjects />
      <TechMarquee />
      <FinalCta />
    </>
  );
}
