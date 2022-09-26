import Vue from "vue";
import App from "@/App.vue";
import router from "./router";
import VueRouter from "vue-router";
import vuetify from "@/plugins/vuetify";
import { store } from "@/plugins/vuex";

Vue.use(VueRouter);

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
