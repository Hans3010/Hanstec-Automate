# CLAUDE.md — HansTec Automate Landing Page

## Proyecto
Landing page profesional para HansTec Automate. Vende servicios de automatización con n8n para pequeños y medianos negocios en Santa Cruz de la Sierra, Bolivia.

## Stack Técnico
- **Framework:** Next.js 15 (App Router)
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion
- **Lenguaje:** TypeScript
- **Deploy:** Vercel
- **Fuentes:** Google Fonts → Bebas Neue (títulos), Rajdhani (cuerpo), Space Mono (etiquetas/monospace)
- **Íconos:** Lucide React

## Estructura del Proyecto
```
hanstec-automate/
├── app/
│   ├── layout.tsx          # Layout raíz con fonts, metadata, ThemeProvider
│   ├── page.tsx            # Página principal que importa todas las secciones
│   ├── globals.css         # Variables CSS del brand kit + Tailwind
│   └── favicon.ico
├── components/
│   ├── Nav.tsx             # Navbar fijo con logo SVG + toggle dark/light + CTA
│   ├── Hero.tsx            # Hero con headline, subcopy, CTAs + visual del teléfono animado
│   ├── Problems.tsx        # 3 cards de problemas con iconos
│   ├── Solutions.tsx       # 3 servicios con precio en Bs
│   ├── UseCases.tsx        # Tabs interactivos: Clínica, Taller, Academia, Restaurante
│   ├── HowItWorks.tsx      # Timeline visual de 4 pasos
│   ├── Pricing.tsx         # 3 planes: Demo Free, Básico, Completo
│   ├── Contact.tsx         # Formulario + botón WhatsApp + info de confianza
│   ├── Footer.tsx          # Logo SVG + tagline + links
│   ├── ui/
│   │   ├── HansTecIcon.tsx # Componente SVG del ícono H con diagonal de velocidad
│   │   ├── ThemeToggle.tsx # Toggle dark/light mode
│   │   ├── AnimatedGrid.tsx# Grilla animada de fondo para el hero
│   │   ├── PhoneMockup.tsx # Mockup del teléfono con chat animado
│   │   └── SectionHeader.tsx # Componente reutilizable para headers de sección
│   └── providers/
│       └── ThemeProvider.tsx # Context para dark/light mode
├── lib/
│   └── constants.ts        # Datos: servicios, precios, casos de uso, pasos
├── public/
│   └── og-image.png        # Open Graph image para compartir en redes
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Brand Kit — USAR EXACTAMENTE ESTOS VALORES

### Colores
```css
/* Dark theme (default) */
--bg: #0A0A0A;
--bg-2: #111111;
--bg-3: #1A1A1A;
--text: #F5F5F5;
--text-dim: #555555;
--text-mid: #999999;
--border: #2A2A2A;
--red: #E63946;
--red-bright: #FF4757;
--red-glow: rgba(230,57,70,0.15);

/* Light theme */
--bg: #F5F4F0;
--bg-2: #FFFFFF;
--bg-3: #EDECE8;
--text: #0A0A0A;
--text-dim: #888888;
--text-mid: #666666;
--border: #DDDDDD;
--red: #C0392B;
--red-bright: #E63946;
```

### Tipografía
- **Bebas Neue** → Títulos, logos, números grandes, CTAs, headings (h1-h4)
- **Rajdhani** → Cuerpo de texto, párrafos, botones, descripciones
- **Space Mono** → Etiquetas técnicas, labels pequeños, section labels, precios tags

### Ícono SVG (H con diagonal de velocidad)
```tsx
// Componente HansTecIcon — USAR ESTE SVG EXACTO
<svg viewBox="0 0 80 80" fill="none">
  <rect x="8" y="8" width="14" height="64" fill="currentTextColor"/>
  <rect x="58" y="8" width="14" height="64" fill="currentTextColor"/>
  <polygon points="22,33 58,33 58,47 22,47" fill="var(--red)"/>
  <polygon points="22,33 44,33 58,44 58,47 36,47 22,36" fill="var(--red-bright)"/>
