"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved === "dark" || (!saved && prefersDark);

    setIsDark(shouldBeDark);
    setMounted(true);

    document.documentElement.setAttribute(
      "data-theme",
      shouldBeDark ? "dark" : "light"
    );
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      id="theme-toggle"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle dark mode"
      // Before mount, render neutral content so server & client HTML match
      title={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
    >
      {/* Render a neutral icon until mounted to prevent hydration mismatch */}
      {mounted ? (isDark ? "☀️" : "🌙") : "🌙"}
    </button>
  );
}
