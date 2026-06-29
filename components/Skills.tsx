const skillGroups = [
  {
    label: "Programming Languages",
    skills: [
      { icon: "☕", name: "Java" },
      { icon: "📜", name: "JavaScript" },
      { icon: "🔷", name: "TypeScript" },
      { icon: "🐍", name: "Python" },
      { icon: "🌐", name: "HTML" },
      { icon: "🎨", name: "CSS" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { icon: "⚛️", name: "React.js" },
      { icon: "▲", name: "Next.js" },
      { icon: "🐻", name: "Zustand" },
      { icon: "💨", name: "Tailwind CSS" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { icon: "🟢", name: "Node.js" },
      { icon: "🚂", name: "Express.js" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { icon: "🍃", name: "MongoDB" },
      { icon: "🐘", name: "PostgreSQL" },
      { icon: "🐬", name: "MySQL" },
    ],
  },
  {
    label: "DevOps & Tools",
    skills: [
      { icon: "🔀", name: "Git" },
      { icon: "🐳", name: "Docker" },
      { icon: "☁️", name: "AWS" },
      { icon: "🐧", name: "Linux" },
      { icon: "📬", name: "Postman" },
    ],
  },
  {
    label: "Currently Learning",
    skills: [
      { icon: "⛓️", name: "Web3" },
      { icon: "🪙", name: "Solana" },
      { icon: "⚙️", name: "CI/CD" },
      { icon: "📦", name: "Kubernetes" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section animate-in delay-2">
      <h2 className="section-title">Skills</h2>

      {skillGroups.map((group) => (
        <div key={group.label} className="skills-group">
          <div className="skills-group-label">{group.label}</div>
          <div className="skills-list">
            {group.skills.map((skill) => (
              <div key={skill.name} className="skill-badge" title={skill.name}>
                <span className="skill-icon">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
