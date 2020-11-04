import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAxios from "vue-axios";
import axios from "axios";
import VueSessionStorage from "vue-sessionstorage";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueSessionStorage);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
