"use client";

import { useRef, useEffect } from "react";
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
}: {
  icon: string;
  name: string;
  description: string;
  price: number;
  currency: string;
}) {
  const Icon = ICON_MAP[icon];

  return (
    <div
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
    </div>
  );
}

export function Solutions() {
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
      id="soluciones"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal">
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
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              name={service.name}
              description={service.description}
              price={service.price}
              currency={service.currency}
            />
          ))}
        </div>

        {/* CTA nudge */}
        <div ref={ctaRef} className="reveal mt-10 text-center" style={{ animationDelay: "0.4s" }}>
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
        </div>
      </div>
    </section>
  );
}
