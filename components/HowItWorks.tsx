"use client";

import { useRef, useEffect } from "react";
import {
  Video,
  Settings,
  FlaskConical,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Video,
  Settings,
  FlaskConical,
  Rocket,
};

export function HowItWorks() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [headerRef.current, gridRef.current, ctaRef.current].filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-80px" }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="como-funciona"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal">
          <SectionHeader
            label=""
            heading={
              <>
                EN 4 PASOS{" "}
                <span style={{ color: "var(--red)" }}>TU NEGOCIO</span>
                {" "}VUELA
              </>
            }
            subtitle="Sin tecnicismos. Sin complicaciones. Vos nos contás, nosotros nos encargamos de todo."
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line — desktop. top 40px = half of the 80px circle */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-0 right-0 h-px"
            style={{
              top: "40px",
              background:
                "linear-gradient(to right, transparent 5%, var(--border) 12%, var(--border) 88%, transparent 95%)",
            }}
          />

          <div ref={gridRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {HOW_IT_WORKS_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon];
              return (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center text-center gap-4"
                >
                  {/* Step circle */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Step number badge */}
                    <span
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold z-10"
                      style={{
                        backgroundColor: "var(--red)",
                        color: "#fff",
                        fontFamily: "var(--font-bebas), sans-serif",
                        fontSize: "11px",
                      }}
                    >
                      {step.step}
                    </span>

                    <div
                      className="w-20 h-20 rounded-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{
                        backgroundColor: "var(--bg-3)",
                        border: "2px solid var(--border)",
                        color: "var(--red-bright)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "var(--red)";
                        el.style.boxShadow = "0 0 24px var(--red-glow)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "var(--border)";
                        el.style.boxShadow = "none";
                      }}
                    >
                      {Icon && <Icon size={32} strokeWidth={1.5} />}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-2xl leading-none"
                      style={{
                        fontFamily: "var(--font-bebas), sans-serif",
                        color: "var(--text)",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed px-2"
                      style={{
                        fontFamily: "var(--font-rajdhani), sans-serif",
                        color: "var(--text-mid)",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile connector arrow */}
                  {i < HOW_IT_WORKS_STEPS.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="md:hidden w-px h-6 mt-1"
                      style={{ backgroundColor: "var(--border)" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA nudge */}
        <div ref={ctaRef} className="reveal mt-14 text-center" style={{ animationDelay: "0.5s" }}>
          <a
            href="#contacto"
            className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--red)]"
            style={{
              fontFamily: "var(--font-rajdhani), sans-serif",
              backgroundColor: "var(--red)",
              color: "#fff",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--red-bright)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--red)")
            }
          >
            Empezar ahora — es gratis
          </a>
          <p
            className="mt-3 text-xs"
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              color: "var(--text-dim)",
            }}
          >
            Demo de 3 días sin comprometerte
          </p>
        </div>
      </div>
    </section>
  );
}
