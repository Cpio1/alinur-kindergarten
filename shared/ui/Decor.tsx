/** Декоративные SVG-элементы. Скрыты от экранных дикторов и не влияют на раскладку. */
type DecorProps = { className?: string; size?: number };

export function Sun({ className, size = 96 }: DecorProps) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} className={className} aria-hidden="true">
      <g className="decor-spin" style={{ transformOrigin: "60px 60px" }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={i} x="55" y="3" width="10" height="22" rx="5" fill="#F8D66D" transform={`rotate(${i * 36} 60 60)`} />
        ))}
      </g>
      <circle cx="60" cy="60" r="31" fill="#F8D66D" />
      <circle cx="60" cy="60" r="31" fill="url(#sun-glow)" />
      <circle cx="50" cy="56" r="3.4" fill="#26354B" />
      <circle cx="70" cy="56" r="3.4" fill="#26354B" />
      <path d="M49 67c4 6 18 6 22 0" fill="none" stroke="#26354B" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="42" cy="66" r="4.5" fill="#F3B5A8" opacity=".8" />
      <circle cx="78" cy="66" r="4.5" fill="#F3B5A8" opacity=".8" />
      <defs>
        <radialGradient id="sun-glow" cx=".35" cy=".3" r=".8">
          <stop offset="0" stopColor="#fff" stopOpacity=".55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function Cloud({ className, size = 120, color = "#FFFFFF" }: DecorProps & { color?: string }) {
  return (
    <svg viewBox="0 0 120 70" width={size} height={(size * 70) / 120} className={className} aria-hidden="true">
      <path
        d="M30 66C14 66 4 56 4 44c0-11 9-20 21-20 3-12 14-20 27-20 14 0 25 9 28 21 2-1 5-1 7-1 14 0 29 9 29 22 0 12-10 20-24 20H30Z"
        fill={color}
      />
    </svg>
  );
}

export function Star({ className, size = 28, color = "#F8D66D" }: DecorProps & { color?: string }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} className={className} aria-hidden="true">
      <path
        d="M16 2.5c1.3 0 2.4.8 2.9 2l2.6 6 6.5.7c1.3.1 2.4 1 2.8 2.2.4 1.2 0 2.5-.9 3.3l-4.9 4.3 1.4 6.4c.3 1.2-.2 2.5-1.2 3.2-1 .8-2.4.8-3.4.2L16 26.800l-5.800 3.300c-1.100.6-2.400.6-3.400-.2-1-.7-1.500-2-1.200-3.200l1.400-6.400-4.900-4.300c-.9-.8-1.300-2.100-.9-3.300.4-1.200 1.500-2.100 2.800-2.200l6.500-.7 2.600-6c.5-1.200 1.600-2 2.900-2Z"
        fill={color}
      />
    </svg>
  );
}

export function Flower({ className, size = 44, color = "#F3B5A8", center = "#F8D66D" }: DecorProps & { color?: string; center?: string }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <ellipse key={i} cx="24" cy="11" rx="8" ry="10" fill={color} transform={`rotate(${i * 60} 24 24)`} />
      ))}
      <circle cx="24" cy="24" r="7" fill={center} />
    </svg>
  );
}

export function Squiggle({ className, width = 120, color = "#F3B5A8" }: { className?: string; width?: number; color?: string }) {
  return (
    <svg viewBox="0 0 120 20" width={width} height={(width * 20) / 120} className={className} aria-hidden="true">
      <path
        d="M3 10c9-9 19-9 28 0s19 9 28 0 19-9 28 0 19 9 30 0"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Dots({ className, color = "#85C7E8" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 60" width="60" height="60" className={className} aria-hidden="true">
      {[0, 1, 2].flatMap((row) =>
        [0, 1, 2].map((col) => <circle key={`${row}${col}`} cx={10 + col * 20} cy={10 + row * 20} r="4" fill={color} />),
      )}
    </svg>
  );
}

/** Волнистая граница между секциями. */
export function Wave({ color, className, flip }: { color: string; className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      className={`pointer-events-none relative block h-10 w-full desk:h-16 ${flip ? "-mb-px rotate-180" : "-mb-px"} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M0 34c120-30 240-38 380-16 150 24 250 50 400 36 170-16 260-52 400-44 110 6 190 22 260 40v20H0Z"
        fill={color}
      />
    </svg>
  );
}

export function WhatsAppIcon({ className, size = 22 }: DecorProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true" fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.34-.2-3.58.94.96-3.49-.23-.36a9.46 9.46 0 0 1-1.45-5.04c0-5.23 4.26-9.49 9.5-9.49 2.53 0 4.91.99 6.7 2.79a9.43 9.43 0 0 1 2.78 6.71c0 5.23-4.26 9.46-9.51 9.46Zm8.09-17.55A11.36 11.36 0 0 0 12.05.6C5.74.6.6 5.73.6 12.04c0 2.02.53 3.98 1.53 5.72L.5 23.7l6.08-1.6a11.43 11.43 0 0 0 5.46 1.39h.01c6.31 0 11.45-5.13 11.45-11.45 0-3.06-1.19-5.93-3.36-8.09Z" />
    </svg>
  );
}
