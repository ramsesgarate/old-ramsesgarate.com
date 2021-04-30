const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md',
      './docs/**/*.md',
      './blog/**/*.md',
    ],
    options: {
      whitelist: [
        'body',
        'html',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
        'active',
      ],
    }
  },
  theme: {
    extend: {
      container: {
        padding: '1rem'
      },
      fontFamily: {
        sans: [
          'Quicksand',
          // ...defaultTheme.fontFamily.sans
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
        ],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "grey-050": "#F0F4F8",
        "grey-100": "#D9E2EC",
        "grey-200": "#BCCCDC",
        "grey-300": "#9FB3C8",
        "grey-400": "#829AB1",
        "grey-500": "#627D98",
        "grey-600": "#486581",
        "grey-700": "#334E68",
        "grey-800": "#243B53",
        "grey-900": "#102A43",
        "teal-050": "#EFFCF6",
        "teal-100": "#C6F7E2",
        "teal-200": "#8EEDC7",
        "teal-300": "#65D6AD",
        "teal-400": "#3EBD93",
        "teal-500": "#27AB83",
        "teal-600": "#199473",
        "teal-700": "#147D64",
        "teal-800": "#0C6B58",
        "teal-900": "#014D40",
        "indigo-050": "#E0E8F9",
        "indigo-100": "#BED0F7",
        "indigo-200": "#98AEEB",
        "indigo-300": "#7B93DB",
        "indigo-400": "#647ACB",
        "indigo-500": "#4C63B6",
        "indigo-600": "#4055A8",
        "indigo-700": "#35469C",
        "indigo-800": "#2D3A8C",
        "indigo-900": "#19216C",
        "pink-050": "#FFE0F0",
        "pink-100": "#FAB8D9",
        "pink-200": "#F191C1",
        "pink-300": "#E668A7",
        "pink-400": "#DA4A91",
        "pink-500": "#C42D78",
        "pink-600": "#AD2167",
        "pink-700": "#9B1B5A",
        "pink-800": "#781244",
        "pink-900": "#5C0B33",
        "red-050": "#FFEEEE",
        "red-100": "#FACDCD",
        "red-200": "#F29B9B",
        "red-300": "#E66A6A",
        "red-400": "#D64545",
        "red-500": "#BA2525",
        "red-600": "#A61B1B",
        "red-700": "#911111",
        "red-800": "#780A0A",
        "red-900": "#610404",
        "yellow-050": "#FFFAEB",
        "yellow-100": "#FCEFC7",
        "yellow-200": "#F8E3A3",
        "yellow-300": "#F9DA8B",
        "yellow-400": "#F7D070",
        "yellow-500": "#E9B949",
        "yellow-600": "#C99A2E",
        "yellow-700": "#A27C1A",
        "yellow-800": "#7C5E10",
        "yellow-900": "#513C06"
      },
    },

  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ]
}