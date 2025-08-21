import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hacer la vida en Ciudad Verde - Investigación Participativa",
  description:
    "Centrando las voces de los residentes a través de la investigación participativa. Un proyecto que documenta las alegrías, tristezas, sueños y miedos de los habitantes de Ciudad Verde, el macroproyecto de vivienda social más grande del país.",
  keywords:
    "Ciudad Verde, investigación participativa, vivienda social, residentes, comunidad, Colombia, voces ciudadanas, fotorelato, conversaciones cívicas",
  authors: [{ name: "Residentes Investigadores de Ciudad Verde" }],
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  openGraph: {
    title: "Hacer la vida en Ciudad Verde - Investigación Participativa",
    description:
      "Centrando las voces de los residentes a través de la investigación participativa en Ciudad Verde.",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hacer la vida en Ciudad Verde - Investigación Participativa",
    description:
      "Centrando las voces de los residentes a través de la investigación participativa en Ciudad Verde.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${bebasNeue.variable} antialiased`}>{children}</body>
    </html>
  );
}
