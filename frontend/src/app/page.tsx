import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
  <   Footer />

    </>
  );
}