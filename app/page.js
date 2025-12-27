import ClientTestimonials from "@/components/sections/ClientTestimonials";
import FAQs from "@/components/sections/FAQs";
import Hero from "@/components/sections/Hero";
import HowWeMoveYourCargo from "@/components/sections/HowWeMoveYourCargo";
import KeyMarkets from "@/components/sections/KeyMarkets";
import OurServicesSection from "@/components/sections/OurServices";
import ParallaxCTA from "@/components/sections/ParallaxCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <OurServicesSection />
      <HowWeMoveYourCargo />
      <KeyMarkets />
      <ClientTestimonials />
      <FAQs />
      <ParallaxCTA />
    </>
    
  );
}
