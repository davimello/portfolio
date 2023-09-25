module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('src/assets/img/profile.webp')",
      },
      boxShadow: {
        contact: "0 -32px 50px -10px rgb(0 0 0 / 0.2)",
      },
    },
  },
};
