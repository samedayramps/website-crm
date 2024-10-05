/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#4192CF', // Updated blue color
          'primary-foreground': '#ffffff', // Keep the same or update if needed
          secondary: '#EAFD2A', // Updated yellow color
          'secondary-foreground': '#222222', // Keep the same or update if needed
          input: 'hsl(214.3, 31.8%, 91.4%)', // Keep the same or update if needed
        },
        transitionDuration: {
          '1000': '1000ms',
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }