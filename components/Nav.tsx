"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HansTecIcon } from "@/components/ui/HansTecIcon";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        backgroundColor: scrolled
          ? "color-mix(in srgb, var(--bg) 85%, transparent)"
          : "transparent",
        borderBottomColor: scrolled ? "var(--border)" : "transparent",
        boxShadow: scrolled
          ? "0 1px 24px rgba(0,0,0,0.18)"
          : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300"
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--red)] rounded-sm"
          aria-label="HansTec Automate — Inicio"
        >
          <HansTecIcon size={32} style={{ color: "var(--text)" } as React.CSSProperties} />
          <span
            className="text-xl leading-none tracking-wide"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              color: "var(--text)",
            }}
          >
            HansTec Automate
          </span>
        </a>

        {/* Right side */}
        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggle />

          {/* CTA — hidden on mobile */}
          <a
            href="#contacto"
            className="btn-shimmer hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-200 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--red)]"
            style={{
              fontFamily: "var(--font-rajdhani), sans-serif",
              backgroundColor: "var(--red)",
              color: "#fff",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--red-bright)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--red)";
            }}
          >
            Quiero automatizar
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
