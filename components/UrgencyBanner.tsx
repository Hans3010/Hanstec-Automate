"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export function UrgencyBanner() {
  return (
    <section
      style={{ backgroundColor: "var(--red)", position: "relative", overflow: "hidden" }}
    >
      {/* Subtle shimmer line */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <Zap
              size={20}
              strokeWidth={2.5}
              style={{ color: "#fff", flexShrink: 0 }}
            />
            <p
              style={{
                fontFamily: "var(--font-rajdhani), sans-serif",
                color: "#fff",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: 1.4,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: "18px",
                  letterSpacing: "0.04em",
                  marginRight: "8px",
                }}
              >
                ESTA SEMANA:
              </span>
              Diagnóstico gratuito de tu WhatsApp — te decimos exactamente qué estás perdiendo.
            </p>
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 whitespace-nowrap flex-shrink-0 px-5 py-2.5 rounded-sm font-semibold text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{
              fontFamily: "var(--font-rajdhani), sans-serif",
              backgroundColor: "#fff",
              color: "var(--red)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "rgba(255,255,255,0.88)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#fff")
            }
          >
            Lo quiero gratis
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
