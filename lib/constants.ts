// ============================================
// HansTec Automate — Constants & Data
// ============================================
// Edit WHATSAPP_NUMBER to update the contact number site-wide

export const WHATSAPP_NUMBER = "59178723836";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// ============================================
// Problems Section
// ============================================
export const PROBLEMS = [
  {
    id: "lost-clients",
    icon: "MessageCircleX",
    title: "Perdés clientes sin darte cuenta",
    description:
      "Cada mensaje que no respondés a tiempo es un cliente que se va a la competencia. Pasa de noche, los fines de semana, en cualquier momento.",
  },
  {
    id: "manual-scheduling",
    icon: "CalendarX",
    title: "Agendás todo por llamada",
    description:
      "Confirmás turnos por teléfono, mandás recordatorios a mano, cancelás uno por uno. Horas de trabajo que podría hacer un sistema.",
  },
  {
    id: "no-lead-data",
    icon: "BarChart2",
    title: "No sabés cuántos leads tenés",
    description:
      "Los mensajes llegan por WhatsApp, Instagram y Facebook pero no hay un registro. No sabés qué convierte, qué no, ni cuánto perdés.",
  },
] as const;

// ============================================
// Solutions / Services Section
// ============================================
export const SERVICES = [
  {
    id: "chatbot-whatsapp",
    icon: "MessageCircle",
    name: "Chatbot WhatsApp",
    description:
      "Tu negocio responde al instante, 24 horas. Preguntas frecuentes, info de precios, horarios y más — sin que vos estés presente.",
    price: 700,
    currency: "Bs",
  },
  {
    id: "auto-scheduling",
    icon: "CalendarCheck",
    name: "Agendamiento automático",
    description:
      "El cliente elige su turno, recibe confirmación y recordatorio automático. Sin llamadas, sin olvidos, sin cancelaciones de último momento.",
    price: 1000,
    currency: "Bs",
  },
  {
    id: "lead-capture",
    icon: "Users",
    name: "Captura de leads",
    description:
      "Cada persona que escribe queda registrada. Nombre, número, qué preguntó. Un historial limpio para que vos puedas hacer seguimiento.",
    price: 600,
    currency: "Bs",
  },
] as const;

// ============================================
// Use Cases Section (Tabs)
// ============================================
export const USE_CASES = [
  {
    id: "clinica",
    label: "Clínica",
    icon: "Stethoscope",
    scenario:
      "Una clínica dental recibe 30+ mensajes diarios preguntando precios, disponibilidad y cómo llegar. El recepcionista no da abasto.",
    steps: [
      "Paciente escribe por WhatsApp preguntando por un turno",
      "El sistema responde al instante con opciones de horario",
      "Paciente elige, queda agendado y recibe confirmación",
      "24 horas antes recibe un recordatorio automático",
    ],
  },
  {
    id: "taller",
    label: "Taller",
    icon: "Wrench",
    scenario:
      "Un taller mecánico pierde clientes porque no puede responder mientras trabaja. Los mensajes quedan sin respuesta hasta el mediodía.",
    steps: [
      "Cliente consulta por Instagram sobre un servicio",
      "Recibe respuesta automática con lista de servicios y precios",
      "Reserva su horario sin llamar ni esperar",
      "El taller recibe la info del cliente organizada",
    ],
  },
  {
    id: "academia",
    label: "Academia",
    icon: "GraduationCap",
    scenario:
      "Una academia de idiomas quiere inscribir más alumnos pero el proceso es manual: llamadas, formularios, confirmaciones por escrito.",
    steps: [
      "Interesado pregunta por Facebook sobre cursos disponibles",
      "Chatbot explica niveles, precios y modalidades",
      "Estudiante completa pre-inscripción directo por chat",
      "Academia recibe datos listos para confirmar",
    ],
  },
  {
    id: "restaurante",
    label: "Restaurante",
    icon: "UtensilsCrossed",
    scenario:
      "Un restaurante recibe reservas por WhatsApp pero las pierde en el chat. No hay registro, no hay confirmaciones, hay confusión.",
    steps: [
      "Cliente pide reserva para el fin de semana",
      "Sistema confirma disponibilidad y toma los datos",
      "Reserva queda registrada automáticamente",
      "Cliente recibe confirmación y el local no pierde ninguna",
    ],
  },
] as const;

// ============================================
// How It Works Section (Timeline)
// ============================================
export const HOW_IT_WORKS_STEPS = [
  {
    id: "meeting",
    step: 1,
    icon: "Video",
    title: "Reunión",
    description: "Hablamos 30 minutos. Entendemos tu negocio y qué querés automatizar.",
  },
  {
    id: "setup",
    step: 2,
    icon: "Settings",
    title: "Configuración",
    description: "Armamos el sistema a medida. Textos, flujos, respuestas — todo con tu voz.",
  },
  {
    id: "testing",
    step: 3,
    icon: "FlaskConical",
    title: "Prueba",
    description: "Testeamos todo juntos. Probamos escenarios reales hasta que quede perfecto.",
  },
  {
    id: "live",
    step: 4,
    icon: "Rocket",
    title: "¡Listo!",
    description: "Tu negocio ya responde solo. Vos te enfocás en lo que importa.",
  },
] as const;

// ============================================
// Pricing Section
// ============================================
export const PRICING_PLANS = [
  {
    id: "demo",
    name: "Demo Free",
    price: 0,
    currency: "Bs",
    badge: null,
    featured: false,
    description: "Para que veas cómo funciona sin comprometerte.",
    features: [
      "Demo funcional de 3 días",
      "1 flujo de automatización",
      "Soporte por WhatsApp",
      "Sin tarjeta de crédito",
    ],
    cta: "Probar gratis",
  },
  {
    id: "basico",
    name: "Básico",
    price: 700,
    currency: "Bs",
    badge: null,
    featured: false,
    description: "Para negocios que quieren empezar a automatizar.",
    features: [
      "1 canal (WhatsApp o Instagram)",
      "Hasta 3 flujos de automatización",
      "Captura de leads básica",
      "Soporte prioritario",
      "1 mes de mantenimiento incluido",
    ],
    cta: "Empezar ahora",
  },
  {
    id: "completo",
    name: "Completo",
    price: 2200,
    currency: "Bs",
    badge: "Más elegido",
    featured: true,
    description: "Para negocios que quieren automatizar todo de una vez.",
    features: [
      "WhatsApp + Instagram + Facebook",
      "Flujos ilimitados",
      "Agendamiento automático",
      "Captura y registro de leads",
      "Reportes mensuales",
      "2 meses de mantenimiento incluidos",
      "Soporte prioritario 24/7",
    ],
    cta: "Quiero el completo",
  },
] as const;

export const MAINTENANCE_NOTE = "Mantenimiento desde 150 Bs/mes después del período incluido.";

// ============================================
// Business Types (Contact Form Dropdown)
// ============================================
export const BUSINESS_TYPES = [
  "Clínica / Salud",
  "Taller / Mecánica",
  "Academia / Educación",
  "Restaurante / Gastronomía",
  "Comercio / Tienda",
  "Servicios profesionales",
  "Otro",
] as const;
