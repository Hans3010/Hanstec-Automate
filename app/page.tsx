import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Solutions } from "@/components/Solutions";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { UrgencyBanner } from "@/components/UrgencyBanner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problems />
      <Solutions />
      <UseCases />
      <HowItWorks />
      <Pricing />
      <UrgencyBanner />
      <Contact />
      <Footer />
    </main>
  );
}
