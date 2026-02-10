"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface ColorPalette {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    bg: string;
    slateNavy: string;
    deepBlueGray: string;
    subtext: string;
    textColor: string;
    success: string;
    warning: string;
    danger: string;
  };
}

export const presetPalettes: ColorPalette[] = [
  {
    name: "LineNow Original",
    colors: {
      primary: "#92B8F8",
      secondary: "#708DBD",
      tertiary: "#566C91",
      bg: "#030304",
      slateNavy: "#2A3546",
      deepBlueGray: "#3D4D67",
      subtext: "#94A3B8",
      textColor: "#F1F5F9",
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444",
    },
  },
  {
    name: "Purple Haze",
    colors: {
      primary: "#C084FC",
      secondary: "#9333EA",
      tertiary: "#6B21A8",
      bg: "#0F0A1A",
      slateNavy: "#1E1B33",
      deepBlueGray: "#2D2847",
      subtext: "#A78BFA",
      textColor: "#F3E8FF",
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444",
    },
  },
  {
    name: "Ocean Breeze",
    colors: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      tertiary: "#155E75",
      bg: "#020617",
      slateNavy: "#1E293B",
      deepBlueGray: "#334155",
      subtext: "#94A3B8",
      textColor: "#F0F9FF",
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444",
    },
  },
  {
    name: "Emerald Dream",
    colors: {
      primary: "#34D399",
      secondary: "#10B981",
      tertiary: "#059669",
      bg: "#021208",
      slateNavy: "#1C2E26",
      deepBlueGray: "#2D4A40",
      subtext: "#86EFAC",
      textColor: "#ECFDF5",
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444",
    },
  },
  {
    name: "Sunset Blaze",
    colors: {
      primary: "#FB923C",
      secondary: "#F97316",
      tertiary: "#EA580C",
      bg: "#0A0604",
      slateNavy: "#2E1F1A",
      deepBlueGray: "#4A3229",
      subtext: "#FDBA74",
      textColor: "#FFF7ED",
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444",
    },
  },
  {
    name: "Rose Gold",
    colors: {
      primary: "#FB7185",
      secondary: "#F43F5E",
      tertiary: "#BE123C",
      bg: "#0F0409",
      slateNavy: "#2B1821",
      deepBlueGray: "#422936",
      subtext: "#FDA4AF",
      textColor: "#FFF1F2",
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444",
    },
  },
  {
    name: "Clean White",
    colors: {
      primary: "#3B82F6",
      secondary: "#6366F1",
      tertiary: "#8B5CF6",
      bg: "#FFFFFF",
      slateNavy: "#F1F5F9",
      deepBlueGray: "#E2E8F0",
      subtext: "#475569",
      textColor: "#0F172A",
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444",
    },
  },
  {
    name: "Soft Lavender",
    colors: {
      primary: "#A78BFA",
      secondary: "#C084FC",
      tertiary: "#E9D5FF",
      bg: "#FEFEFE",
      slateNavy: "#FAF5FF",
      deepBlueGray: "#F3E8FF",
      subtext: "#6B21A8",
      textColor: "#3B0764",
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444",
    },
  },
  {
    name: "Mint Fresh",
    colors: {
      primary: "#10B981",
      secondary: "#34D399",
      tertiary: "#6EE7B7",
      bg: "#FFFFFF",
      slateNavy: "#F0FDF4",
      deepBlueGray: "#DCFCE7",
      subtext: "#065F46",
      textColor: "#064E3B",
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444",
    },
  },
  {
    name: "Sky Light",
    colors: {
      primary: "#0EA5E9",
      secondary: "#38BDF8",
      tertiary: "#7DD3FC",
      bg: "#FEFEFE",
      slateNavy: "#F0F9FF",
      deepBlueGray: "#E0F2FE",
      subtext: "#0C4A6E",
      textColor: "#082F49",
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444",
    },
  },
  {
    name: "Peach Cream",
    colors: {
      primary: "#F97316",
      secondary: "#FB923C",
      tertiary: "#FDBA74",
      bg: "#FFFBF5",
      slateNavy: "#FFF7ED",
      deepBlueGray: "#FFEDD5",
      subtext: "#7C2D12",
      textColor: "#431407",
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444",
    },
  },
  {
    name: "Rose Quartz",
    colors: {
      primary: "#F43F5E",
      secondary: "#FB7185",
      tertiary: "#FDA4AF",
      bg: "#FFFFFF",
      slateNavy: "#FFF1F2",
      deepBlueGray: "#FFE4E6",
      subtext: "#881337",
      textColor: "#4C0519",
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444",
    },
  },
];

export const fontOptions = [
  { name: "Inter", value: "var(--font-inter)", family: "Inter" },
  { name: "System", value: "system-ui, sans-serif", family: "System UI" },
  { name: "Monospace", value: "monospace", family: "Monospace" },
  { name: "Georgia", value: "Georgia, serif", family: "Georgia" },
  { name: "Arial", value: "Arial, sans-serif", family: "Arial" },
];

interface ThemeContextType {
  colors: ColorPalette["colors"];
  font: string;
  fontFamily: string;
  setColors: (colors: ColorPalette["colors"]) => void;
  setFont: (font: string, family: string) => void;
  applyPalette: (palette: ColorPalette) => void;
  resetToDefault: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colors, setColors] = useState<ColorPalette["colors"]>(
    presetPalettes[0].colors
  );
  const [font, setFontState] = useState(fontOptions[0].value);
  const [fontFamily, setFontFamily] = useState(fontOptions[0].family);

  useEffect(() => {
    // Load saved preferences
    const savedColors = localStorage.getItem("theme-colors");
    const savedFont = localStorage.getItem("theme-font");
    const savedFontFamily = localStorage.getItem("theme-font-family");

    if (savedColors) {
      setColors(JSON.parse(savedColors));
    }
    if (savedFont) {
      setFontState(savedFont);
    }
    if (savedFontFamily) {
      setFontFamily(savedFontFamily);
    }
  }, []);

  useEffect(() => {
    // Apply colors to CSS variables
    Object.entries(colors).forEach(([key, value]) => {
      // Convert camelCase to kebab-case (e.g., slateNavy -> slate-navy)
      const cssVarName = `--ln-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      document.documentElement.style.setProperty(cssVarName, value);
    });

    // Apply text color to body
    document.body.style.color = colors.textColor;

    // Save to localStorage
    localStorage.setItem("theme-colors", JSON.stringify(colors));
  }, [colors]);

  useEffect(() => {
    // Apply font
    document.documentElement.style.setProperty("--font-sans", font);
    document.body.style.fontFamily = font;

    // Save to localStorage
    localStorage.setItem("theme-font", font);
    localStorage.setItem("theme-font-family", fontFamily);
  }, [font, fontFamily]);

  const setFont = (newFont: string, family: string) => {
    setFontState(newFont);
    setFontFamily(family);
  };

  const applyPalette = (palette: ColorPalette) => {
    setColors(palette.colors);
  };

  const resetToDefault = () => {
    setColors(presetPalettes[0].colors);
    setFontState(fontOptions[0].value);
    setFontFamily(fontOptions[0].family);
  };

  return (
    <ThemeContext.Provider
      value={{ colors, font, fontFamily, setColors, setFont, applyPalette, resetToDefault }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
