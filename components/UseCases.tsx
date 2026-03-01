"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Wrench,
  GraduationCap,
  UtensilsCrossed,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { USE_CASES } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Stethoscope,
  Wrench,
  GraduationCap,
  UtensilsCrossed,
};

export function UseCases() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleTabClick = useCallback((i: number) => setActive(i), []);

  const current = USE_CASES[active];
  const Icon = ICON_MAP[current.icon];

  return (
    <section
      id="casos"
      ref={ref}
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--bg-2)" }}
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
                FUNCIONA PARA{" "}
                <span style={{ color: "var(--red)" }}>TU RUBRO</span>
              </>
            }
            subtitle="Da igual qué tipo de negocio tenés. Si recibís mensajes, podemos automatizarlo."
          />
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {USE_CASES.map((c, i) => {
            const TabIcon = ICON_MAP[c.icon];
            const isActive = i === active;
            return (
              <button
                key={c.id}
                onClick={() => handleTabClick(i)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--red)]"
                style={{
                  fontFamily: "var(--font-rajdhani), sans-serif",
                  backgroundColor: isActive ? "var(--red)" : "var(--bg-3)",
                  color: isActive ? "#fff" : "var(--text-mid)",
                  border: `1px solid ${isActive ? "var(--red)" : "var(--border)"}`,
                }}
                aria-pressed={isActive}
              >
                <TabIcon size={14} strokeWidth={2} />
                {c.label}
              </button>
            );
          })}
        </motion.div>

        {/* Content panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-sm p-6 md:p-8"
              style={{
                backgroundColor: "var(--bg-3)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Left: scenario */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center justify-center w-11 h-11 rounded-sm flex-shrink-0"
                    style={{
                      backgroundColor: "var(--red-glow)",
                      color: "var(--red-bright)",
                    }}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <h3
                    className="text-3xl leading-none"
                    style={{
                      fontFamily: "var(--font-bebas), sans-serif",
                      color: "var(--text)",
                    }}
                  >
                    {current.label}
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-rajdhani), sans-serif",
                    color: "var(--text-mid)",
                  }}
                >
                  {current.scenario}
                </p>
              </div>

              {/* Right: steps */}
              <div className="flex flex-col gap-3">
                {/* Label above steps */}
                <div
                  className="mb-1 px-3 py-2 rounded-sm"
                  style={{
                    backgroundColor: "var(--red-glow)",
                    border: "1px solid color-mix(in srgb, var(--red) 25%, transparent)",
                  }}
                >
                  <p
                    className="text-xs tracking-widest uppercase"
                    style={{
                      fontFamily: "var(--font-space-mono), monospace",
                      color: "var(--red)",
                    }}
                  >
                    Cómo lo resolvemos
                  </p>
                </div>
                {current.steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{
                        backgroundColor: "var(--red)",
                        color: "#fff",
                        fontFamily: "var(--font-bebas), sans-serif",
                        fontSize: "13px",
                      }}
                    >
                      {i + 1}
                    </span>
                    <div className="flex items-start gap-2 flex-1">
                      <CheckCircle2
                        size={14}
                        strokeWidth={2}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "var(--red-bright)" }}
                      />
                      <p
                        className="text-sm leading-snug"
                        style={{
                          fontFamily: "var(--font-rajdhani), sans-serif",
                          color: "var(--text)",
                        }}
                      >
                        {step}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
