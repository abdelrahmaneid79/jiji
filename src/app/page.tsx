import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Outcomes } from "@/components/sections/Outcomes";
import { WhySoloSend } from "@/components/sections/WhySoloSend";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <Process />
      <Outcomes />
      <WhySoloSend />
      <CTA />
      <FAQ />
    </>
  );
}
