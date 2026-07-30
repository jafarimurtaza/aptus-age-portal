module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './pages/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: { extend: {} },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#183A6B',
          secondary: '#C8955A',
          accent: '#C8955A',
          neutral: '#0B0F19',
          'base-100': '#FAF7F2',
          'base-200': '#F5F0E8',
          'base-content': '#0B0F19',
          info: '#3B82F6',
          success: '#22C55E',
          warning: '#F59E0B',
          error: '#EF4444'
        }
      },
      {
        dark: {
          primary: '#C8955A',
          secondary: '#183A6B',
          accent: '#D7A96D',
          neutral: '#0B0F19',
          'base-100': '#0B0F19',
          'base-200': '#111827',
          'base-content': '#FAF7F2',
          info: '#60A5FA',
          success: '#4ADE80',
          warning: '#FBBF24',
          error: '#F87171'
        }
      }
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    logs: true,
    rtl: false
  }
};
