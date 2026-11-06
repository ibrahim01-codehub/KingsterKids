import React, { useState } from "react";
import { photoPath } from "../lib/utils";

/* Palette used by all scenes */
const C = {
  deep: "#0a2140", mid: "#12345c", light: "#1d4a7d", sky: "#2a5c93",
  gold: "#c9a45c", goldSoft: "#e2c98f", cream: "#efe6d2", line: "rgba(239,230,210,.7)"
};

/* Small deterministic pseudo-random so scenes don't change between renders */
const rnd = (n) => { const x = Math.sin(n * 91.7 + 13.3) * 10000; return x - Math.floor(x); };

/* ----------------------------------------------------------------- */
function Building() {
  const cols = [0, 1, 2, 3, 4, 5];
  const winsL = [0, 1, 2], rows = [0, 1];
  return (
    <g>
      <defs>
        <linearGradient id="bSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.deep} /><stop offset="1" stopColor={C.sky} />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bSky)" />
      {[...Array(26)].map((_, i) => (
        <circle key={i} cx={rnd(i) * 800} cy={rnd(i + 40) * 230} r={0.8 + rnd(i + 9) * 1.2} fill={C.cream} opacity={0.35 + rnd(i + 3) * 0.4} />
      ))}
      <rect y="478" width="800" height="122" fill="#0a2038" />
      {[0, 1, 2, 3].map((i) => <rect key={i} y={490 + i * 28} width="800" height="1.2" fill={C.line} opacity=".18" />)}
      {/* wings */}
      <rect x="70" y="340" width="170" height="140" fill={C.mid} stroke={C.line} />
      <rect x="560" y="340" width="170" height="140" fill={C.mid} stroke={C.line} />
      {[0, 1].map((side) => winsL.map((w) => rows.map((r) => (
        <rect key={`${side}${w}${r}`} x={(side ? 580 : 90) + w * 52} y={362 + r * 56} width="22" height="34" fill={C.gold} opacity={0.55 + rnd(w + r * 3 + side) * 0.35} />
      ))))}
      {/* main block */}
      <rect x="235" y="290" width="330" height="190" fill={C.light} stroke={C.line} />
      {/* pediment */}
      <polygon points="290,290 400,218 510,290" fill={C.mid} stroke={C.cream} strokeWidth="1.5" />
      <circle cx="400" cy="262" r="14" fill="none" stroke={C.gold} strokeWidth="2" />
      <rect x="282" y="290" width="236" height="12" fill={C.cream} />
      {cols.map((i) => <rect key={i} x={298 + i * 40} y="302" width="14" height="150" fill={C.cream} />)}
      <rect x="290" y="450" width="220" height="30" fill={C.cream} opacity=".9" />
      <path d="M382 480 V430 a18 18 0 0 1 36 0 V480 Z" fill={C.deep} stroke={C.gold} strokeWidth="2" />
      {[0, 1, 2].map((i) => <rect key={i} x={282 - i * 8} y={480 + i * 0} width={236 + i * 16} height="0" fill="none" />)}
      {/* cupola */}
      <rect x="378" y="168" width="44" height="52" fill={C.cream} />
      {[0, 1, 2].map((i) => <rect key={i} x={384 + i * 14} y="176" width="6" height="30" fill={C.mid} />)}
      <polygon points="372,168 400,128 428,168" fill={C.mid} stroke={C.cream} strokeWidth="1.5" />
      <line x1="400" y1="128" x2="400" y2="96" stroke={C.gold} strokeWidth="2" />
      <polygon points="400,100 424,106 400,112" fill={C.gold} />
      {/* trees */}
      {[[38, 440, 52], [24, 400, 36], [772, 440, 52], [790, 396, 34], [200, 470, 28], [610, 470, 28]].map(([x, y, r], i) => (
        <g key={i}><rect x={x - 3} y={y} width="6" height="46" fill="#07182e" /><circle cx={x} cy={y} r={r} fill="#0f3a52" /><circle cx={x - r * 0.3} cy={y - r * 0.2} r={r * 0.6} fill="#145068" opacity=".7" /></g>
      ))}
      {/* path */}
      <polygon points="372,480 428,480 520,600 280,600" fill="#16314f" />
    </g>
  );
}

