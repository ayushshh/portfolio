import { FaExternalLinkAlt } from "react-icons/fa";

// ─── Add your projects here when live ────────────────────────────────────────
// const projects = [
//   {
//     name: "CodeArena",
//     live: "https://codearena.vercel.app",
//   },
//   {
//     name: "Smart Attendance System",
//     live: "https://attendance.vercel.app",
//   },
// ];
// ─────────────────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section id="projects" className="section animate-in delay-4">
      <h2 className="section-title">Projects</h2>

      {/* ── Currently showing: Temporarily Unavailable banner ── */}
      <div className="projects-wrapper">
        {/* Blurred fake thumbnails in the background */}
        <div className="projects-grid">
          {[
            { bars: ["#22c55e", "#16a34a"], bg: "#0f172a" },
            { bars: ["#a855f7", "#7c3aed"], bg: "#1e1b4b" },
            { bars: ["#06b6d4", "#0891b2"], bg: "#0c1a2e" },
          ].map((thumb, i) => (
            <div key={i} className="project-thumb">
              <div
                className="project-thumb-inner"
                style={{
                  background: thumb.bg,
                  filter: "blur(3px) brightness(0.7)",
                  transform: "scale(1.05)",
                }}
              >
                <div className="project-thumb-bar" style={{ width: "60%", background: thumb.bars[0] }} />
                <div className="project-thumb-bar" style={{ width: "80%", background: thumb.bars[1] }} />
                <div className="project-thumb-bar" style={{ width: "40%", background: "#475569" }} />
                <div className="project-thumb-bar" style={{ width: "70%", background: "#475569" }} />
                <div className="project-thumb-bar" style={{ width: "55%", background: "#475569" }} />
              </div>
            </div>
          ))}
        </div>

        {/* Overlay card */}
        <div className="unavailable-overlay">
          <div className="unavailable-card">
            <h3 className="unavailable-title">Temporarily Unavailable :(</h3>
            <p className="unavailable-desc">
              Recently Jeffry&apos;s AWS charged me $100 gonna migrate all my projects to different cloud provider.
              <br /><br />
              <strong>Live links will be coming soon!</strong>
            </p>
          </div>
        </div>
      </div>

      {/*
        ── When projects are live, replace the block above with this ────────────

        <div className="project-cards">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card project-card-live"
              id={`project-${project.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <span className="project-card-name">{project.name}</span>
              <FaExternalLinkAlt size={11} className="project-live-icon" />
            </a>
          ))}
        </div>

        ─────────────────────────────────────────────────────────────────────────
      */}
    </section>
  );
}
