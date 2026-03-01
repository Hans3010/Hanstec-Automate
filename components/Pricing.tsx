"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PRICING_PLANS, MAINTENANCE_NOTE } from "@/lib/constants";

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="precios"
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
                INVERSIÓN{" "}
                <span style={{ color: "var(--red)" }}>CLARA</span>
                , SIN SORPRESAS
              </>
            }
            subtitle="Elegí el plan que se adapta a tu negocio. Todos incluyen configuración personalizada."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex flex-col rounded-sm p-6 transition-all duration-300"
              style={{
                backgroundColor: plan.featured ? "var(--bg-3)" : "var(--bg-3)",
                border: plan.featured
                  ? "2px solid var(--red)"
                  : "1px solid var(--border)",
                boxShadow: plan.featured
                  ? "0 8px 40px var(--red-glow)"
                  : "none",
              }}
            >
              {/* Featured badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-sm text-xs font-bold whitespace-nowrap"
                  style={{
                    backgroundColor: "var(--red)",
                    color: "#fff",
                    fontFamily: "var(--font-space-mono), monospace",
                  }}
                >
                  ★ {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <h3
                className="text-3xl leading-none mb-1"
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  color: "var(--text)",
                }}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p
                className="text-sm mb-4"
                style={{
                  fontFamily: "var(--font-rajdhani), sans-serif",
                  color: "var(--text-mid)",
                }}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-2 flex items-baseline gap-1">
                {plan.price === 0 ? (
                  <span
                    className="text-5xl leading-none"
                    style={{
                      fontFamily: "var(--font-bebas), sans-serif",
                      color: "var(--text)",
                    }}
                  >
                    GRATIS
                  </span>
                ) : (
                  <>
                    <span
                      className="text-5xl leading-none"
                      style={{
                        fontFamily: "var(--font-bebas), sans-serif",
                        color: plan.featured ? "var(--red)" : "var(--text)",
                      }}
                    >
                      {plan.price.toLocaleString("es-BO")}
                    </span>
                    <span
                      className="text-base"
                      style={{
                        fontFamily: "var(--font-space-mono), monospace",
                        color: "var(--text-mid)",
                      }}
                    >
                      {plan.currency}
                    </span>
                  </>
                )}
              </div>
              {/* Payment type clarity */}
              <p
                className="mb-5 text-xs"
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  color: "var(--text-dim)",
                }}
              >
                {plan.price === 0 ? "sin costo · sin tarjeta" : "pago único · sin recurrencia"}
              </p>

              {/* Divider */}
              <div
                className="mb-5 h-px"
                style={{ backgroundColor: "var(--border)" }}
              />

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={15}
                      strokeWidth={2}
                      className="flex-shrink-0 mt-0.5"
                      style={{
                        color: plan.featured
                          ? "var(--red-bright)"
                          : "var(--text-mid)",
                      }}
                    />
                    <span
                      className="text-sm leading-snug"
                      style={{
                        fontFamily: "var(--font-rajdhani), sans-serif",
                        color: "var(--text)",
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contacto"
                className="btn-shimmer inline-flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--red)]"
                style={{
                  fontFamily: "var(--font-rajdhani), sans-serif",
                  backgroundColor: plan.featured ? "var(--red)" : "transparent",
                  color: plan.featured ? "#fff" : "var(--text)",
                  border: plan.featured
                    ? "none"
                    : "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  if (plan.featured) {
                    el.style.backgroundColor = "var(--red-bright)";
                  } else {
                    el.style.borderColor = "var(--red)";
                    el.style.color = "var(--red)";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  if (plan.featured) {
                    el.style.backgroundColor = "var(--red)";
                  } else {
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--text)";
                  }
                }}
              >
                {plan.cta}
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Maintenance note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="mt-8 text-center text-xs"
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            color: "var(--text-dim)",
          }}
        >
          * {MAINTENANCE_NOTE}
        </motion.p>
      </div>
    </section>
  );
}
