import AdmissionOverview from "@/components/academics/undergraduate/main-page/AdmissionOverview";
import CTASection from "@/components/academics/undergraduate/main-page/CTASection";
import FinancialAidPreview from "@/components/academics/undergraduate/main-page/FinancialAidPreview";
import HeroSection from "@/components/academics/undergraduate/main-page/HeroSection";
import StatsInfographic from "@/components/academics/undergraduate/main-page/StatsInfographic";
import Testimonials from "@/components/academics/undergraduate/main-page/Testimonials";
import WhyChooseUs from "@/components/academics/undergraduate/main-page/WhyChooseUs";

export default function UndergraduatePage() {
  const bannerTitle = "Our Undergraduate Programs";
  const bannerDescription =
    "Gain the skills, knowledge, and experience to shape your future and make an impact in the world.";
  return (
    <main className="bg-gray-50 dark:bg-[#161929] min-h-screen relative space-y-20">
      <div>
        <HeroSection title={bannerTitle} description={bannerDescription} />
        <StatsInfographic />
      </div>
      <WhyChooseUs />
      <div className="w-11/12 mx-auto space-y-20 my-20">
        <AdmissionOverview />
        <FinancialAidPreview />
        <Testimonials />
      </div>
      <CTASection />
    </main>
  );
}
