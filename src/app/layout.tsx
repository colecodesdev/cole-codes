import type { Metadata, Viewport } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

const SITE_URL = "https://colecodes.dev";
const SITE_TITLE = "Cole Codes — Cole Reilly, Software Engineer";
const SITE_DESCRIPTION =
  "Portfolio of Cole Reilly: production web and AWS cloud engineering. Featured projects in React, FastAPI, Terraform, and Amazon ECS.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Cole Codes",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Cole Codes",
  authors: [{ name: "Cole Reilly", url: SITE_URL }],
  creator: "Cole Reilly",
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Cole Codes",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-main text-main font-sans antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
