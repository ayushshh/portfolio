import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaCopy
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export default function Hero() {
  return (
    <section id="hero" className="hero animate-in">
      {/* Avatar */}
      <div >
        <Image
          src="/img5.jpg"
          alt="Ayush Sharma"
          width={160}
          height={160}
          className="hero-avatar"
          priority
        />
      </div>

      {/* Info */}
      <div>
        <h1 className="hero-name">Ayush Sharma</h1>
        <p className="hero-tagline">A developer who knows how to code properly.</p>

        <p className="hero-bio">
          Grown up kid trying to build cool things on the internet. But for now, just trying to operate my own life. I love my relationship with semicolons and arduino. And of course I have got a growing collection of half-finished side projects.
        </p>

        <div className="hero-location">
          <MdLocationPin size={14} />
          <span>Delhi, India</span>
        </div>

        <div className="hero-actions">
          <a
            id="hero-email"
            href="mailto:bs9882074@gmail.com"
            className="icon-btn font-sans"
            aria-label="Send email"
            title="bs9882074@gmail.com"
          >
            <FaEnvelope size={15} />
          </a>

          <a
            id="hero-github"
            href="https://github.com/ayushshh"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <FaGithub size={15} />
          </a>

          <a
            id="hero-linkedin"
            href="https://www.linkedin.com/in/ayushsharma9504/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <FaLinkedin size={15} />
          </a>

          <a
            id="hero-twitter"
            href="https://x.com/ayushshhh"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Twitter / X profile"
            title="Twitter / X"
          >
            <FaTwitter size={15} />
          </a>

          {/* <a href="#blogs" className="blog-link-btn" id="hero-blog-link">
            📝 Blog
          </a> */}
        </div>
      </div>
    </section>
  );
}
