import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Enroll from "../views/Enroll.vue";
import EnrollForm from "../views/EnrollForm.vue";
import LoginStaff from "../views/LoginStaff.vue";
import ViewForm from "../views/ViewForm.vue";
import ViewProcess from "../views/ViewProcess.vue";
import StaffDashboard from "../views/StaffDashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: (to, from, next) => {
      if (to.params == null || to.params.status == true) {
        next();
      } else next({ name: "Login" });
    },
  },
  {
    path: "/enroll",
    name: "Enroll",
    component: Enroll,
    // beforeEnter: (to, from, next) => {
    //   if (to.params.status == true) {
    //     next();
    //   } else {
    //     next({ name: "Login" });
    //   }
    // },
  },
  {
    path: "/enrollform",
    name: "EnrollForm",
    component: EnrollForm,
    beforeEnter: (to, from, next) => {
      if (to.params.status == true && to.params.agree == true) {
        next();
      } else {
        next({ name: "Enroll" });
      }
    },
  },
  {
    path: "/login/staff",
    name: "Loginstaff",
    component: LoginStaff,
  },
  {
    path: "/viewform",
    name: "ViewForm",
    component: ViewForm,
  },
  {
    path: "/viewprocess",
    name: "ViewProcess",
    component: ViewProcess,
  },
  {
    path: "/staff/dashboard",
    name: "StaffDashboard",
    component: StaffDashboard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
