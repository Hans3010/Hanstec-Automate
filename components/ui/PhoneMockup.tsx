"use client";

import { motion } from "framer-motion";

const CHAT_MESSAGES = [
  { id: 1, from: "user", text: "Hola! quiero agendar una cita 👋" },
  {
    id: 2,
    from: "bot",
    text: "¡Hola! Bienvenido 😊 ¿Para qué servicio querés el turno?",
  },
  { id: 3, from: "user", text: "Limpieza dental" },
  {
    id: 4,
    from: "bot",
    text: "Perfecto. Tenemos disponibilidad:\n📅 Lunes 10:00\n📅 Martes 15:30\n📅 Jueves 09:00",
  },
  { id: 5, from: "user", text: "Martes a las 3:30" },
  {
    id: 6,
    from: "bot",
    text: "✅ ¡Listo! Tu turno está confirmado para el Martes a las 15:30.\nTe mandamos un recordatorio el día anterior.",
  },
] as const;

const BUBBLE_BASE_DELAY = 0.6;
const BUBBLE_STAGGER = 0.55;

export function PhoneMockup() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Phone shell */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-[260px] sm:w-[280px] rounded-[2.5rem] overflow-hidden"
        style={{
          backgroundColor: "var(--bg-3)",
          border: "2px solid var(--border)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.45), 0 0 0 1px var(--border)",
        }}
      >
        {/* Notch */}
        <div
          className="flex justify-center pt-3 pb-1"
          style={{ backgroundColor: "var(--bg-2)" }}
        >
          <div
            className="w-20 h-5 rounded-full"
            style={{ backgroundColor: "var(--bg-3)" }}
          />
        </div>

        {/* WhatsApp-style header */}
        <div
          className="flex items-center gap-2 px-3 py-2"
          style={{
            backgroundColor: "var(--bg-2)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {/* Avatar */}
          <div
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "var(--red)", color: "#fff" }}
          >
            <span
              className="text-xs font-bold"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              H
            </span>
          </div>
          <div>
            <p
              className="text-xs font-semibold leading-none"
              style={{
                fontFamily: "var(--font-rajdhani)",
                color: "var(--text)",
              }}
            >
              HansTec Bot
            </p>
            <p
              className="text-[10px] leading-none mt-0.5"
              style={{ color: "var(--red)", fontFamily: "var(--font-space-mono)" }}
            >
              • en línea
            </p>
          </div>
        </div>

        {/* Chat area */}
        <div
          className="px-3 py-3 space-y-2 min-h-[340px]"
          style={{ backgroundColor: "var(--bg)" }}
        >
          {CHAT_MESSAGES.map((msg, i) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: BUBBLE_BASE_DELAY + i * BUBBLE_STAGGER,
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className="max-w-[80%] px-3 py-1.5 rounded-2xl text-[11px] leading-snug whitespace-pre-line"
                style={{
                  fontFamily: "var(--font-rajdhani)",
                  backgroundColor:
                    msg.from === "user" ? "var(--red)" : "var(--bg-3)",
                  color:
                    msg.from === "user" ? "#fff" : "var(--text)",
                  borderBottomRightRadius: msg.from === "user" ? "4px" : undefined,
                  borderBottomLeftRadius: msg.from === "bot" ? "4px" : undefined,
                }}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input bar */}
        <div
          className="flex items-center gap-2 px-3 py-2"
          style={{
            backgroundColor: "var(--bg-2)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div
            className="flex-1 h-7 rounded-full px-3 flex items-center"
            style={{
              backgroundColor: "var(--bg-3)",
              border: "1px solid var(--border)",
            }}
          >
            <span
              className="text-[10px]"
              style={{ color: "var(--text-dim)", fontFamily: "var(--font-rajdhani)" }}
            >
              Escribí un mensaje...
            </span>
          </div>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "var(--red)" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width={14}
              height={14}
              className="text-white translate-x-0.5"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div>

        {/* Home indicator */}
        <div
          className="flex justify-center py-2"
          style={{ backgroundColor: "var(--bg-2)" }}
        >
          <div
            className="w-20 h-1 rounded-full"
            style={{ backgroundColor: "var(--border)" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
