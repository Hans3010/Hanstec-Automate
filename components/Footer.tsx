"use client";

import { HansTecIcon } from "@/components/ui/HansTecIcon";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer
      className="py-10"
      style={{
        backgroundColor: "var(--bg-2)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="flex items-center gap-2">
              <HansTecIcon
                size={28}
                style={{ color: "var(--text)" } as React.CSSProperties}
              />
              <span
                className="text-xl leading-none tracking-wide"
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  color: "var(--text)",
                }}
              >
                HansTec Automate
              </span>
            </div>
            <p
              className="text-xs"
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                color: "var(--text-dim)",
              }}
            >
              Santa Cruz, Bolivia — {currentYear}
            </p>
          </div>

          {/* WhatsApp link */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--red)]"
            style={{
              fontFamily: "var(--font-rajdhani), sans-serif",
              border: "1px solid var(--border)",
              color: "var(--text-mid)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#25D366";
              el.style.color = "#25D366";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--text-mid)";
            }}
          >
            <MessageCircle size={14} strokeWidth={2} />
            WhatsApp
          </a>
        </div>

        {/* Bottom note */}
        <p
          className="mt-6 text-center text-xs"
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            color: "var(--text-dim)",
          }}
        >
          Automatización inteligente para negocios bolivianos.
        </p>
      </div>
    </footer>
  );
}
