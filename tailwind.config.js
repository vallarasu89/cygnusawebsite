/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sky: "#0EA5E9",
          deep: "#1E3A8A",
          void: "#0F172A",
          green: "#10B981",
          ether: "#F0F9FF",
          mist: "#64748B",
          gold: "#F59E0B",
          violet: "#7C3AED",
          cyan: "#06B6D4",
        }
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'glow-sky': '0 0 25px -5px rgba(14, 165, 233, 0.3)',
        'glow-deep': '0 0 35px -5px rgba(30, 58, 138, 0.4)',
        'card-subtle': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 50% 30%, rgba(14, 165, 233, 0.15), transparent 70%)',
        'subtle-grid': 'linear-gradient(to right, rgba(14, 165, 233, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(14, 165, 233, 0.05) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}

