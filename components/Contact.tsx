"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, CheckCircle2, MapPin, Clock, Shield } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BUSINESS_TYPES, WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/constants";

const TRUST_ITEMS = [
  { icon: MapPin, text: "Santa Cruz de la Sierra, Bolivia" },
  { icon: Clock, text: "Respuesta en menos de 24 horas" },
  { icon: Shield, text: "Sin contratos largos ni letra chica" },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    whatsapp: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola! Me contacto desde la web.\n\nNombre: ${formData.name}\nTipo de negocio: ${formData.businessType}\nWhatsApp: ${formData.whatsapp}\n\nMensaje: ${formData.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
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
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center gap-4 py-16 rounded-sm text-center"
                style={{
                  backgroundColor: "var(--bg-3)",
                  border: "1px solid var(--border)",
                }}
              >
                <CheckCircle2
                  size={48}
                  strokeWidth={1.5}
                  style={{ color: "var(--red)" }}
                />
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
                  Abrimos WhatsApp con tu mensaje pre-listo. Solo revisá y enviá — respondemos en menos de 24 horas.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs underline underline-offset-4"
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
                    placeholder="Juan Mamani"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "var(--red)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border)")
                    }
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
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "var(--red)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border)")
                    }
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
                    placeholder="591 7X XXX XXX"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "var(--red)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border)")
                    }
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
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "var(--red)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border)")
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn-shimmer mt-1 inline-flex items-center justify-center gap-2 py-3 text-base font-semibold rounded-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--red)]"
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
                  <MessageCircle size={16} strokeWidth={2} />
                  Continuar en WhatsApp
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
                Preferís escribir directo?
              </p>
              <h3
                className="text-2xl leading-tight"
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  color: "var(--text)",
                }}
              >
                MANDANOS UN MENSAJE AHORA
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-rajdhani), sans-serif",
                  color: "var(--text-mid)",
                }}
              >
                Si preferís hablar directo, estamos en WhatsApp. Sin formularios, sin esperas.
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
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "#1da851")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "#25D366")
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