function Library() {
  const shelf = (x0, rows) => rows.map((y, r) => {
    let x = x0; const books = [];
    for (let i = 0; i < 11; i++) {
      const w = 12 + Math.floor(rnd(r * 20 + i + x0) * 14);
      const h = 52 + Math.floor(rnd(r * 7 + i * 3 + x0) * 30);
      const pick = rnd(i + r * 5 + x0);
      books.push(<rect key={`${x0}${r}${i}`} x={x} y={y - h} width={w} height={h} fill={pick > 0.75 ? C.gold : pick > 0.45 ? C.light : C.sky} opacity={pick > 0.75 ? 0.85 : 0.9} stroke={C.deep} strokeWidth="1" />);
      x += w + 1;
    }
    return <g key={r}>{books}<rect x={x0 - 6} y={y} width="206" height="8" fill={C.cream} opacity=".85" /></g>;
  });
  return (
    <g>
      <rect width="800" height="600" fill={C.deep} />
      <rect x="0" y="0" width="800" height="600" fill={C.mid} opacity=".35" />
      {shelf(20, [170, 300, 430, 560])}
      {shelf(578, [170, 300, 430, 560])}
      <path d="M270 600 V250 a130 130 0 0 1 260 0 V600 Z" fill={C.sky} opacity=".55" stroke={C.gold} strokeWidth="3" />
      <line x1="400" y1="120" x2="400" y2="600" stroke={C.gold} strokeWidth="2" opacity=".7" />
      <line x1="270" y1="320" x2="530" y2="320" stroke={C.gold} strokeWidth="2" opacity=".7" />
      <polygon points="330,600 470,600 520,470 280,470" fill={C.cream} opacity=".08" />
    </g>
  );
}

function Lab() {
  return (
    <g>
      <rect width="800" height="600" fill={C.deep} />
      {[...Array(21)].map((_, i) => <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="600" stroke={C.line} opacity=".08" />)}
      {[...Array(16)].map((_, i) => <line key={`h${i}`} x1="0" y1={i * 40} x2="800" y2={i * 40} stroke={C.line} opacity=".08" />)}
      {/* atom */}
      <g transform="translate(560 240)" fill="none" stroke={C.gold} strokeWidth="2">
        <ellipse rx="150" ry="52" /><ellipse rx="150" ry="52" transform="rotate(60)" /><ellipse rx="150" ry="52" transform="rotate(120)" />
        <circle r="16" fill={C.gold} stroke="none" />
        <circle cx="150" cy="0" r="8" fill={C.cream} stroke="none" /><circle cx="-75" cy="-45" r="8" fill={C.cream} stroke="none" /><circle cx="-75" cy="45" r="8" fill={C.cream} stroke="none" />
      </g>
      {/* flask */}
      <path d="M200 140 h60 v110 l82 150 a26 26 0 0 1 -23 39 H141 a26 26 0 0 1 -23 -39 L200 250 Z" fill={C.mid} stroke={C.cream} strokeWidth="3" />
      <path d="M154 388 L203 300 H257 L306 388 a8 8 0 0 1 -7 12 H161 a8 8 0 0 1 -7 -12Z" fill={C.gold} opacity=".75" />
      <line x1="190" y1="140" x2="270" y2="140" stroke={C.cream} strokeWidth="5" strokeLinecap="round" />
      {[[222, 345, 7], [246, 330, 5], [232, 316, 4], [212, 372, 5]].map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} fill="none" stroke={C.cream} strokeWidth="1.5" />)}
      {/* beaker */}
      <path d="M380 340 h110 l-8 120 a12 12 0 0 1 -12 11 h-70 a12 12 0 0 1 -12 -11 Z" fill={C.mid} stroke={C.cream} strokeWidth="3" />
      <path d="M386 398 h98 l-4 62 a8 8 0 0 1 -8 8 h-74 a8 8 0 0 1 -8 -8Z" fill={C.sky} opacity=".8" />
      {[360, 380, 400, 420].map((y, i) => <line key={i} x1="380" y1={y} x2={i % 2 ? 396 : 408} y2={y} stroke={C.cream} strokeWidth="1.5" />)}
      <rect x="90" y="470" width="620" height="14" fill={C.cream} opacity=".85" />
      <rect x="110" y="484" width="12" height="100" fill={C.cream} opacity=".5" /><rect x="678" y="484" width="12" height="100" fill={C.cream} opacity=".5" />
    </g>
  );
}

