import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Cricket from "@/components/Cricket";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="pitch-bg" aria-hidden="true" />
      <div className="floating-balls" aria-hidden="true">
        <span className="ball ball-1">🏏</span>
        <span className="ball ball-2">🐍</span>
        <span className="ball ball-3">🏏</span>
        <span className="ball ball-4">⚡</span>
      </div>

      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Cricket />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
