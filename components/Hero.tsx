"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Zap, Users } from "lucide-react";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const STATS = [
  {
    Icon: Zap,
    value: "<30s",
    label: "respuesta",
    delay: 1.4,
    position: "top-4 left-0 sm:-left-10",
  },
  {
    Icon: Users,
    value: "0",
    label: "leads perdidos",
    delay: 1.7,
    position: "bottom-8 right-0 sm:-right-10",
  },
] as const;

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Animated background grid */}
      <AnimatedGrid />

      {/* Bottom fade-out gradient */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left column: copy ── */}
          <div>
            {/* Badge */}
            <FadeUp delay={0} className="mb-6 inline-flex">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm"
                style={{
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--bg-2)",
                }}
              >
                <span
                  className="animate-pulse-dot w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "var(--red)" }}
                />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    color: "var(--text-mid)",
                  }}
                >
                  Automatización para negocios · Santa Cruz
                </span>
              </div>
            </FadeUp>

            {/* H1 */}
            <FadeUp delay={0.15}>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl leading-none tracking-wide mb-5"
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  color: "var(--text)",
                }}
              >
                TU NEGOCIO
                <br />
                RESPONDIENDO{" "}
                <span style={{ color: "var(--red)" }}>24/7</span>
                <br />
                SIN VOS
              </h1>
            </FadeUp>

            {/* Subcopy */}
            <FadeUp delay={0.3}>
              <p
                className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
                style={{
                  fontFamily: "var(--font-rajdhani), sans-serif",
                  color: "var(--text-mid)",
                }}
              >
                Automatizamos tu WhatsApp, Instagram y Facebook para que cada
                cliente reciba respuesta en menos de 30 segundos — sin que vos
                estés pendiente del teléfono.
              </p>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.45}>
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Primary */}
                <a
                  href="#contacto"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--red)]"
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
                  Quiero automatizar
                  <ArrowRight size={16} strokeWidth={2.5} />
                </a>

                {/* Secondary */}
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border)]"
                  style={{
                    fontFamily: "var(--font-rajdhani), sans-serif",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--red)";
                    el.style.color = "var(--red)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--text)";
                  }}
                >
                  Cómo funciona
                  <ChevronDown size={16} strokeWidth={2.5} />
                </a>
              </div>
            </FadeUp>
          </div>

          {/* ── Right column: phone + floating stats ── */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <PhoneMockup />

              {/* Floating stat badges */}
              {STATS.map((stat) => {
                const { Icon } = stat;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: stat.delay,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`absolute ${stat.position} flex items-center gap-2 px-3 py-2 rounded-sm`}
                    style={{
                      backgroundColor: "var(--bg-2)",
                      border: "1px solid var(--border)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                    }}
                  >
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-sm flex items-center justify-center"
                      style={{ backgroundColor: "var(--red-glow)" }}
                    >
                      <Icon
                        size={14}
                        style={{ color: "var(--red-bright)" }}
                        strokeWidth={2.5}
                      />
                    </span>
                    <div>
                      <p
                        className="text-base leading-none font-bold"
                        style={{
                          fontFamily: "var(--font-bebas), sans-serif",
                          color: "var(--text)",
                        }}
                      >
                        {stat.value}
                      </p>
                      <p
                        className="text-[10px] leading-none mt-0.5"
                        style={{
                          fontFamily: "var(--font-space-mono), monospace",
                          color: "var(--text-mid)",
                        }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
