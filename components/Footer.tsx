import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a
            href="mailto:bs9882074@gmail.com"
            className="footer-link"
            aria-label="Email"
            id="footer-email"
          >
            <FaEnvelope size={14} />
          </a>
          <a
            href="https://github.com/ayushshh"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
            id="footer-github"
          >
            <FaGithub size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayushsharma9504/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
            id="footer-linkedin"
          >
            <FaLinkedin size={14} />
          </a>
          <a
            href="https://x.com/ayushshhh"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Twitter / X"
            id="footer-twitter"
          >
            <FaTwitter size={14} />
          </a>
        </div>
        <p className="footer-text" style={{ marginTop: "0.75rem" }}>
          © {year} Ayush Kumar Sharma. Built with Next.js &amp; ☕
        </p>
        <p className="footer-text" style={{ marginTop: "0.25rem" }}>
          bs9882074@gmail.com &nbsp;·&nbsp;{" "}
          <a
            href="https://www.linkedin.com/in/ayushsharma9504/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            linkedin.com/in/ayushsharma9504
          </a>{" "}
          &nbsp;·&nbsp;{" "}
          <a
            href="https://github.com/ayushshh"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            github.com/ayushshh
          </a>
        </p>
      </div>
    </footer>
  );
}