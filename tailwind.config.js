/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          // এখানে আপনার কাস্টম কালার যোগ করুন
          'primary': '#3a86ff',      // নীল
          'secondary': '#8338ec',   // বেগুনি
          'accent': '#ff006e',      // গোলাপি
          'dark': '#1e293b',       // গাঢ় নীল
          'light': '#f8fafc',      // হালকা সাদা
        },
      },
    },
    plugins: [],
  }