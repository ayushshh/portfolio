import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GitHubActivity from "@/components/GitHubActivity";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* Subtle animated floating background illustrations */}
      <div className="bg-floating-assets">
        <div className="floating-asset asset-fire" />
        <div className="floating-asset asset-skull" />
      </div>

      <main className="main-content">
        {/* Hero displays instantly on mount */}
        <Hero />

        <hr className="section-divider" />
        <AnimatedSection>
          <Education />
        </AnimatedSection>

        <hr className="section-divider" />
        <AnimatedSection>
          <Skills />
        </AnimatedSection>

        <hr className="section-divider" />
        <AnimatedSection>
          <Experience />
        </AnimatedSection>

        <hr className="section-divider" />
        <AnimatedSection>
          <Projects />
        </AnimatedSection>

        <hr className="section-divider" />
        <AnimatedSection>
          <GitHubActivity />
        </AnimatedSection>

        <hr className="section-divider" />
        <AnimatedSection>
          <Blogs />
        </AnimatedSection>
      </main>

      <Footer />
      <ThemeToggle />
    </div>
  );
}
