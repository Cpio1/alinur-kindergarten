/**
 * Иллюстрации на время, пока заказчик не добавил реальные фотографии.
 * Это явные рисунки, а не имитация фото детского сада.
 */
export function KindergartenScene({ label, className }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label} className={className}>
      <defs>
        <linearGradient id="ks-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#85C7E8" />
          <stop offset="1" stopColor="#D8F0FB" />
        </linearGradient>
        <linearGradient id="ks-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A8D9AA" />
          <stop offset="1" stopColor="#7FC283" />
        </linearGradient>
        <linearGradient id="ks-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFF6E7" />
          <stop offset="1" stopColor="#FBE3D2" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#ks-sky)" />
      <path d="M72 164c-20 0-34-12-34-28s14-28 32-28c6-20 24-32 44-32 24 0 42 14 46 36 22-2 42 12 42 28s-14 24-34 24H72Z" fill="#fff" opacity=".95" />
      <path d="M350 92c-12 0-22-8-22-18s9-18 20-18c4-13 15-20 28-20 15 0 26 9 29 23 14-1 26 7 26 18 0 9-9 15-21 15h-60Z" fill="#fff" opacity=".8" />
      <path d="M0 410c90-60 210-70 320-30 110 40 190 30 280-20v240H0Z" fill="url(#ks-hill)" />

      {/* Здание */}
      <rect x="150" y="270" width="300" height="200" rx="14" fill="url(#ks-wall)" />
      <path d="M128 282 290 158c6-5 14-5 20 0l162 124c6 5 3 14-5 14H133c-8 0-11-9-5-14Z" fill="#F3B5A8" />
      <path d="M128 282 290 158c6-5 14-5 20 0l162 124" fill="none" stroke="#E79A8A" strokeWidth="8" strokeLinecap="round" />
      <circle cx="300" cy="234" r="30" fill="#F8D66D" />
      <path d="m300 214 6 13 14 1-11 9 4 14-13-8-13 8 4-14-11-9 14-1Z" fill="#fff" />
      <rect x="298" y="104" width="5" height="60" rx="2.500" fill="#26354B" />
      <path d="M303 106c14-5 24 5 40 0v26c-16 5-26-5-40 0Z" fill="#85C7E8" />
      {/* Окна */}
      {[178, 362].map((x) => (
        <g key={x}>
          <rect x={x} y="310" width="62" height="66" rx="31" fill="#85C7E8" />
          <rect x={x} y="310" width="62" height="66" rx="31" fill="none" stroke="#fff" strokeWidth="6" />
          <path d={`M${x + 31} 312v62M${x + 2} 346h58`} stroke="#fff" strokeWidth="4" />
          <rect x={x - 6} y="378" width="74" height="12" rx="6" fill="#A8D9AA" />
          <circle cx={x + 10} cy="376" r="6" fill="#F3B5A8" />
          <circle cx={x + 31} cy="375" r="6" fill="#F8D66D" />
          <circle cx={x + 52} cy="376" r="6" fill="#F3B5A8" />
        </g>
      ))}
      {/* Дверь */}
      <path d="M262 470v-92a38 38 0 0 1 76 0v92Z" fill="#F8D66D" />
      <path d="M272 470v-90a28 28 0 0 1 56 0v90Z" fill="#F6C94B" />
      <circle cx="318" cy="424" r="5" fill="#26354B" />
      <path d="M254 470h92l14 26H240Z" fill="#fff" opacity=".85" />

      {/* Дерево и качели */}
      <rect x="82" y="378" width="16" height="92" rx="8" fill="#B98B6A" />
      <circle cx="90" cy="344" r="56" fill="#7FC283" />
      <circle cx="58" cy="372" r="34" fill="#A8D9AA" />
      <circle cx="122" cy="372" r="34" fill="#92CE95" />
      <circle cx="74" cy="336" r="6" fill="#F3B5A8" />
      <circle cx="112" cy="356" r="6" fill="#F8D66D" />

      <path d="M490 498l22-96h6l22 96M512 410h-2" stroke="#26354B" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M515 408v56" stroke="#26354B" strokeWidth="3" />
      <rect x="499" y="464" width="32" height="8" rx="4" fill="#F3B5A8" />

      {/* Цветы и мяч */}
      {[
        [196, 530, "#F3B5A8"],
        [250, 552, "#F8D66D"],
        [392, 536, "#fff"],
        [456, 556, "#F3B5A8"],
        [116, 556, "#F8D66D"],
      ].map(([x, y, c]) => (
        <g key={`${x}`}>
          <path d={`M${x} ${y}v22`} stroke="#5EA863" strokeWidth="4" strokeLinecap="round" />
          <circle cx={x as number} cy={y as number} r="10" fill={c as string} />
          <circle cx={x as number} cy={y as number} r="4" fill="#26354B" opacity=".55" />
        </g>
      ))}
      <circle cx="326" cy="548" r="24" fill="#F3B5A8" />
      <path d="M303 548c14-8 32-8 46 0M326 524c-8 14-8 34 0 48" stroke="#fff" strokeWidth="4" fill="none" />
    </svg>
  );
}

