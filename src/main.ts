import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueCookies from "vue-cookies";
import "./assets/tailwind.css";

createApp(App).use(router).use(require("vue-cookies")).mount("#app");
