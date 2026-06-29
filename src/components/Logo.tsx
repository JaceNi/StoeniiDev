interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  fontSize?: number;
}

export default function Logo({ className = '', width = 160, height = 32, fontSize = 15 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="0" y="6" width="8" height="20" rx="2" fill="currentColor" />
      <rect x="12" y="2" width="8" height="28" rx="2" fill="currentColor" />
      <rect x="24" y="6" width="8" height="20" rx="2" fill="currentColor" />
      <text
        x="40"
        y="22"
        fill="currentColor"
        fontSize={fontSize}
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        StoneiiDeV
      </text>
    </svg>
  );
}
