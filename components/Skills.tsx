// Skills icons use Simple Icons CDN (simpleicons.org) — works without any npm install.
// Each skill has a `slug` matching the Simple Icons name (lowercase, no spaces).
// `color` is the brand hex for the icon fill.

type Skill = {
  name: string;
  slug: string;       // simpleicons.org slug
  color?: string;     // hex fill color (optional — falls back to currentColor)
  emoji?: string;     // fallback if no icon on Simple Icons
};

const skillGroups: { label: string; skills: Skill[] }[] = [
  {
    label: "Programming Languages",
    skills: [
      { name: "Java", slug: "openjdk", color: "#ED8B00" },
      { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
      { name: "TypeScript", slug: "typescript", color: "#3178C6" },
      { name: "Python", slug: "python", color: "#3776AB" },
      { name: "HTML", slug: "html5", color: "#E34F26" },
      { name: "CSS", slug: "css3", color: "#1572B6" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React.js", slug: "react", color: "#61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "#000000" },
      { name: "Redux", slug: "redux", color: "#764ABC" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "#06B6D4" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", slug: "nodedotjs", color: "#5FA04E" },
      { name: "Express.js", slug: "express", color: "#000000" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MongoDB", slug: "mongodb", color: "#47A248" },
      { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
      { name: "MySQL", slug: "mysql", color: "#4479A1" },
    ],
  },
  {
    label: "DevOps & Tools",
    skills: [
      { name: "Git", slug: "git", color: "#F05032" },
      { name: "Docker", slug: "docker", color: "#2496ED" },
      { name: "AWS", slug: "amazonwebservices", color: "#FF9900" },
      { name: "Linux", slug: "linux", color: "#FCC624" },
      { name: "Postman", slug: "postman", color: "#FF6C37" },
      { name: "CI/CD", slug: "githubactions", color: "#2088FF" },
      { name: "Kubernetes", slug: "kubernetes", color: "#326CE5" },
    ],
  },
  {
    label: "Currently Learning",
    skills: [
      { name: "Web3", slug: "web3dotjs", color: "#F16822" },
      { name: "Solana", slug: "solana", color: "#9945FF" },
      { name: "AIML", slug: "aiml", emoji: "🧠" }
    ],
  },
];

function SkillIcon({ slug, color, emoji, name }: Skill) {
  if (emoji) {
    return <span className="skill-icon-img">{emoji}</span>;
  }

  // Simple Icons CDN — themed: dark bg icons get white, light bg get their brand color
  const iconUrl = `https://cdn.simpleicons.org/${slug}/${(color ?? "888888").replace("#", "")}`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={iconUrl}
      alt={name}
      width={16}
      height={16}
      className="skill-icon-img"
      loading="lazy"
    />
  );
}

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
                <SkillIcon {...skill} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
