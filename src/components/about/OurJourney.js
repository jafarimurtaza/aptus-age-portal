"use client";

import { useEffect, useRef, useState } from "react";
import { journey } from "../../lib/data/data.js";

function StarIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0l2.6 7.2L22 9l-7.4 1.8L12 18l-2.6-7.2L2 9l7.4-1.8z" />
    </svg>
  );
}

function JourneyItem({ item, index, isLast }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-[56px_1fr] md:grid-cols-[130px_56px_1fr] gap-x-0"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(18px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        transitionDelay: `${index * 70}ms`,
      }}
    >
      <div className="hidden md:flex items-start pt-2 justify-end pr-6">
        <span className="font-serif text-2xl md:text-3xl font-semibold text-base-300 tracking-tight">
          {item.year}
        </span>
      </div>
      <div className="relative flex flex-col items-center">
        <span
          className="relative mt-3 h-4 w-4 rounded-full border-[3px] border-primary shrink-0 z-10 shadow-sm"
          style={{
            background: inView ? "#C8955A" : "#FAF7F2",
            transition: "background 0.4s ease-out 0.2s",
          }}
        >
          {inView && (
            <span
              className="absolute inset-1.5 rounded-full border border-primary/30"
              style={{
                animation: "journeyPulse 2s ease-out 0.3s",
              }}
            />
          )}
        </span>
        {!isLast && (
          <span className="w-px flex-1 bg-linear-to-b from-primary/50 via-primary/25 to-primary/10 mt-1" />
        )}
      </div>

      {/* Content */}
      <div className="pb-14 pl-4 md:pl-8">
        {/* Mobile-only year */}
        <span className="md:hidden block font-serif text-xl font-semibold text-base-300 mb-2">
          {item.year}
        </span>

        <div className="bg-base-100 rounded-xl border border-base-300/10 shadow-[0_2px_16px_rgba(11,15,25,0.05)] p-6 md:p-7 transition-all hover:shadow-[0_6px_24px_rgba(200,149,90,0.14)] hover:border-primary/30 hover:-translate-y-0.5">
          <h3 className="font-serif text-lg md:text-xl font-semibold text-base-content mb-2">
            {item.heading}
          </h3>
          <p className="text-sm md:text-[15px] leading-relaxed text-slate-600 max-w-[46ch]">
            {item.description}
          </p>

          {item.tag && (
            <div className="mt-5 inline-flex items-center gap-3 rounded-lg border border-primary/25 bg-primary/5 px-4 py-2.5">
              <span className="font-serif text-xl font-semibold text-primary">
                {item.tag.top}
              </span>
              <span className="h-6 w-px bg-primary/25" />
              <span className="flex items-center gap-1.5 font-mono text-[10.5px] tracking-[0.15em] uppercase text-base-300">
                <span className="text-primary">{item.tag.icon}</span>
                {item.tag.bottom}
              </span>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes journeyPulse {
          0% {
            opacity: 0.6;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.8);
          }
        }
      `}</style>
    </div>
  );
}

export default function OurJourney() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden py-20 md:py-24"
      style={{
        background:
          "radial-gradient(ellipse 800px 450px at 85% 0%, rgba(200,149,90,0.10), transparent 60%), radial-gradient(ellipse 700px 400px at 5% 100%, rgba(27,58,107,0.05), transparent 60%), #FAF7F2",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Cg fill='none' stroke='%23C8955A' stroke-width='1'%3E%3Cpath d='M25 4 L29 21 L46 25 L29 29 L25 46 L21 29 L4 25 L21 21 Z'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative max-w-250 mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.16em] uppercase text-primary mb-4 before:content-[''] before:inline-block before:w-5 before:h-px before:bg-primary after:content-[''] after:inline-block after:w-5 after:h-px after:bg-primary">
          The Portal Story
          </span>
          <h2 className="font-serif font-medium text-3xl md:text-5xl tracking-tight text-base-300">
            From Learning to Building
          </h2>
          <p className="mt-4 text-slate-500 text-base max-w-[46ch] mx-auto">
            Every milestone marks another step from classroom to career.
          </p>
        </div>

        <div>
          {journey.map((item, i) => (
            <JourneyItem
              key={item.year}
              item={item}
              index={i}
              isLast={i === journey.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}