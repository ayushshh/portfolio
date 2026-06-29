// Navigation bar at the top
export default function TopNav() {
  return (
    <nav className="top-nav" aria-label="Main navigation">
      <div className="top-nav-inner">
        <a href="#hero" className="nav-name">
          ayush.dev
        </a>
        <div className="nav-links">
          <a href="#education" className="nav-link">education</a>
          <a href="#skills" className="nav-link">skills</a>
          <a href="#experience" className="nav-link">experience</a>
          <a href="#projects" className="nav-link">projects</a>
          <a href="#blogs" className="nav-link">blog</a>
        </div>
      </div>
    </nav>
  );
}