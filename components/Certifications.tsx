const certifications = [
  {
    icon: "📜",
    name: "Meta Front-End Developer Professional Certificate",
    org: "Coursera",
    focus: "Advanced React, Version Control, and UI/UX Principles",
    year: "2025 – Present",
  },
  {
    icon: "🐍",
    name: "Python & Artificial Intelligence Bootcamp",
    org: "DevTown",
    focus: "Python scripting and AI fundamentals",
    year: "2024",
  },
  {
    icon: "🧠",
    name: "Deep Learning & Deployment Bootcamp",
    org: "DevTown",
    focus: "Neural networks and model deployment",
    year: "2024",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section animate-in">
      <h2 className="section-title">Training &amp; Certifications</h2>

      {certifications.map((cert) => (
        <div key={cert.name} className="cert-item">
          <div className="cert-icon">{cert.icon}</div>
          <div style={{ flex: 1 }}>
            <div className="cert-name">{cert.name}</div>
            <div className="cert-org">{cert.org}</div>
            <div className="cert-focus">{cert.focus}</div>
          </div>
          <span
            style={{
              fontSize: "0.72rem",
              color: "var(--text-muted)",
              whiteSpace: "nowrap",
              alignSelf: "flex-start",
              background: "var(--skill-bg)",
              border: "1px solid var(--skill-border)",
              padding: "0.2rem 0.6rem",
              borderRadius: "999px",
            }}
          >
            {cert.year}
          </span>
        </div>
      ))}
    </section>
  );
}
