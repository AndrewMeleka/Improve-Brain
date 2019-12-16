import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./router/routes";
import "bootstrap/dist/css/bootstrap.css";
import store from "./store";

//- setup routing
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
