"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, CheckCircle2, MapPin, Clock, Shield, MessageCircle, Loader2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BUSINESS_TYPES, WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/constants";

// ─── Formspree endpoint ────────────────────────────────────────────────────
// 1. Creá una cuenta gratis en https://formspree.io
// 2. Creá un nuevo form y copiá el endpoint (ej. https://formspree.io/f/xabcdefg)
// 3. Reemplazá el valor de FORMSPREE_ENDPOINT con tu URL
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdaqyey";
// ──────────────────────────────────────────────────────────────────────────

const TRUST_ITEMS = [
  { icon: MapPin, text: "Santa Cruz de la Sierra, Bolivia" },
  { icon: Clock, text: "Respuesta en menos de 24 horas" },
  { icon: Shield, text: "Sin contratos largos ni letra chica" },
];

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    whatsapp: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          "tipo-de-negocio": formData.businessType,
          whatsapp: formData.whatsapp,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    fontFamily: "var(--font-rajdhani), sans-serif",
    backgroundColor: "var(--bg-3)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    borderRadius: "2px",
    outline: "none",
    width: "100%",
    padding: "10px 12px",
    fontSize: "14px",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contacto"
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
                HABLEMOS DE{" "}
                <span style={{ color: "var(--red)" }}>TU NEGOCIO</span>
              </>
            }
            subtitle="Contanos qué querés automatizar. La primera consulta es gratis y sin compromiso."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {formState === "success" ? (
              <div
                className="flex flex-col items-center gap-5 py-10 px-6 rounded-sm text-center"
                style={{
                  backgroundColor: "var(--bg-3)",
                  border: "1px solid var(--border)",
                }}
              >
                <CheckCircle2
                  size={44}
                  strokeWidth={1.5}
                  style={{ color: "var(--red)" }}
                />
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-3xl"
                    style={{
                      fontFamily: "var(--font-bebas), sans-serif",
                      color: "var(--text)",
                    }}
                  >
                    ¡MENSAJE ENVIADO!
                  </h3>
                  <p
                    className="text-sm max-w-xs"
                    style={{
                      fontFamily: "var(--font-rajdhani), sans-serif",
                      color: "var(--text-mid)",
                    }}
                  >
                    Recibimos tu consulta. Te respondemos por WhatsApp en menos de 24 horas.
                  </p>
                </div>

                {/* Demo nudge */}
                <div
                  className="w-full rounded-sm p-4 flex flex-col gap-2"
                  style={{
                    backgroundColor: "var(--bg-2)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p
                    className="text-xs tracking-widest uppercase"
                    style={{
                      fontFamily: "var(--font-space-mono), monospace",
                      color: "var(--text-dim)",
                    }}
                  >
                    Mientras esperás
                  </p>
                  <p
                    className="text-sm leading-snug"
                    style={{
                      fontFamily: "var(--font-rajdhani), sans-serif",
                      color: "var(--text-mid)",
                    }}
                  >
                    Escribinos{" "}
                    <span style={{ color: "var(--text)", fontWeight: 600 }}>
                      "DEMO"
                    </span>{" "}
                    por WhatsApp y te mostramos el sistema funcionando en vivo.
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("DEMO")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2 rounded-sm text-sm font-semibold mt-1 transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-rajdhani), sans-serif",
                      backgroundColor: "#25D366",
                      color: "#fff",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.backgroundColor = "#1da851")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.backgroundColor = "#25D366")
                    }
                  >
                    <MessageCircle size={14} strokeWidth={2} />
                    Ver demo en vivo
                  </a>
                </div>

                <button
                  onClick={() => {
                    setFormState("idle");
                    setFormData({ name: "", businessType: "", whatsapp: "", message: "" });
                  }}
                  className="text-xs underline underline-offset-4"
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    color: "var(--text-dim)",
                  }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-sm p-6"
                style={{
                  backgroundColor: "var(--bg-3)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs tracking-widest uppercase"
                    style={{
                      fontFamily: "var(--font-space-mono), monospace",
                      color: "var(--text-mid)",
                    }}
                  >
                    Tu nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Luis Copa"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--red)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>

                {/* Business type */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="businessType"
                    className="text-xs tracking-widest uppercase"
                    style={{
                      fontFamily: "var(--font-space-mono), monospace",
                      color: "var(--text-mid)",
                    }}
                  >
                    Tipo de negocio
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--red)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  >
                    <option value="" disabled>
                      Seleccioná tu rubro
                    </option>
                    {BUSINESS_TYPES.map((bt) => (
                      <option key={bt} value={bt}>
                        {bt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="whatsapp"
                    className="text-xs tracking-widest uppercase"
                    style={{
                      fontFamily: "var(--font-space-mono), monospace",
                      color: "var(--text-mid)",
                    }}
                  >
                    Tu WhatsApp
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="78723836"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--red)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs tracking-widest uppercase"
                    style={{
                      fontFamily: "var(--font-space-mono), monospace",
                      color: "var(--text-mid)",
                    }}
                  >
                    ¿Qué querés automatizar?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tengo una clínica y quiero que los pacientes puedan agendar por WhatsApp..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--red)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>

                {/* Error message */}
                {formState === "error" && (
                  <p
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-space-mono), monospace",
                      color: "var(--red-bright)",
                    }}
                  >
                    Hubo un error al enviar. Intentá de nuevo o escribinos por WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="btn-shimmer mt-1 inline-flex items-center justify-center gap-2 py-3 text-base font-semibold rounded-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--red)] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: "var(--font-rajdhani), sans-serif",
                    backgroundColor: "var(--red)",
                    color: "#fff",
                  }}
                  onMouseEnter={(e) => {
                    if (formState !== "loading")
                      (e.currentTarget as HTMLElement).style.backgroundColor = "var(--red-bright)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--red)";
                  }}
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 size={16} strokeWidth={2} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Mail size={16} strokeWidth={2} />
                      Enviar consulta
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right side: WhatsApp + trust */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Direct WhatsApp CTA */}
            <div
              className="flex flex-col gap-4 rounded-sm p-6"
              style={{
                backgroundColor: "var(--bg-3)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  color: "var(--text-mid)",
                }}
              >
                Preferís hablar directo?
              </p>
              <h3
                className="text-2xl leading-tight"
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  color: "var(--text)",
                }}
              >
                ESCRIBINOS POR WHATSAPP
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-rajdhani), sans-serif",
                  color: "var(--text-mid)",
                }}
              >
                Sin formularios, sin esperas. Respondemos en menos de 24 horas.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center justify-center gap-2 py-3 text-base font-semibold rounded-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--red)]"
                style={{
                  fontFamily: "var(--font-rajdhani), sans-serif",
                  backgroundColor: "#25D366",
                  color: "#fff",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "#1da851")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "#25D366")
                }
              >
                <MessageCircle size={16} strokeWidth={2} />
                Abrir WhatsApp
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-col gap-3">
              {TRUST_ITEMS.map(({ icon: TrustIcon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-sm flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--red-glow)",
                      color: "var(--red-bright)",
                    }}
                  >
                    <TrustIcon size={15} strokeWidth={2} />
                  </span>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-rajdhani), sans-serif",
                      color: "var(--text-mid)",
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
