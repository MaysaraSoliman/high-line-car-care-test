import Counting from "@/components/counting/Counting";
import HeroSection from "@/components/heroSection/HeroSection";
import Services from "@/components/services/Services";
import VisionAndMisson from "@/components/visionAndMisson/VisionAndMisson";
import WhoWeAre from "@/components/whoWeAre/WhoWeAre";
import WorkingHours from "@/components/workingHours/WorkingHours";
import WorkShop from "@/components/workShop/WorkShop";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <WorkShop />
      <WhoWeAre />
      <Counting />
      <VisionAndMisson />
      <WorkingHours />
      <Services />
    </section>
  );
}
