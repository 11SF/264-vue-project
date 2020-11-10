<template>
  <v-app>
    <Navbar @onClickToggle="toggle" />

    <router-view />

    <v-container class="fill-height">
      <NavigationDrawer :onClickToggle="drawer" @resetToggle="reset" />
    </v-container>
    <!-- <v-content>
      
    </v-content> -->
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import NavigationDrawer from "./components/NavigationDrawer";

export default {
  name: "App",

  components: {
    Navbar,
    NavigationDrawer
    // Footer
  },
  data() {
    return {
      drawer: false,
      couter: 0
    };
  },
  methods: {
    toggle() {
      this.drawer = !this.drawer;
    },
    reset() {
      this.drawer = false;
    }
  }
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600&display=swap");
* {
  font-family: "Kanit", sans-serif;
}
</style>
