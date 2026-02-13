import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const element = document.querySelector(hash);
    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <div className="gradient-line" />
        <About />
        <div className="gradient-line" />
        <Experience />
        <div className="gradient-line" />
        <Projects />
        <div className="gradient-line" />
        <Blog />
        <div className="gradient-line" />
        <Skills />
        <div className="gradient-line" />
        <Certifications />
        <div className="gradient-line" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
