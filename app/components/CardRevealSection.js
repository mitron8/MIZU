"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// ─── Card data ────────────────────────────────────────────────────────────────
const CARDS = [
  {
    id: "design",
    label: "Design",
    body: "Craft interfaces that feel inevitable, not just functional.",
    accent: "#ffffff",
    symbol: "◆",
    image:
      "https://images.unsplash.com/photo-1777891297534-919db84e7407?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "develop",
    label: "Develop",
    body: "Build with precision using the stack your team already loves.",
    accent: "#ffffff",
    symbol: "◈",
    image:
      "https://plus.unsplash.com/premium_photo-1747852228961-5194532b818c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "deploy",
    label: "Deploy",
    body: "Ship confidently with zero-downtime releases, every time.",
    accent: "#ffffff",
    symbol: "◉",
    image:
      "https://plus.unsplash.com/premium_photo-1747854407573-5f498b182977?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "scale",
    label: "Scale",
    body: "Grow without friction — infrastructure shaped for your ambition.",
    accent: "#ffffff",
    symbol: "◍",
    image:
      "https://images.unsplash.com/photo-1778392099969-e1799d7dd4ea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Final (x, y) offset from center for each corner
const SPREAD = [
  { x: -245, y: -192 },
  { x: 245, y: -192 },
  { x: -245, y: 192 },
  { x: 245, y: 192 },
];

const ROTATIONS = [-2, 2, 2, -2];

// ─── Easing ───────────────────────────────────────────────────────────────────
function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function CardRevealSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const onScroll = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const scrollable = el.offsetHeight - window.innerHeight;

    if (scrollable <= 0) return;

    const raw = Math.max(0, Math.min(1, -rect.top / scrollable));
    setProgress(raw);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // Eased value drives the card spread
  const p = easeInOutCubic(progress);

  // Center text fades + rises in during the last 38% of scroll
  const textP = Math.max(0, Math.min(1, (progress - 0.62) / 0.38));

  // Scroll hint fades out as soon as scrolling begins
  const hintOpacity = Math.max(0, 1 - progress * 8);

  return (
    <section
      ref={sectionRef}
      className="relative h-[350vh] bg-gray-900"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">

        {/* ── Cards ── */}
        {CARDS.map((card, i) => {
          const tx = SPREAD[i].x * p;
          const ty = SPREAD[i].y * p;
          const rot = ROTATIONS[i] * p;

          const shadowY = 2 + p * 16;
          const shadowB = 6 + p * 44;
          const shadowA = (0.04 + p * 0.09).toFixed(3);

          return (
            <div
              key={card.id}
              className="absolute flex h-[168px] w-[222px] flex-col justify-between rounded-[18px] border border-white/10 p-5 overflow-hidden will-change-transform"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: `translate(${tx}px, ${ty}px) rotate(${rot}deg)`,
                boxShadow: `0 ${shadowY}px ${shadowB}px rgba(0,0,0,${shadowA})`,
                zIndex: CARDS.length - i,
              }}
            >
              {/* overlay */}
            {/*   <div className="absolute inset-0 bg-black/45" />

              <span
                className="relative z-10 text-[18px] leading-none"
                style={{ color: card.accent }}
              >
                {card.symbol}
              </span>

              <div className="relative z-10">
                <p className="mb-[5px] font-sans text-[13.5px] font-medium tracking-[-0.01em] text-white">
                  {card.label}
                </p>

                <p className="font-sans text-[12px] font-light leading-[1.6] text-white/80">
                  {card.body}
                </p>
              </div>*/}
            </div>
          );
        })}

        {/* ── Center reveal text ── */}
        <div
          className="pointer-events-none absolute z-20 max-w-[400px] px-6 text-center"
          style={{
            opacity: textP,
            transform: `translateY(${(1 - textP) * 22}px)`,
          }}
        >
          <p className="mb-[18px] text-[10px] uppercase tracking-[0.22em] text-[#b5b4a8]">
            One platform
          </p>

          <h2 className=" text-[60px] leading-none tracking-[-0.01em] text-white">
            Built to ship
            <br />
            <em className="italic text-[#c4a882]">faster.</em>
          </h2>
          
          
        </div>

        {/* ── Scroll hint ── */}
        <div
          className="pointer-events-none absolute bottom-11 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-[10px]"
          style={{ opacity: hintOpacity }}
        >
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#b5b4a8]">
            scroll
          </span>

          <div className="h-7 w-px origin-top animate-pulse bg-[#b5b4a8]" />
        </div>

      </div>
    </section>
  );
}