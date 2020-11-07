<template>
  <v-app>
      <Navbar @onClickToggle="toggle"/>
      <router-view />  
      <v-container class="fill-height">
        <NavigationDrawer :onClickToggle="drawer"/>  
      </v-container>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import NavigationDrawer from "./components/NavigationDrawer"

export default {
  name: "App",

  components: {
    Navbar,
    NavigationDrawer
    // Footer
  },
  data() {
    return {
      drawer: null,
    };
  },
  methods: {
    toggle() {
      if(this.drawer == true)
        this.drawer = !this.drawer
      this.drawer = !this.drawer
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
