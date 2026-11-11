/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0A0D18",
        deepNavy: "#11182A",
        mutedRose: "#D9A4B3",
        warmIvory: "#F5EFE8",
        lavender: "#B8A9D9",
        softGrey: "#A5A8B5",
        letterBorder: "rgba(217, 164, 179, 0.2)",
        glowRose: "rgba(217, 164, 179, 0.15)",
        glassBg: "rgba(17, 24, 42, 0.65)",
        glassBorder: "rgba(245, 239, 232, 0.08)",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