</svg>
```

## Secciones — Orden y Contenido

### 1. NAV (fijo, blur backdrop)
- Logo: ícono SVG + "HansTec Automate" en Bebas Neue
- Toggle dark/light a la derecha
- CTA: "Quiero automatizar" → scroll a #contacto
- Sombra al hacer scroll

### 2. HERO
- Badge: "Automatización para negocios · Santa Cruz" con dot pulsante
- H1: "TU NEGOCIO RESPONDIENDO 24/7 SIN VOS"
- Subcopy: Automatizamos tu WhatsApp, Instagram y Facebook...
- 2 CTAs: primario (contacto) + secundario (cómo funciona)
- Visual derecho: PhoneMockup con chat animado simulando conversación
- Stats flotantes: "<30s respuesta" y "0 leads perdidos"
- Fondo: grilla animada moviéndose

### 3. PROBLEMA — "¿Te suena familiar?"
- 3 cards: Pierdes clientes, Agendas por llamada, No sabes tus leads
- Icono + título + descripción por card
- Hover: línea roja top + translateY

### 4. SOLUCIÓN — "Automatizamos todo eso por vos"
- 3 servicios: Chatbot WhatsApp (800 Bs), Agendamiento (1.000 Bs), Captura leads (600 Bs)
- Cada uno con icono, nombre, descripción, precio
- Hover: borde rojo + sombra + translateY

### 5. CASOS DE USO — Tabs interactivos
- 4 tabs: Clínica, Taller, Academia, Restaurante
- Cada tab: escenario descriptivo + flujo de 4 pasos
- Tab activo en rojo

### 6. CÓMO FUNCIONA — Timeline 4 pasos
- Reunión → Configuración → Prueba → ¡Listo!
- Círculos con íconos conectados por línea
- Hover: scale en círculos

### 7. PRECIOS — 3 planes
- Demo Free (0 Bs), Básico (800 Bs), Completo (2.500 Bs — "Más elegido")
- Plan completo con borde rojo + badge + sombra glow
- Features con checks visuales
- Nota: "Mantenimiento desde 150 Bs/mes"

### 8. CONTACTO
- Formulario: nombre, tipo de negocio (dropdown), WhatsApp, mensaje
- Botón WhatsApp directo como alternativa
- Info de confianza: "Santa Cruz · Atención personalizada"
- Formulario muestra éxito sin backend (solo state)

### 9. FOOTER
- Logo SVG + "HansTec Automate — Santa Cruz, Bolivia — 2026" + link WhatsApp

## Animaciones (Framer Motion)
- Fade-in + translateY en scroll para cada sección (usar `whileInView`)
- Stagger en grids de cards (delay incremental)
- Chat bubbles con animación secuencial en el hero
- Hover: scale, translateY, border-color en cards
- Grilla de fondo con CSS animation (translate loop)
- Dot pulsante en hero badge
- CTA con shimmer/shine effect en hover

## Requisitos de Calidad
- Mobile-first, completamente responsive (breakpoints: sm, md, lg)
- Performance: usar next/font para las fuentes, lazy loading de secciones bajo el fold
- SEO: metadata completa en layout.tsx (title, description, og:image)
- Accessibility: semántica HTML correcta, aria-labels en botones icon-only
- Smooth scroll con scroll-behavior y scroll-padding-top
- NO usar librerías de UI como shadcn, MUI, Chakra. Solo Tailwind + componentes propios

## Tono del Copy
- Directo, cercano, como joven profesional boliviano hablando a otro dueño de negocio
- Usar "vos" (voseo boliviano)
- NO tecnicismos: no decir "n8n", "webhook", "API". Decir "automatización", "sistema inteligente"
- Números concretos: "menos de 30 segundos", "24 horas", "0 leads perdidos"

## Comandos Útiles
```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run start

# Deploy a Vercel (si se tiene CLI)
vercel --prod
```

## Notas para el Agente
- El número de WhatsApp placeholder es 59170012345. Dejarlo como constante en lib/constants.ts para que Hans lo cambie fácil.
- Toda la data de secciones (servicios, precios, casos de uso, pasos) debe estar en lib/constants.ts, no hardcodeada en componentes.
- Priorizar código limpio y bien organizado. Cada componente en su archivo.
- El tema dark es el DEFAULT. Light es la alternativa.
- NO instalar dependencias innecesarias. Solo las del stack definido.