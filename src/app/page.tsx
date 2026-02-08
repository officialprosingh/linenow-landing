import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Integrations } from "@/components/integrations";
import { Features } from "@/components/features";
import { ComparisonTable } from "@/components/comparison-table";
import { Stats } from "@/components/stats";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Integrations />
      <Features />
      <ComparisonTable />
      <Stats />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
