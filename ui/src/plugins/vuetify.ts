import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import en from "@/lang/en";
import de from "@/lang/de";
import nl from "@/lang/nl";
import hr from "@/lang/hr";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  lang: {
    locales: { en, de, nl, hr },
    current: "en",
  }
});
