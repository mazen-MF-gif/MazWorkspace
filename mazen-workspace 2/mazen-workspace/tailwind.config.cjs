module.exports = {
      darkMode: 'class',
 content: ['./index.html', './app.js', './accessibility.js'],
      theme: {
        extend: {
          fontFamily: {
            sans: ['Tajawal', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            mono: ['JetBrains Mono', 'Menlo', 'monospace'],
          },
          colors: {
            brand: {
              50: '#f0f9ff',
              100: '#e0f2fe',
              200: '#bae6fd',
              300: '#7dd3fc',
              400: '#38bdf8',
              500: '#0ea5e9',
              600: '#0369a1',
              700: '#075985',
              800: '#0c4a6e',
              900: '#0b3c58',
              950: '#082f49',
            },
            darkbg: {
              base: '#090d16',
              surface: '#0f172a',
              card: '#131c31',
              border: '#1e293b'
            }
          },
          boxShadow: {
            'glow-brand': '0 0 25px -4px rgba(99, 102, 241, 0.35)',
            'glow-emerald': '0 0 20px -4px rgba(16, 185, 129, 0.3)',
            'apple-card': '0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
            'apple-card-dark': '0 10px 30px -4px rgba(0, 0, 0, 0.5), 0 2px 8px -2px rgba(0, 0, 0, 0.3)',
          }
        }
      }
    }
  