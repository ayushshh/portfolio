import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GitHubActivity from "@/components/GitHubActivity";
import Blogs from "@/components/Blogs";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* <Navbar /> */}

      <main className="main-content">
        <Hero />

        <hr className="section-divider" />
        <Education />

        <hr className="section-divider" />
        <Skills />

        <hr className="section-divider" />
        <Experience />

        <hr className="section-divider" />
        <Projects />

        <hr className="section-divider" />
        <GitHubActivity />

        <hr className="section-divider" />
        <Blogs />

        {/* <hr className="section-divider" />
        <Certifications /> */}
      </main>

      <Footer />
      <ThemeToggle />
    </div>
  );
}
