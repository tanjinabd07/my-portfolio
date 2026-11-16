import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1120]">
      <Navbar />
      <Hero />

      <section id="about" className="min-h-screen" />
      <section id="skills" className="min-h-screen" />
      <section id="education" className="min-h-screen" />
      <section id="experience" className="min-h-screen" />
      <section id="projects" className="min-h-screen" />
      <section id="contact" className="min-h-screen" />
    </main>
  );
}
