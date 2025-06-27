import HeroSection from '@/components/HeroSection';
import SafeSleepSection from '@/components/SafeSleepSection';
import SouthCarolinaSection from '@/components/SouthCarolinaSection';
import FamilyReunificationSection from '@/components/FamilyReunificationSection';
import CallToActionFooter from '@/components/CallToActionFooter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <SafeSleepSection />
      <SouthCarolinaSection />
      <FamilyReunificationSection />
      <CallToActionFooter />
      <Footer />
    </main>
  );
}
