"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircleX, CalendarX, BarChart2, ArrowRight, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROBLEMS } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  MessageCircleX,
  CalendarX,
  BarChart2,
};

function ProblemCard({
  icon,
  title,
  description,
  index,
  inView,
}: {
  icon: string;
  title: string;
  description: string;
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
      className="group relative flex flex-col gap-4 p-6 rounded-sm transition-transform duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "var(--bg-3)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Red top line — slides in on hover */}
      <span
        className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        style={{ backgroundColor: "var(--red)" }}
        aria-hidden="true"
      />

      {/* Icon */}
      <span
        className="inline-flex items-center justify-center w-11 h-11 rounded-sm flex-shrink-0"
        style={{
          backgroundColor: "var(--red-glow)",
          color: "var(--red-bright)",
        }}
      >
        {Icon && <Icon size={22} strokeWidth={1.8} />}
      </span>

      {/* Title */}
      <h3
        className="text-2xl leading-tight"
        style={{
          fontFamily: "var(--font-bebas), sans-serif",
          color: "var(--text)",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed"
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

export function Problems() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="problemas"
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
            heading="¿TE SUENA FAMILIAR?"
            subtitle="Si manejás un negocio en Santa Cruz, es probable que esto te esté pasando ahora mismo."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROBLEMS.map((problem, i) => (
            <ProblemCard
              key={problem.id}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
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
            href="#soluciones"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
            style={{
              fontFamily: "var(--font-rajdhani), sans-serif",
              color: "var(--red)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--red-bright)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--red)")
            }
          >
            Ver cómo lo resolvemos
            <ArrowRight size={15} strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
