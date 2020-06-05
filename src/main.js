// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require("~/main.css");

const i18nConfig = require("~/i18n/i18n.json");

import DefaultLayout from "~/layouts/Default.vue";
import VueI18n from "vue-i18n";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  library.add(faUserSecret);
  Vue.component("font-awesome-icon", FontAwesomeIcon);
  Vue.config.productionTip = false;

  Vue.use(VueI18n);

  appOptions.i18n = new VueI18n({
    locale: "ja",
    messages: i18nConfig,
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://use.typekit.net/qxv3yvd.css",
  });

  /* Typekit Javascript API for Source Han Sans */
  if (typeof document !== "undefined") {
    var config = {
      kitId: "lhe7nha",
      scriptTimeout: 3000,
      async: true,
    };

    var d = document;
    var h = d.documentElement;
    var tk = d.createElement("script");
    var f = false;
    var s = d.getElementsByTagName("script")[0];
    var a;
    h.className += " wf-loading";
    tk.src = "https://use.typekit.net/" + config.kitId + ".js";
    tk.async = true;
    tk.onload = tk.onreadystatechange = function() {
      a = this.readyState;
      if (f || (a && a != "complete" && a != "loaded")) return;
      f = true;
      try {
        Typekit.load(config);
      } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s);
  }
}