function Music() {
  const ys = [190, 220, 250, 280, 310];
  const notes = [[150, 280, 1], [230, 250, 1], [310, 220, 1], [390, 310, 0], [470, 250, 1], [550, 190, 1], [630, 280, 0]];
  return (
    <g>
      <rect width="800" height="600" fill={C.deep} />
      <circle cx="400" cy="250" r="260" fill={C.mid} opacity=".55" />
      <circle cx="400" cy="250" r="190" fill="none" stroke={C.gold} strokeWidth="1.5" opacity=".5" />
      <circle cx="400" cy="250" r="130" fill="none" stroke={C.cream} strokeWidth="1" opacity=".25" />
      {ys.map((y) => <line key={y} x1="70" y1={y} x2="730" y2={y} stroke={C.cream} strokeWidth="2" opacity=".85" />)}
      {notes.map(([x, y, up], i) => (
        <g key={i}>
          <ellipse cx={x} cy={y} rx="17" ry="12" transform={`rotate(-20 ${x} ${y})`} fill={i % 3 === 0 ? C.gold : C.cream} />
          <line x1={up ? x + 15 : x - 15} y1={y - 3} x2={up ? x + 15 : x - 15} y2={up ? y - 80 : y + 80} stroke={i % 3 === 0 ? C.gold : C.cream} strokeWidth="3" />
        </g>
      ))}
      <path d="M96 340 c-30 -60 40 -60 20 -120 c-8 -30 -42 -10 -30 22 c10 30 54 18 48 -22" fill="none" stroke={C.gold} strokeWidth="4" strokeLinecap="round" />
      {/* keys */}
      <g transform="translate(0 440)">
        {[...Array(20)].map((_, i) => <rect key={i} x={70 + i * 33} y="0" width="31" height="120" fill={C.cream} opacity=".92" />)}
        {[0, 1, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 17, 18].map((i) => <rect key={i} x={70 + i * 33 + 22} y="0" width="20" height="72" fill={C.deep} />)}
      </g>
    </g>
  );
}

function Field() {
  return (
    <g>
      <rect width="800" height="600" fill="#0d3a3a" />
      {[...Array(10)].map((_, i) => <rect key={i} x={i * 80} y="0" width="80" height="600" fill={i % 2 ? "#0f4242" : "#0d3a3a"} />)}
      <g fill="none" stroke={C.cream} strokeWidth="3" opacity=".9">
        <rect x="60" y="70" width="680" height="460" />
        <line x1="400" y1="70" x2="400" y2="530" />
        <circle cx="400" cy="300" r="70" />
        <rect x="60" y="180" width="110" height="240" /><rect x="630" y="180" width="110" height="240" />
        <rect x="60" y="235" width="40" height="130" /><rect x="700" y="235" width="40" height="130" />
        <path d="M170 255 a60 60 0 0 1 0 90" /><path d="M630 255 a60 60 0 0 0 0 90" />
      </g>
      <circle cx="400" cy="300" r="5" fill={C.cream} />
      <g transform="translate(300 360)">
        <circle r="34" fill={C.cream} stroke={C.deep} strokeWidth="3" />
        <polygon points="0,-14 13,-4 8,12 -8,12 -13,-4" fill={C.deep} />
        <path d="M0 -14 V-32 M13 -4 L30 -10 M8 12 L18 28 M-8 12 L-18 28 M-13 -4 L-30 -10" stroke={C.deep} strokeWidth="3" fill="none" />
      </g>
      <path d="M210 470 C 250 430, 280 410, 296 396" stroke={C.gold} strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" fill="none" />
    </g>
  );
}

function Studio() {
  return (
    <g>
      <rect width="800" height="600" fill={C.deep} />
      <rect x="40" y="60" width="330" height="430" fill={C.cream} opacity=".95" />
      <rect x="58" y="78" width="294" height="394" fill={C.mid} />
      <circle cx="170" cy="190" r="70" fill={C.gold} opacity=".9" />
      <rect x="140" y="260" width="190" height="190" fill={C.light} opacity=".85" />
      <path d="M58 380 C 130 320, 200 420, 352 340 V472 H58Z" fill={C.sky} opacity=".8" />
      <circle cx="290" cy="150" r="26" fill={C.cream} opacity=".8" />
      {/* easel legs */}
      <line x1="205" y1="490" x2="150" y2="590" stroke={C.cream} strokeWidth="6" opacity=".7" />
      <line x1="205" y1="490" x2="260" y2="590" stroke={C.cream} strokeWidth="6" opacity=".7" />
      {/* palette */}
      <path d="M470 300 c-20 -90 100 -140 200 -110 c110 32 120 130 60 180 c-40 34 -90 6 -112 40 c-20 34 -80 50 -120 14 c-30 -26 -18 -90 -28 -124Z" fill={C.cream} />
      <circle cx="560" cy="300" r="16" fill={C.deep} />
      {[[540, 232, C.gold], [610, 222, C.sky], [668, 256, C.light], [686, 316, C.gold], [500, 290, C.mid]].map(([x, y, f], i) => <circle key={i} cx={x} cy={y} r="22" fill={f} />)}
      {/* brush */}
      <line x1="480" y1="520" x2="740" y2="390" stroke={C.gold} strokeWidth="9" strokeLinecap="round" />
      <line x1="715" y1="402" x2="760" y2="380" stroke={C.cream} strokeWidth="14" strokeLinecap="round" />
    </g>
  );
}

