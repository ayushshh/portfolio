// Blog / Quick Tech Bytes section
// Add your own blog posts here when you have them.
// When you have a real blog, connect this to your CMS/API.

const techBytes = [
  {
    date: "1-07-2026",
    title: "Why ITOps Need Right-Sized AI, Not Bigger Models",
    excerpt:
      "ITOps gains more from “fit-for-purpose” AI than from chasing bigger models. Smaller, domain-specific AI delivers speed, accuracy, cost savings, and compliance — exactly what IT operations need to stay efficient and secure. ",
    link: "https://www.devopsdigest.com/why-itops-need-right-sized-ai-not-bigger-models",
  },
  {
    date: "30-06-2026",
    title: "ERC-4337 Smart Account Tutorial With Web3j",
    excerpt:
      "A practical guide to implementing ERC-4337 smart accounts using Web3j for Java developers, covering wallet creation, transaction signing, and account abstraction concepts.",
    link: "https://blog.web3labs.com/erc-4337-smart-account-tutorial-with-web3j/",
  },
];

const lifeLogs = [
  {
    period: "2026 • GLA University",
    title: "Week 1 — Started my portfolio project",
    link: "#",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="section animate-in">
      <h2 className="section-title">Quick Tech Bytes</h2>

      {techBytes.map((post) => (
        <div key={post.title} className="blog-card">
          <div className="blog-date">{post.date}</div>
          <div className="blog-title">{post.title}</div>
          <p className="blog-excerpt">{post.excerpt}</p>
          <a href={post.link} className="blog-read-link" id={`blog-${post.title.substring(0, 20).toLowerCase().replace(/\s+/g, "-")}`}>
            Read Blog →
          </a>
        </div>
      ))}

      <a href="#" className="view-all-btn" id="view-all-tech-bytes">
        View All Tech Bytes
      </a>

      {/* Life Log */}
      <h2 className="section-title" style={{ marginTop: "2.5rem" }}>
        Life Log
      </h2>

      {lifeLogs.map((log) => (
        <div key={log.title} className="blog-card">
          <div className="blog-date">{log.period}</div>
          <div className="blog-title">{log.title}</div>
          <a href={log.link} className="blog-read-link" id={`lifelog-${log.title.substring(0, 20).toLowerCase().replace(/\s+/g, "-")}`}>
            Read Weekly Entry →
          </a>
        </div>
      ))}

      <a href="#" className="view-all-btn" id="view-all-weekly-logs">
        View Weekly Logs
      </a>
    </section>
  );
}
