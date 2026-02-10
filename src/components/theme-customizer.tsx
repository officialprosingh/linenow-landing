"use client";

import { useState } from "react";
import { Palette, X, ChevronDown, RotateCcw } from "lucide-react";
import { useTheme, presetPalettes, fontOptions } from "@/contexts/theme-context";

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isFontOpen, setIsFontOpen] = useState(false);
  const { colors, font, fontFamily, setColors, setFont, applyPalette, resetToDefault } = useTheme();

  const colorLabels = {
    primary: "Primary",
    secondary: "Secondary",
    tertiary: "Tertiary",
    bg: "Background",
    slateNavy: "Slate Navy",
    deepBlueGray: "Deep Blue Gray",
    subtext: "Subtext",
    textColor: "Text Color",
    success: "Success",
    warning: "Warning",
    danger: "Danger",
  };

  const handleColorChange = (key: keyof typeof colors, value: string) => {
    setColors({ ...colors, [key]: value });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-ln-primary text-ln-bg rounded-full shadow-lg hover:scale-110 transition-transform glow-accent"
        title="Theme Customizer"
      >
        <Palette className="w-6 h-6" />
      </button>

      {/* Customizer Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-slate-900 border-l border-slate-700 shadow-2xl z-50 overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-slate-800/90 backdrop-blur-md border-b border-slate-700 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-ln-primary" />
                <h2 className="text-lg font-bold text-white">Theme Customizer</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-ln-deep-blue-gray rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Preset Palettes Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Preset Palettes
                </label>
                <div className="relative">
                  <button
                    onClick={() => setIsPaletteOpen(!isPaletteOpen)}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-between hover:bg-slate-700 transition-colors"
                  >
                    <span className="text-white">Select a palette...</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isPaletteOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isPaletteOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-600 rounded-lg overflow-hidden shadow-xl z-10">
                      {presetPalettes.map((palette) => (
                        <button
                          key={palette.name}
                          onClick={() => {
                            applyPalette(palette);
                            setIsPaletteOpen(false);
                          }}
                          className="w-full px-4 py-3 hover:bg-slate-700 transition-colors text-left group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium">
                              {palette.name}
                            </span>
                            <div className="flex gap-1">
                              {Object.values(palette.colors)
                                .slice(0, 4)
                                .map((color, i) => (
                                  <div
                                    key={i}
                                    className="w-4 h-4 rounded-full border border-white/20"
                                    style={{ backgroundColor: color }}
                                  />
                                ))}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Font Selector */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Font Family
                </label>
                <div className="relative">
                  <button
                    onClick={() => setIsFontOpen(!isFontOpen)}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-between hover:bg-slate-700 transition-colors"
                  >
                    <span className="text-white">{fontFamily}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isFontOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isFontOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-600 rounded-lg overflow-hidden shadow-xl z-10">
                      {fontOptions.map((fontOption) => (
                        <button
                          key={fontOption.name}
                          onClick={() => {
                            setFont(fontOption.value, fontOption.family);
                            setIsFontOpen(false);
                          }}
                          className="w-full px-4 py-3 hover:bg-slate-700 transition-colors text-left"
                          style={{ fontFamily: fontOption.value }}
                        >
                          <span className="text-white">{fontOption.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Individual Color Pickers */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">
                  Individual Colors
                </h3>
                <div className="space-y-3">
                  {Object.entries(colors).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <label className="text-sm text-white/90 font-medium">
                        {colorLabels[key as keyof typeof colorLabels]}
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={value}
                          onChange={(e) =>
                            handleColorChange(
                              key as keyof typeof colors,
                              e.target.value
                            )
                          }
                          className="w-10 h-10 rounded-lg cursor-pointer border-2 border-slate-600"
                        />
                        <input
                          type="text"
                          value={value}
                          onChange={(e) =>
                            handleColorChange(
                              key as keyof typeof colors,
                              e.target.value
                            )
                          }
                          className="w-24 px-2 py-1 bg-slate-800 border border-slate-600 rounded text-xs text-white font-mono"
                          placeholder="#000000"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetToDefault}
                className="w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="text-white font-medium">Reset to Default</span>
              </button>

              {/* Info */}
              <div className="p-4 bg-slate-800/50 border border-slate-600/50 rounded-lg">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Changes are saved automatically to localStorage and will persist across sessions.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
