"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      style={{
        backgroundColor: "var(--bg-3)",
        borderColor: "var(--border)",
      }}
      className="relative flex items-center w-14 h-7 rounded-sm border cursor-pointer transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
    >
      {/* Track icons */}
      <span
        className="absolute left-1.5 flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: isDark ? 1 : 0, color: "var(--text-mid)" }}
      >
        <Moon size={13} strokeWidth={2} />
      </span>
      <span
        className="absolute right-1.5 flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: isDark ? 0 : 1, color: "var(--text-mid)" }}
      >
        <Sun size={13} strokeWidth={2} />
      </span>

      {/* Knob */}
      <span
        className="absolute top-0.5 flex items-center justify-center w-6 h-6 rounded-sm transition-all duration-300"
        style={{
          backgroundColor: isDark ? "var(--bg-2)" : "var(--bg-2)",
          borderColor: "var(--border)",
          border: "1px solid var(--border)",
          transform: isDark ? "translateX(2px)" : "translateX(30px)",
          color: isDark ? "var(--text-mid)" : "var(--red)",
        }}
      >
        {isDark ? <Moon size={12} strokeWidth={2} /> : <Sun size={12} strokeWidth={2} />}
      </span>
    </button>
  );
}
