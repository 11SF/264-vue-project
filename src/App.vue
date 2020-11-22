<template>
  <v-app>
    <Navbar />
    <v-content class="content">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
// import Navbar from "./components/Navbar";
import Navbar from './components/Navbar.vue';
// import NavigationDrawer from "./components/NavigationDrawer";

export default {
  name: "App",

  components: {
    Navbar
    // NavigationDrawer,
    // Footer
  },
  data() {
    return {
      drawer: false,
      couter: 0,
    };
  },
  methods: {
    toggle() {
      this.drawer = !this.drawer;
    },
    reset() {
      this.drawer = false;
    },
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600&display=swap");
* {
  font-family: "Kanit", sans-serif;
}
.content {
  margin: 55px 0 0 0;
}
</style>
