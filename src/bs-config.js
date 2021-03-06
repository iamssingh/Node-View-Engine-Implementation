module.exports = {
    proxy: "localhost:5000",
    files: ["**/*.css", "**/*.pug", "**/*.hbs", "**/*.ejs", "**/*.js"],
    ignore: ["node_modules"],
    reloadDelay: 10,
    ui: false,
    notify: false,
    port: 3000,
  };