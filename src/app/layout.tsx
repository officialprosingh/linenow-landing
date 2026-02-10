import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { ThemeCustomizer } from "@/components/theme-customizer";

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
        className={`${inter.variable} antialiased bg-ln-bg font-sans selection:bg-ln-primary selection:text-black`}
      >
        <ThemeProvider>
          {children}
          <ThemeCustomizer />
        </ThemeProvider>
      </body>
    </html>
  );
}
