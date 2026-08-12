import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Toaster } from "./components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Instant Shield Security Ltd | Security, Protection & Capability",
    template: "%s | Instant Shield Security Ltd",
  },

  description:
    "Instant Shield Security Ltd provides professional security, protection, risk management, and security consultancy services designed to safeguard people, assets, and organizations.",

  keywords: [
    "Instant Shield Security",
    "security company Nigeria",
    "security services Nigeria",
    "security solutions",
    "private security",
    "security consultancy",
    "risk management",
    "security protection",
    "security training",
  ],

  authors: [
    {
      name: "Instant Shield Security Ltd",
    },
  ],

  creator: "Instant Shield Security Ltd",
  publisher: "Instant Shield Security Ltd",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Instant Shield Security Ltd",
    title: "Instant Shield Security Ltd | Security, Protection & Capability",
    description:
      "Professional security, protection, risk management, and security consultancy services for people, assets, and organizations.",
    images: [
      {
        url: "public/assets/images/shield-logo-image.png",
        width: 1200,
        height: 630,
        alt: "Instant Shield Security Ltd",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
