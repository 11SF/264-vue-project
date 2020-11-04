import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"
import Profile from "../views/Profile.vue"
import Enroll from "../views/RegisSubject.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: (to, from, next) => {
      if(to.params.status == true && to.params.username) {
        next()
      } else {
        next({ name: "Home"})
      }
    }
  },
  {
    path: "/enroll",
    name: "Enroll",
    component: Enroll,
    beforeEnter: (to, from, next) => {
      if(to.params.status == true && to.params.username) {
        next()
      } else {
        next({ name: "Home"})
      }
    }
  }
    

  

];

const router = new VueRouter({
  routes
});

export default router;
