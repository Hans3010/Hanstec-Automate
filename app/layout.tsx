import type { Metadata } from "next";
import { Bebas_Neue, Rajdhani, Space_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hanstec.vercel.app"),
  title: "HansTec Automate — Automatización para negocios en Santa Cruz",
  description:
    "Automatizamos tu WhatsApp, Instagram y Facebook para que tu negocio responda 24/7 sin que estés pendiente. Servicios de automatización para pequeños y medianos negocios en Santa Cruz de la Sierra, Bolivia.",
  keywords: [
    "automatización",
    "chatbot WhatsApp",
    "Santa Cruz Bolivia",
    "automatización negocios",
    "HansTec",
    "respuesta automática",
    "agendamiento automático",
  ],
  authors: [{ name: "HansTec Automate" }],
  creator: "HansTec Automate",
  openGraph: {
    type: "website",
    locale: "es_BO",
    url: "https://hanstec.vercel.app",
    siteName: "HansTec Automate",
    title: "HansTec Automate — Tu negocio respondiendo 24/7 sin vos",
    description:
      "Automatizamos tu WhatsApp, Instagram y Facebook. Servicios de automatización para negocios en Santa Cruz de la Sierra, Bolivia.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "HansTec Automate — Automatización para negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HansTec Automate — Tu negocio respondiendo 24/7 sin vos",
    description:
      "Automatizamos tu WhatsApp, Instagram y Facebook para negocios en Santa Cruz, Bolivia.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${rajdhani.variable} ${spaceMono.variable}`}
    >
      <head>
        {/* Blocking script: apply stored theme before first paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('hanstec-theme');if(t==='light')document.documentElement.setAttribute('data-theme','light');}catch(e){}})();`,
          }}
        />
        {/* LocalBusiness JSON-LD — SEO local Santa Cruz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "HansTec Automate",
              description:
                "Automatización de WhatsApp, Instagram y Facebook para pequeños y medianos negocios en Santa Cruz de la Sierra, Bolivia.",
              url: "https://hanstec.vercel.app",
              telephone: "+59178723836",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Santa Cruz de la Sierra",
                addressRegion: "Santa Cruz",
                addressCountry: "BO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -17.7863,
                longitude: -63.1812,
              },
              areaServed: { "@type": "City", name: "Santa Cruz de la Sierra" },
              serviceType: [
                "Automatización de WhatsApp",
                "Chatbot para negocios",
                "Agendamiento automático",
                "Captura de leads",
              ],
              priceRange: "Bs 700 – Bs 2.200",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: ["https://wa.me/59178723836"],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
