import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "CodeArena",
    desc: "A full-stack coding practice platform inspired by LeetCode with real-time code execution, progress tracking, and secure authentication.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Judge0", "Clerk", "Prisma"],
    github: "https://github.com/ayushshh",
    live: null, // Add live link when available
    year: "2026 – Present",
  },
  {
    name: "Smart Attendance System",
    desc: "An automated student attendance tracking web app with JWT authentication, Role-Based Access Control, and MongoDB for daily report generation.",
    tags: ["MERN Stack", "JWT", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/ayushshh",
    live: null,
    year: "2025",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section animate-in delay-4">
      <h2 className="section-title">Projects</h2>

      {/* Blurred preview with "Temporarily Unavailable" overlay */}
      <div className="projects-wrapper">
        <div className="projects-grid">
          {/* Fake project thumbnails (blurred) */}
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
                <div
                  className="project-thumb-bar"
                  style={{ width: "60%", background: thumb.bars[0] }}
                />
                <div
                  className="project-thumb-bar"
                  style={{ width: "80%", background: thumb.bars[1] }}
                />
                <div
                  className="project-thumb-bar"
                  style={{ width: "40%", background: "#475569" }}
                />
                <div
                  className="project-thumb-bar"
                  style={{ width: "70%", background: "#475569" }}
                />
                <div
                  className="project-thumb-bar"
                  style={{ width: "55%", background: "#475569" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="unavailable-overlay">
          <div className="unavailable-card">
            <div className="unavailable-title">Temporarily Unavailable :(</div>
            <p className="unavailable-desc">
              Projects are currently being migrated to a new hosting provider.
              Live links will be coming soon!
            </p>
            <p className="unavailable-note">
              GitHub repos are linked below. 👇
            </p>
          </div>
        </div>
      </div>

      {/* Real project cards */}
      <div className="project-cards">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div className="project-card-name">{project.name}</div>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  whiteSpace: "nowrap",
                  marginLeft: "0.5rem",
                }}
              >
                {project.year}
              </span>
            </div>
            <p className="project-card-desc">{project.desc}</p>
            <div className="project-card-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-card-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  id={`project-github-${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <FaGithub size={12} />
                  GitHub
                </a>
              )}
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  id={`project-live-${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <FaExternalLinkAlt size={10} />
                  Live Demo
                </a>
              ) : (
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  🔄 Coming soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
