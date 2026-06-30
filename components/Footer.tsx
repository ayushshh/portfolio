import Image from "next/image";

export default function Footer() {
  return (
    <footer className="get-in-touch">
      <div className="footer-bg-container">
        <Image
          src="/footer_transparent.png"
          alt="Footer decoration"
          width={450}
          height={300}
          className="footer-tree-img"
          priority
        />
      </div>
      <div className="get-in-touch-content">
        <h2>Get in Touch</h2>
        <p style={{ marginBottom: "1.5rem" }}>
          Want to chat? Just drop your message on twitter.
        </p>
        <a
          href="https://x.com/ayushshhh"
          target="_blank"
          rel="noopener noreferrer"
          className="view-more-button"
          style={{ display: "inline-block" }}
        >
          Message on Twitter
        </a>
      </div>
    </footer>
  );
}