interface SectionHeaderProps {
  /** Small monospace label above heading. E.g. "// El problema" */
  label: string;
  /** Main heading. Supports JSX for <span> highlights in red. */
  heading: React.ReactNode;
  /** Optional subtitle paragraph below heading. */
  subtitle?: string;
  /** Center-align the header. Defaults to centered. */
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  label,
  heading,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${isCenter ? "text-center" : "text-left"} ${className}`}
    >
      {/* Label — Space Mono, small, dimmed */}
      <p
        className="mb-3 text-xs tracking-widest uppercase"
        style={{
          fontFamily: "var(--font-space-mono), monospace",
          color: "var(--red)",
        }}
      >
        {label}
      </p>

      {/* Heading — Bebas Neue */}
      <h2
        className="text-4xl md:text-5xl lg:text-6xl leading-none tracking-wide"
        style={{
          fontFamily: "var(--font-bebas), sans-serif",
          color: "var(--text)",
        }}
      >
        {heading}
      </h2>

      {/* Subtitle — Rajdhani */}
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${isCenter ? "mx-auto max-w-2xl" : "max-w-xl"}`}
          style={{
            fontFamily: "var(--font-rajdhani), sans-serif",
            color: "var(--text-mid)",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
