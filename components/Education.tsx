const education = [
  {
    icon: "🎓",
    degree: "B.Tech in Computer Science Engineering",
    school: "GLA University, Mathura, UP",
    cgpa: "CGPA: 6.6",
    year: "2023 – 2027",
  },
  {
    icon: "🏫",
    degree: "Intermediate (12th)",
    school: "DAV Public School, DAV-NIT, Jamshedpur, Jharkhand",
    cgpa: "67%",
    year: "2023",
  },
  // {
  //   icon: "📚",
  //   degree: "High School (10th)",
  //   school: "Sri Krishna Public School, Bistupur, Jamshedpur",
  //   cgpa: "70%",
  //   year: "2021",
  // },
];

export default function Education() {
  return (
    <section id="education" className="section animate-in delay-1">
      <h2 className="section-title">Education</h2>

      {education.map((item, i) => (
        <div key={i} className="edu-item">
          <div className="edu-icon">{item.icon}</div>
          <div className="edu-body">
            <div className="edu-degree">{item.degree}</div>
            <div className="edu-school">{item.school}</div>
            {/* {item.cgpa && (
              <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                {item.cgpa}
              </div>
            )} */}
          </div>
          <span className="edu-year">{item.year}</span>
        </div>
      ))}
    </section>
  );
}