function Stage() {
  return (
    <g>
      <defs>
        <linearGradient id="spot" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.goldSoft} stopOpacity=".55" /><stop offset="1" stopColor={C.goldSoft} stopOpacity=".05" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="#0b1c36" />
      <polygon points="365,0 435,0 640,470 160,470" fill="url(#spot)" />
      <rect y="470" width="800" height="130" fill="#14284a" />
      {[...Array(14)].map((_, i) => <line key={i} x1={i * 62 - 40} y1="600" x2={160 + i * 35} y2="470" stroke={C.line} opacity=".15" />)}
      <ellipse cx="400" cy="480" rx="230" ry="26" fill={C.gold} opacity=".28" />
      {/* curtains */}
      <path d="M0 0 H200 C 170 140, 230 300, 150 600 H0Z" fill="#7a1f2c" />
      <path d="M800 0 H600 C 630 140, 570 300, 650 600 H800Z" fill="#7a1f2c" />
      {[40, 80, 120, 160].map((x, i) => <path key={i} d={`M${x} 0 C ${x - 20} 200, ${x + 10} 400, ${x - 10} 600`} stroke="#4f1019" strokeWidth="5" fill="none" />)}
      {[760, 720, 680, 640].map((x, i) => <path key={i} d={`M${x} 0 C ${x + 20} 200, ${x - 10} 400, ${x + 10} 600`} stroke="#4f1019" strokeWidth="5" fill="none" />)}
      <rect x="0" y="0" width="800" height="46" fill="#5a1220" />
      <path d="M0 46 q 50 30 100 0 t 100 0 t 100 0 t 100 0 t 100 0 t 100 0 t 100 0 t 100 0" fill="#5a1220" />
      {/* stand microphone */}
      <line x1="400" y1="330" x2="400" y2="470" stroke={C.cream} strokeWidth="4" />
      <line x1="372" y1="472" x2="428" y2="472" stroke={C.cream} strokeWidth="5" strokeLinecap="round" />
      <rect x="388" y="290" width="24" height="42" rx="12" fill={C.cream} />
      <path d="M382 312 v6 a18 18 0 0 0 36 0 v-6" fill="none" stroke={C.cream} strokeWidth="3" />
    </g>
  );
}

function Classroom() {
  return (
    <g>
      <rect width="800" height="600" fill={C.deep} />
      <rect x="0" y="420" width="800" height="180" fill="#0a1d36" />
      {/* window */}
      <rect x="60" y="70" width="170" height="220" fill={C.sky} opacity=".55" stroke={C.cream} strokeWidth="4" />
      <line x1="145" y1="70" x2="145" y2="290" stroke={C.cream} strokeWidth="4" /><line x1="60" y1="180" x2="230" y2="180" stroke={C.cream} strokeWidth="4" />
      {/* board */}
      <rect x="290" y="70" width="450" height="240" fill="#143a3a" stroke={C.gold} strokeWidth="8" />
      <g stroke={C.cream} strokeWidth="3" fill="none" strokeLinecap="round" opacity=".9">
        <path d="M330 130 h120 M330 160 h180 M330 190 h90" />
        <path d="M560 120 l70 90 M630 120 l-70 90" />
        <path d="M470 250 q40 -50 80 0 t80 0" />
        <circle cx="660" cy="250" r="22" />
      </g>
      <rect x="290" y="310" width="450" height="10" fill={C.gold} />
      {[0, 1, 2].map((r) => [0, 1, 2].map((c) => (
        <g key={`${r}${c}`} transform={`translate(${130 + c * 220 - r * 20} ${400 + r * 56})`}>
          <rect width="150" height="12" fill={C.cream} opacity=".92" /><rect x="14" y="12" width="6" height="40" fill={C.cream} opacity=".6" /><rect x="130" y="12" width="6" height="40" fill={C.cream} opacity=".6" />
          <rect x="30" y="-18" width="42" height="18" fill={C.gold} opacity=".85" />
        </g>
      )))}
    </g>
  );
}

