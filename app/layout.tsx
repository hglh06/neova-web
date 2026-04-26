import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neova | Rafia Agrícola",
  description:
    "Fabricación de rafia agrícola de alta calidad para tutoreo de cultivos. Soluciones resistentes, personalizadas y confiables.",

  icons: {
    icon: "/favicon.png", // asegúrate de tener este archivo en /public
  },

  openGraph: {
    title: "Neova | Rafia Agrícola",
    description:
      "Rafia agrícola resistente y confiable para mejorar la productividad en campo.",
    url: "https://neova.mx",
    siteName: "Neova",
    images: [
      {
        url: "/logo-footer.png", // puedes cambiar esto por una imagen más grande tipo banner
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_MX",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
