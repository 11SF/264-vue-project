import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      status: ""
    },
    session_login: ""
  },
  mutations: {
    updata_session() {
      this.session_login = this.$session.get("login_session");
    }
  },
  actions: {},
  modules: {}
});
