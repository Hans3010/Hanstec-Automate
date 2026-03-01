interface AnimatedGridProps {
  className?: string;
}

export function AnimatedGrid({ className = "" }: AnimatedGridProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Moving grid layer */}
      <div
        className="animate-grid absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--red-glow) 1px, transparent 1px),
            linear-gradient(to bottom, var(--red-glow) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          /* Extend beyond container so the looping translate is seamless */
          top: "-40px",
          bottom: "-40px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
    </div>
  );
}
