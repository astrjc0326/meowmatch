const plugin = require('tailwindcss/plugin');
module.exports = {
  theme: {
    plugins: [
      plugin(({ addUtilities }) => {
        addUtilities({
          '.btntxt': {
            width: "100%",
            fontWeight: "600",
            textAlign: "center",
            borderRadius: 30,
            marginVertical: 15,
          }
        });
      }),
    ],
    extend: {
      colors: {
        primary: '#e9f5f5',
        secondary: '#e8e5e5',
        themecolor: '#c9eded',
        titlecolor:'#b0c5c5'
        // Add more custom colors as needed
      },
    },
  },
};
