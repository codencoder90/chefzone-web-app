import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Trust } from '../components/Trust';
import { JobSeekers } from '../components/JobSeekers';
import { Employers } from '../components/Employers';
import { ProfessionalCatering } from '../components/ProfessionalCatering';
import { Referrals } from '../components/Referrals';
import { Testimonials } from '../components/Testimonials';
import { News } from '../components/News';
import { FinalCTA } from '../components/FinalCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Trust />
      <JobSeekers />
      <Employers />
      <ProfessionalCatering />
      <Referrals />
      <Testimonials />
      <News />
      <FinalCTA />
    </>
  );
}