function Globe() {
  return (
    <g>
      <rect width="800" height="600" fill={C.deep} />
      {[...Array(40)].map((_, i) => <circle key={i} cx={rnd(i + 70) * 800} cy={rnd(i + 11) * 600} r={0.8 + rnd(i) * 1.3} fill={C.cream} opacity={0.3 + rnd(i + 5) * 0.4} />)}
      <circle cx="400" cy="300" r="205" fill={C.mid} stroke={C.cream} strokeWidth="3" />
      <g fill="none" stroke={C.line} strokeWidth="1.6" opacity=".8">
        <ellipse cx="400" cy="300" rx="205" ry="70" /><ellipse cx="400" cy="300" rx="205" ry="140" />
        <ellipse cx="400" cy="300" rx="70" ry="205" /><ellipse cx="400" cy="300" rx="140" ry="205" />
        <line x1="400" y1="95" x2="400" y2="505" /><line x1="195" y1="300" x2="605" y2="300" />
      </g>
      <path d="M300 220 q30 -40 70 -20 q30 20 10 50 q-20 28 -50 20 q-40 -14 -30 -50Z" fill={C.light} />
      <path d="M430 280 q40 -26 80 0 q22 30 -6 60 q-30 34 -62 10 q-20 -36 -12 -70Z" fill={C.light} />
      <ellipse cx="400" cy="300" rx="260" ry="48" transform="rotate(-24 400 300)" fill="none" stroke={C.gold} strokeWidth="3" strokeDasharray="3 10" strokeLinecap="round" />
      {[[216, 372], [584, 228], [330, 142]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="9" fill={C.gold} />)}
    </g>
  );
}

const SCENES = { building: Building, library: Library, lab: Lab, music: Music, field: Field, studio: Studio, stage: Stage, classroom: Classroom, globe: Globe };

export function Art({ name = "building", view = "0 0 800 600" }) {
  const Scene = SCENES[name] || Building;
  return (
    <svg className="art-svg" viewBox={view} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Scene />
    </svg>
  );
}

/* ----------------------------------------------------------------- */
/* Photo: uses the file listed in site-data.js ("photos"), or falls back
   to an illustration so a slot is never empty.                       */
export function Photo({ slot, art = "building", artView, alt = "", className = "", loading = "lazy" }) {
  const src = photoPath(slot);
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className={"photo photo-art " + className} role={alt ? "img" : undefined} aria-label={alt || undefined}>
        <Art name={art} view={artView} />
      </div>
    );
  }
  return <img className={"photo " + className} src={src} alt={alt} loading={loading} onError={() => setFailed(true)} />;
}

/* ----------------------------------------------------------------- */
/* Crest: shield with open book, three stars and river waves          */
export function Crest({ size = 44, variant = "dark" }) {
  const fill = variant === "dark" ? "#0a2140" : "#ffffff";
  const ink = variant === "dark" ? "#c9a45c" : "#0a2140";
  const stroke = variant === "dark" ? "#c9a45c" : "#c9a45c";
  return (
    <svg className="crest" width={size} height={size * 1.12} viewBox="0 0 50 56" role="img" aria-label="School crest">
      <path d="M25 2 L46 8 V28 C46 41 36 50 25 54 C14 50 4 41 4 28 V8 Z" fill={fill} stroke={stroke} strokeWidth="1.6" />
      <path d="M25 2 L46 8 V28 C46 41 36 50 25 54 C14 50 4 41 4 28 V8 Z" fill="none" stroke={ink} strokeWidth=".5" transform="translate(0 0) scale(.9) translate(2.8 3)" opacity=".6" />
      {[17, 25, 33].map((x) => <circle key={x} cx={x} cy="12" r="1.4" fill={ink} />)}
      <path d="M25 20 C21 17.5 15 17.5 12 19 V33 C15 31.5 21 31.5 25 34 C29 31.5 35 31.5 38 33 V19 C35 17.5 29 17.5 25 20 Z" fill="none" stroke={ink} strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="25" y1="20" x2="25" y2="34" stroke={ink} strokeWidth="1.2" />
      <path d="M13 40 q3 -3 6 0 t6 0 t6 0 t6 0" fill="none" stroke={ink} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M16 44.5 q3 -3 6 0 t6 0 t6 0" fill="none" stroke={ink} strokeWidth="1.1" strokeLinecap="round" opacity=".7" />
    </svg>
  );
}
