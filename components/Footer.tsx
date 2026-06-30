"use client";

import Image from "next/image";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="get-in-touch">
      {/* Cherry blossom decorative image - bottom left */}
      <div className="footer-bg-container">
        <Image
          src="/footer_transparent.png"
          alt="Cherry blossom decoration"
          width={560}
          height={380}
          className="footer-tree-img"
          priority
        />
      </div>

      {/* Centered content */}
      <div className="get-in-touch-content">
        <p className="footer-eyebrow">Want to connect?</p>
        <h2>Get in Touch</h2>
        <p className="footer-sub">
          Want to chat? Just shoot me a DM on Twitter and I&apos;ll get back to you as soon as I can.
        </p>

        <div className="footer-actions">
          <a
            href="https://x.com/ayushshhh"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-primary-btn"
          >
            <FaTwitter size={15} />
            Message on Twitter
          </a>
        </div>

        {/* <div className="footer-social-links">
          <a href="https://github.com/ayushshh" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/ayushsharma9504/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:bs9882074@gmail.com" className="footer-social-icon" aria-label="Email">
            <FaEnvelope size={18} />
          </a>
        </div> */}

        {/* <p className="footer-copyright">
          © {new Date().getFullYear()} Ayush Sharma · Built with Next.js
        </p> */}
      </div>
    </footer>
  );
}