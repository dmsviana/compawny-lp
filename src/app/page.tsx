import HeroSection from '@/components/sections/hero';
import FeaturesSection from '@/components/sections/features';
import HowItWorksSection from '@/components/sections/how-it-works';
import CTASection from '@/components/sections/cta';

export default function Home() {
  return (
      <>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
      </>
  );
}