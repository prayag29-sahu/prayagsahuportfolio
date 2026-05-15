/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: "class", // class-based dark mode
  theme: {
    extend: {
      colors: {
        // Theme-aware semantic tokens (map to CSS variables)
        theme: {
          bg:       "var(--bg)",
          surface:  "var(--surface)",
          surface2: "var(--surface-2)",
          border:   "var(--border)",
          dim:      "var(--border-dim)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          blue:    "var(--accent-blue)",
          amber:   "var(--accent-amber)",
          purple:  "var(--accent-purple)",
          red:     "var(--accent-red)",
        },
        text: {
          primary: "var(--text-primary)",
          muted:   "var(--text-muted)",
          dim:     "var(--text-dim)",
        },
      },
      fontFamily: {
        mono: ["'Courier New'", "Courier", "monospace"],
        sans: ["Inter", "'Segoe UI'", "'Helvetica Neue'", "Arial", "sans-serif"],
      },
      animation: {
        "float":        "float 4s ease-in-out infinite",
        "fade-in-up":   "fadeInUp 0.6s ease-out forwards",
        "scale-in":     "scaleIn 0.35s ease-out forwards",
        "scan":         "scanMove 3s linear infinite",
        "scroll-dot":   "scroll-dot 2s infinite",
      },
      transitionDuration: {
        "400": "400ms",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
