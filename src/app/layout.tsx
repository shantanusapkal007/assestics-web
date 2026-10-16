import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalUrl),
  title: {
    default: "Assestics — Complex problems. Smarter systems.",
    template: "%s | Assestics",
  },
  description: siteConfig.description,
  keywords: [
    "Assestics",
    "AI Automation",
    "AI Agents",
    "Software Engineering",
    "Cloud Architecture",
    "DevOps",
    "Supply Chain Optimization",
    "Business Systems",
    "ERP Integration",
  ],
  authors: [{ name: "Assestics Team", url: siteConfig.canonicalUrl }],
  creator: "Assestics",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.canonicalUrl,
    siteName: siteConfig.name,
    title: "Assestics — Complex problems. Smarter systems.",
    description: siteConfig.description,
    images: [
      {
        url: "/images/logo.png",
        width: 600,
        height: 600,
        alt: "Assestics — Connected Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assestics — Complex problems. Smarter systems.",
    description: siteConfig.description,
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.canonicalUrl,
    logo: `${siteConfig.canonicalUrl}/images/logo.png`,
    description: siteConfig.description,
    sameAs: [siteConfig.socials.linkedin, siteConfig.socials.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      email: siteConfig.contact.email,
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FCFBF8] text-[#202722] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
