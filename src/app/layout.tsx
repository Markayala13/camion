import type { Metadata } from "next";
import { Archivo_Black, Barlow } from "next/font/google";
import "./globals.css";

const heading = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Barlow({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrcattruckrepairs.com"),
  title: "MR. CAT Truck Repairs — Carrocería, pintura y soldadura de camiones | Los Angeles",
  description:
    "Taller de carrocería, pintura, soldadura y fabricación para camiones comerciales en Los Ángeles. La unidad completa en un solo lugar. Márcanos o mándanos foto por WhatsApp.",
  keywords: [
    "taller de camiones Los Angeles",
    "pintura de camiones",
    "box truck repair",
    "roll-up door repair",
    "soldadura camiones",
    "cab paint truck",
    "carrocería camión comercial",
  ],
  openGraph: {
    title: "MR. CAT Truck Repairs — La unidad completa en un solo lugar",
    description:
      "Carrocería, pintura, soldadura y fabricación para camiones comerciales en Los Ángeles. Así llegó. Así salió.",
    type: "website",
    locale: "es_US",
    alternateLocale: "en_US",
    images: [{ url: "/images/hero-freightliner-after.jpg", width: 1350, height: 1800, alt: "Camión pintado en MR. CAT Truck Repairs" }],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
