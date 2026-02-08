import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LineNow | AI-Powered B2B Order Operations",
  description:
    "Streamline procurement, eliminate manual data entry, and unify your supply chain with the next generation of intelligent order management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.variable} antialiased bg-ln-bg text-slate-100 font-sans selection:bg-ln-primary selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
