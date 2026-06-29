// Experience section — add your real experience here.
// Currently placeholder entries based on resume interests.

const experiences: {
  role: string;
  company: string;
  period: string;
  description: string;
}[] = [
    // Add your experience entries here when you have them.
    // Example format:
    // {
    //   role: "Software Intern",
    //   company: "Company Name",
    //   period: "Jun 2025 – Aug 2025",
    //   description: "What you did there...",
    // },
  ];

const achievements = [
  {
    icon: "🏆",
    title: "Hackathons",
    desc: "Active participant in Smart India Hackathon (SIH), focusing on backend problem statements.",
  },
  // {
  //   icon: "🔧",
  //   title: "DevOps Enthusiast",
  //   desc: "Actively exploring CI/CD pipelines, containerization (Docker), and cloud infrastructure.",
  // },
  {
    icon: "💡",
    title: "Coding Challenges",
    desc: "Consistent problem solver in Data Structures & Algorithms using Java.",
  },
  // {
  //   icon: "🌐",
  //   title: "Emerging Tech",
  //   desc: "Exploring Web3 development and Solana blockchain ecosystems.",
  // },
];

export default function Experience() {
  return (
    <section id="experience" className="section animate-in delay-3">
      <h2 className="section-title">Experience</h2>

      {experiences.length > 0 ? (
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-company">{exp.company}</div>
                <span className="timeline-period">{exp.period}</span>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            padding: "1.25rem",
            borderRadius: "14px",
            border: "1px dashed var(--border)",
            background: "var(--bg-card)",
            color: "var(--text-muted)",
            fontSize: "0.8rem",
            textAlign: "center",
          }}
        >
          Looking for my first internship / full-time opportunity! 🚀
        </div>
      )}

      {/* Achievements & Interests */}
      <h2 className="section-title" style={{ marginTop: "2rem" }}>
        Achievements &amp; Interests
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "0.75rem",
        }}
      >
        {achievements.map((a) => (
          <div key={a.title} className="timeline-card" style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.4rem", lineHeight: 1, flexShrink: 0 }}>
              {a.icon}
            </span>
            <div>
              <div className="timeline-role">{a.title}</div>
              <p className="timeline-desc" style={{ marginTop: "0.3rem" }}>
                {a.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
