interface HansTecIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function HansTecIcon({ size = 40, className = "", style }: HansTecIconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Left vertical bar */}
      <rect x="8" y="8" width="14" height="64" fill="currentColor" />
      {/* Right vertical bar */}
      <rect x="58" y="8" width="14" height="64" fill="currentColor" />
      {/* Horizontal bar base (red) */}
      <polygon points="22,33 58,33 58,47 22,47" fill="var(--red)" />
      {/* Speed diagonal overlay (bright red) */}
      <polygon points="22,33 44,33 58,44 58,47 36,47 22,36" fill="var(--red-bright)" />
    </svg>
  );
}
