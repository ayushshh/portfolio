"use client";

import { useMemo } from "react";

// Generate a realistic-looking GitHub contribution grid
function generateContributions() {
  const weeks = 52;
  const days = 7;
  const grid: number[][] = [];

  // Seed a reproducible pattern using a simple pseudo-random
  let seed = 42;
  const rand = () => {
    seed = (seed * 16807 + 0) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      const r = rand();
      // Simulate realistic contribution patterns
      let level = 0;
      if (r > 0.6) level = 1;
      if (r > 0.75) level = 2;
      if (r > 0.87) level = 3;
      if (r > 0.94) level = 4;
      // Weekend slightly less active
      if ((d === 0 || d === 6) && r > 0.8) level = Math.max(0, level - 1);
      week.push(level);
    }
    grid.push(week);
  }
  return grid;
}

const MONTHS = [
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
];

const DAYS = ["Mon", "", "Wed", "", "Fri", "", ""];

export default function GitHubActivity() {
  const grid = useMemo(() => generateContributions(), []);

  // Month labels: place every ~4.33 weeks
  const monthPositions = MONTHS.map((m, i) => ({
    label: m,
    offset: Math.round(i * (52 / 12)),
  }));

  return (
    <section id="github" className="section animate-in">
      <h2 className="section-title">GitHub Activity</h2>

      <div style={{ overflowX: "auto", paddingBottom: "0.5rem" }}>
        {/* Month labels */}
        <div
          style={{
            display: "flex",
            paddingLeft: "32px",
            marginBottom: "4px",
            gap: 0,
          }}
        >
          {grid.map((_, wi) => {
            const match = monthPositions.find((m) => m.offset === wi);
            return (
              <div
                key={wi}
                style={{
                  width: "16px",
                  flexShrink: 0,
                  fontSize: "0.6rem",
                  color: "var(--text-muted)",
                  whiteSpace: "nowrap",
                  overflow: "visible",
                }}
              >
                {match ? match.label : ""}
              </div>
            );
          })}
        </div>

        {/* Grid rows (7 days) */}
        {[0, 1, 2, 3, 4, 5, 6].map((day) => (
          <div
            key={day}
            style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: "3px" }}
          >
            {/* Day label */}
            <div
              style={{
                width: "28px",
                fontSize: "0.6rem",
                color: "var(--text-muted)",
                textAlign: "right",
                paddingRight: "6px",
                flexShrink: 0,
              }}
            >
              {DAYS[day]}
            </div>
            {/* Cells */}
            {grid.map((week, wi) => (
              <div
                key={wi}
                className={`gh-cell gh-${week[day]}`}
                style={{ marginRight: "3px" }}
                title={`${week[day]} contribution${week[day] !== 1 ? "s" : ""}`}
              />
            ))}
          </div>
        ))}
      </div>

      <p
        style={{
          fontSize: "0.72rem",
          color: "var(--text-muted)",
          marginTop: "0.75rem",
        }}
      >
        📊 Contribution graph —{" "}
        <a
          href="https://github.com/ayushshh"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--accent)", textDecoration: "none" }}
        >
          view full profile on GitHub ↗
        </a>
      </p>
    </section>
  );
}
