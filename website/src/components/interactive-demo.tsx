"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Palette, Plus, Download, Eye, Search, MoreHorizontal } from "lucide-react"

interface ArcTheme {
  name: string
  description: string
  colors: {
    sidebar: string
    sidebarActive: string
    tabBar: string
    tabActive: string
    tabInactive: string
    addressBar: string
    accent: string
    background: string
    text: string
    textSecondary: string
  }
}

export default function InteractiveDemo() {
  const [selectedTheme, setSelectedTheme] = useState("catppuccin-mocha")
  const [showCustomEditor, setShowCustomEditor] = useState(false)

  const popularThemes: Record<string, ArcTheme> = {
    "catppuccin-mocha": {
      name: "Catppuccin Mocha",
      description: "Soothing pastel theme for the high-spirited!",
      colors: {
        sidebar: "#1e1e2e",
        sidebarActive: "#89b4fa",
        tabBar: "#313244",
        tabActive: "#45475a",
        tabInactive: "#313244",
        addressBar: "#45475a",
        accent: "#89b4fa",
        background: "#1e1e2e",
        text: "#cdd6f4",
        textSecondary: "#a6adc8",
      },
    },
    dracula: {
      name: "Dracula",
      description: "A dark theme for those who live on the edge",
      colors: {
        sidebar: "#282a36",
        sidebarActive: "#bd93f9",
        tabBar: "#44475a",
        tabActive: "#6272a4",
        tabInactive: "#44475a",
        addressBar: "#6272a4",
        accent: "#bd93f9",
        background: "#282a36",
        text: "#f8f8f2",
        textSecondary: "#6272a4",
      },
    },
    "tokyo-night": {
      name: "Tokyo Night",
      description: "A clean, dark theme inspired by Tokyo's neon nights",
      colors: {
        sidebar: "#1a1b26",
        sidebarActive: "#7aa2f7",
        tabBar: "#24283b",
        tabActive: "#414868",
        tabInactive: "#24283b",
        addressBar: "#414868",
        accent: "#7aa2f7",
        background: "#1a1b26",
        text: "#c0caf5",
        textSecondary: "#565f89",
      },
    },
    nord: {
      name: "Nord",
      description: "An arctic, north-bluish color palette",
      colors: {
        sidebar: "#2e3440",
        sidebarActive: "#88c0d0",
        tabBar: "#3b4252",
        tabActive: "#434c5e",
        tabInactive: "#3b4252",
        addressBar: "#434c5e",
        accent: "#88c0d0",
        background: "#2e3440",
        text: "#eceff4",
        textSecondary: "#d8dee9",
      },
    },
    gruvbox: {
      name: "Gruvbox Dark",
      description: "Retro groove color scheme",
      colors: {
        sidebar: "#282828",
        sidebarActive: "#83a598",
        tabBar: "#3c3836",
        tabActive: "#504945",
        tabInactive: "#3c3836",
        addressBar: "#504945",
        accent: "#83a598",
        background: "#282828",
        text: "#ebdbb2",
        textSecondary: "#a89984",
      },
    },
    "one-dark": {
      name: "One Dark",
      description: "Atom's iconic One Dark theme",
      colors: {
        sidebar: "#21252b",
        sidebarActive: "#61afef",
        tabBar: "#2c313c",
        tabActive: "#3e4451",
        tabInactive: "#2c313c",
        addressBar: "#3e4451",
        accent: "#61afef",
        background: "#21252b",
        text: "#abb2bf",
        textSecondary: "#5c6370",
      },
    },
  }

  const currentTheme = popularThemes[selectedTheme]

  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Theme Selection Panel */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="ml-4 text-white font-medium">Arcitect Theme Library</div>
            </div>

            {!showCustomEditor ? (
              <>
                <div className="mb-6">
                  <h3 className="text-white font-medium mb-2">Popular Themes</h3>
                  <p className="text-gray-400 text-sm">Choose from community favorites</p>
                </div>

                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {Object.entries(popularThemes).map(([key, theme]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedTheme(key)}
                      className={`w-full p-4 rounded-lg border-2 transition-all ${
                        selectedTheme === key
                          ? "border-purple-500 bg-gray-700"
                          : "border-gray-600 bg-gray-800 hover:bg-gray-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-medium text-left">{theme.name}</h4>
                        <div className="flex space-x-1">
                          <div
                            className="w-4 h-4 rounded-full border border-gray-500"
                            style={{ backgroundColor: theme.colors.accent }}
                          />
                          <div
                            className="w-4 h-4 rounded-full border border-gray-500"
                            style={{ backgroundColor: theme.colors.sidebar }}
                          />
                          <div
                            className="w-4 h-4 rounded-full border border-gray-500"
                            style={{ backgroundColor: theme.colors.tabActive }}
                          />
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs text-left">{theme.description}</p>
                    </button>
                  ))}
                </div>

                <Button
                  onClick={() => setShowCustomEditor(true)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your Own Theme
                </Button>
              </>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium">Custom Theme Editor</h3>
                  <Button
                    onClick={() => setShowCustomEditor(false)}
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-gray-600 text-gray-300"
                  >
                    Back to Themes
                  </Button>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 space-y-4">
                  <p className="text-gray-400 text-sm">Customize every aspect of your Arc Browser theme</p>

                  {Object.entries(currentTheme.colors).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <label className="text-gray-300 capitalize text-sm">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </label>
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-8 h-8 rounded border-2 border-gray-600 cursor-pointer"
                          style={{ backgroundColor: value }}
                        />
                        <span className="text-gray-400 text-xs font-mono w-16">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex space-x-3">
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Apply to Arc
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                Export Theme
              </Button>
            </div>
          </div>

          {/* Arc Browser Preview */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-medium">Arc Browser Preview</h3>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <Eye className="w-3 h-3 mr-1" />
                Live Preview
              </Badge>
            </div>

            {/* Arc Browser Mockup */}
            <div
              className="rounded-xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: currentTheme.colors.background }}
            >
              {/* Window Controls */}
              <div
                className="flex items-center justify-between p-3"
                style={{ backgroundColor: currentTheme.colors.sidebar }}
              >
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs" style={{ color: currentTheme.colors.textSecondary }}>
                  {currentTheme.name}
                </div>
              </div>

              <div className="flex h-64">
                {/* Arc Sidebar */}
                <div className="w-20 p-3 space-y-3" style={{ backgroundColor: currentTheme.colors.sidebar }}>
                  {/* Profile */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: currentTheme.colors.sidebarActive,
                      color: currentTheme.colors.background,
                    }}
                  >
                    A
                  </div>

                  {/* Spaces */}
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-lg flex items-center justify-center relative"
                      style={{
                        backgroundColor: i === 1 ? currentTheme.colors.sidebarActive : "transparent",
                        border: i !== 1 ? `1px solid ${currentTheme.colors.textSecondary}40` : "none",
                      }}
                    >
                      <div
                        className="w-4 h-4 rounded"
                        style={{
                          backgroundColor:
                            i === 1 ? currentTheme.colors.background : currentTheme.colors.textSecondary + "60",
                        }}
                      />
                      {i === 1 && (
                        <div
                          className="absolute -right-1 top-0 w-2 h-2 rounded-full"
                          style={{ backgroundColor: currentTheme.colors.accent }}
                        />
                      )}
                    </div>
                  ))}

                  {/* Add Space */}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center border-2 border-dashed"
                    style={{ borderColor: currentTheme.colors.textSecondary + "40" }}
                  >
                    <Plus className="w-3 h-3" style={{ color: currentTheme.colors.textSecondary }} />
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col">
                  {/* Tab Bar */}
                  <div
                    className="flex items-center px-4 py-2 space-x-2"
                    style={{ backgroundColor: currentTheme.colors.tabBar }}
                  >
                    {/* Active Tab */}
                    <div
                      className="px-3 py-1 rounded-md flex items-center space-x-2 min-w-0"
                      style={{ backgroundColor: currentTheme.colors.tabActive }}
                    >
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-xs truncate" style={{ color: currentTheme.colors.text }}>
                        Arcitect
                      </span>
                      <div className="w-3 h-3 rounded-full hover:bg-gray-500 flex items-center justify-center">
                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                      </div>
                    </div>

                    {/* Inactive Tabs */}
                    {["GitHub", "Arc"].map((name, i) => (
                      <div
                        key={name}
                        className="px-3 py-1 rounded-md flex items-center space-x-2 min-w-0 opacity-70"
                        style={{ backgroundColor: currentTheme.colors.tabInactive }}
                      >
                        <div className={`w-3 h-3 rounded-full ${i === 0 ? "bg-gray-600" : "bg-blue-500"}`} />
                        <span className="text-xs truncate" style={{ color: currentTheme.colors.textSecondary }}>
                          {name}
                        </span>
                      </div>
                    ))}

                    <div className="flex-1" />
                    <MoreHorizontal className="w-4 h-4" style={{ color: currentTheme.colors.textSecondary }} />
                  </div>

                  {/* Address Bar */}
                  <div className="px-4 py-3" style={{ backgroundColor: currentTheme.colors.addressBar }}>
                    <div
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg"
                      style={{ backgroundColor: currentTheme.colors.background + "40" }}
                    >
                      <Search className="w-4 h-4" style={{ color: currentTheme.colors.textSecondary }} />
                      <span className="text-sm" style={{ color: currentTheme.colors.text }}>
                        arcitect.app
                      </span>
                    </div>
                  </div>

                  {/* Page Content */}
                  <div className="flex-1 p-4 space-y-3" style={{ backgroundColor: currentTheme.colors.background }}>
                    <div className="h-6 rounded" style={{ backgroundColor: currentTheme.colors.accent + "60" }} />
                    <div
                      className="h-4 rounded w-3/4"
                      style={{ backgroundColor: currentTheme.colors.textSecondary + "40" }}
                    />
                    <div
                      className="h-4 rounded w-1/2"
                      style={{ backgroundColor: currentTheme.colors.textSecondary + "30" }}
                    />

                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="h-12 rounded" style={{ backgroundColor: currentTheme.colors.tabActive + "60" }} />
                      <div className="h-12 rounded" style={{ backgroundColor: currentTheme.colors.accent + "40" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-xs text-center">
              Preview shows how <strong>{currentTheme.name}</strong> looks in Arc Browser
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Badge */}
      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
        <Palette className="w-4 h-4 inline mr-1" />
        Try themes live!
      </div>
    </div>
  )
}
