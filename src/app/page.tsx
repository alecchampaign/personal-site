import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Footer } from "@/components/sections/Footer";
import { ScrollNav } from "@/components/navigation/ScrollNav";

export default function Home() {
  return (
    <>
      <ScrollNav />
      <main className="min-h-screen">
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Timeline />
      </main>
      <Footer />
    </>
  );
}
