import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Título e Descrição
  title: "Origo Films | Revele sua Essência",
  description: "Produção audiovisual cinematográfica de alta conversão em Brasília. Filmes que conectam e vendem.",
  
  // Open Graph (WhatsApp/Social)
  openGraph: {
    title: "Origo Films | Produção Audiovisual",
    description: "Transforme sua marca com vídeos cinematográficos.",
    url: "https://origofilms.com.br",
    siteName: "Origo Films",
    images: [
      {
        url: "/media/capa_02.png", 
        width: 1200,
        height: 630,
        alt: "Origo Films Capa",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-background text-textPrimary antialiased`}>
        {children}
      </body>
    </html>
  );
}