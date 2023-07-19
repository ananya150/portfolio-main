/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dev-bg': "url('/dev.jpg')",
        'extra': "url('/bg-1.jpg')"
      },
      fontFamily: {
        'satoshi' : ['Satoshi', 'sans-serif'],
        'author' : ['Author', 'sans-serif'],
        'alpino': ['Alpino', 'sans-serif'],
      }
    },
  },
  plugins: [
    // ...
    function ({ addUtilities }) {
      addUtilities(
        {
          ".custom-clip-path1": {
            clipPath: "circle(250vh at 50% -120vh)",
          },
          ".custom-clip-path2": {
            clipPath: "circle(330vh at 50% -155vh)",
          },
          ".custom-clip-path3": {
            clipPath: "circle(350vh at 50% -105vh)",
          },
          ".about-tagline1": {
            fontSize: "calc(0.5em + 5vw)",
          }
        },
        {
          variants: ["responsive"],
        }
      );
    },
  ],

}
