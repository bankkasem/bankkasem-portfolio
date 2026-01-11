import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const isAvailableForHire =
  process.env.NEXT_PUBLIC_AVAILABLE_FOR_HIRE === "true";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {isAvailableForHire && <Contact />}
      <Footer />
    </main>
  );
}