export function PlayScene({ label, className }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label} className={className}>
      <defs>
        <linearGradient id="ps-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FDF0C4" />
          <stop offset="1" stopColor="#F8D66D" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#ps-bg)" />
      <path d="M0 450c120-60 260-50 360-10 90 36 170 30 240 0v160H0Z" fill="#A8D9AA" />
      {/* Кубики */}
      <g>
        <rect x="108" y="372" width="96" height="96" rx="16" fill="#85C7E8" />
        <path d="M136 448l20-56 20 56M144 428h24" stroke="#fff" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="212" y="372" width="96" height="96" rx="16" fill="#F3B5A8" />
        <path d="M240 392v56M240 420l34-28M240 420l36 28" stroke="#fff" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="160" y="268" width="96" height="96" rx="16" fill="#fff" transform="rotate(-6 208 316)" />
        <path d="M208 288l8 18 20 2-15 13 5 20-18-11-18 11 5-20-15-13 20-2Z" fill="#F8D66D" />
      </g>
      {/* Воздушные шары */}
      <path d="M404 310c-10 40 8 70 0 120" stroke="#26354B" strokeWidth="3" fill="none" />
      <ellipse cx="404" cy="244" rx="56" ry="68" fill="#F3B5A8" />
      <path d="M380 210c6-14 18-22 30-22" stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round" opacity=".7" />
      <path d="M476 288c-6 50-30 80-44 136" stroke="#26354B" strokeWidth="3" fill="none" />
      <ellipse cx="478" cy="222" rx="50" ry="62" fill="#85C7E8" />
      <path d="M456 192c6-12 15-19 26-20" stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round" opacity=".7" />
      <path d="M342 296c8 44 34 74 50 126" stroke="#26354B" strokeWidth="3" fill="none" />
      <ellipse cx="338" cy="236" rx="44" ry="56" fill="#A8D9AA" />
      {/* Облако */}
      <path d="M84 196c-18 0-30-11-30-25s12-25 28-25c5-18 21-28 39-28 21 0 37 13 41 32 20-2 38 11 38 25 0 13-13 21-30 21H84Z" fill="#fff" />
      {/* Цветы */}
      {[
        [84, 516],
        [150, 548],
        [440, 520],
        [520, 548],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          {[0, 72, 144, 216, 288].map((r) => (
            <ellipse key={r} cx="0" cy="-13" rx="9" ry="12" fill={i % 2 ? "#FFF6E7" : "#F3B5A8"} transform={`rotate(${r})`} />
          ))}
          <circle r="7" fill="#F8D66D" />
        </g>
      ))}
    </svg>
  );
}
