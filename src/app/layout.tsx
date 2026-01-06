import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

// Space Grotesk - Neo-Grotesque for premium fintech feel
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xeus - Tu Dinero Unificado y Blindado",
  description: "El primer Sistema Operativo Financiero que lee tu realidad bancaria y crypto para proteger tu poder de compra contra la inflación. Modo Argentina activado.",
  keywords: ["finanzas", "crypto", "inflación", "Argentina", "USDT", "protección financiera", "xeus", "fintech"],
  authors: [{ name: "Xeus Financial Systems" }],
  openGraph: {
    title: "Xeus - Sistema Operativo Financiero",
    description: "Unifica tus pesos y crypto. Protege tu poder de compra contra la inflación.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xeus - Sistema Operativo Financiero",
    description: "Unifica tus pesos y crypto. Protege tu poder de compra.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
