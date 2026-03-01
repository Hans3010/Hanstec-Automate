"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, CalendarCheck, Users, ArrowRight, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  MessageCircle,
  CalendarCheck,
  Users,
};

function ServiceCard({
  icon,
  name,
  description,
  price,
  currency,
  index,
  inView,
}: {
  icon: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  index: number;
  inView: boolean;
}) {
  const Icon = ICON_MAP[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col gap-5 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "var(--bg-3)",
        border: "1px solid var(--border)",
        boxShadow: "none",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--red)";
        el.style.boxShadow = "0 8px 32px var(--red-glow)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Top row: icon + price */}
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center justify-center w-11 h-11 rounded-sm flex-shrink-0"
          style={{
            backgroundColor: "var(--red-glow)",
            color: "var(--red-bright)",
          }}
        >
          {Icon && <Icon size={22} strokeWidth={1.8} />}
        </span>
        <span
          className="inline-flex items-baseline gap-1 px-2.5 py-1 rounded-sm text-sm font-bold"
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            backgroundColor: "var(--red-glow)",
            color: "var(--red-bright)",
            border: "1px solid color-mix(in srgb, var(--red) 30%, transparent)",
          }}
        >
          {price.toLocaleString("es-BO")}
          <span className="text-xs font-normal opacity-80">{currency}</span>
        </span>
      </div>

      {/* Name */}
      <h3
        className="text-2xl leading-tight"
        style={{
          fontFamily: "var(--font-bebas), sans-serif",
          color: "var(--text)",
        }}
      >
        {name}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{
          fontFamily: "var(--font-rajdhani), sans-serif",
          color: "var(--text-mid)",
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export function Solutions() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="soluciones"
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
                AUTOMATIZAMOS{" "}
                <span style={{ color: "var(--red)" }}>TODO ESO</span>
                {" "}POR VOS
              </>
            }
            subtitle="Tres servicios que transforman cómo tu negocio se comunica con los clientes."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              name={service.name}
              description={service.description}
              price={service.price}
              currency={service.currency}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 text-center"
        >
          <a
            href="#precios"
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
            Ver planes y precios
            <ArrowRight size={15} strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
