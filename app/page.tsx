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
      <main className="main-content">
        {/* Hero displays instantly on mount */}
        <Hero />

        <AnimatedSection>
          <Education />
        </AnimatedSection>

        <AnimatedSection>
          <Skills />
        </AnimatedSection>

        <AnimatedSection>
          <Experience />
        </AnimatedSection>

        <AnimatedSection>
          <Projects />
        </AnimatedSection>

        <AnimatedSection>
          <GitHubActivity />
        </AnimatedSection>

        <AnimatedSection>
          <Blogs />
        </AnimatedSection>
      </main>

      <Footer />
      <ThemeToggle />
    </div>
  );
}
