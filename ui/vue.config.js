const fs = require("fs");
const packageJson = fs.readFileSync("./package.json");
process.env.VUE_APP_VERSION = JSON.parse(packageJson).version || "0.0.0";

module.exports = {
  transpileDependencies: ["vuetify"]  // Related to: https://github.com/vuetifyjs/vuetify/issues/8279
};
