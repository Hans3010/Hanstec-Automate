"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="como-funciona"
      ref={ref}
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.div>

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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {HOW_IT_WORKS_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon];
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 32 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.13,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex flex-col items-center text-center gap-4"
                >
                  {/* Step circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10 flex flex-col items-center"
                  >
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
                      className="w-20 h-20 rounded-sm flex items-center justify-center transition-all duration-300"
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
                  </motion.div>

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
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 text-center"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
