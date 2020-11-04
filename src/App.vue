<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    
  </v-app>
</template>

<script>

import Navbar from "./components/Navbar";
// import Footer from "./components/Footer"

export default {
  name: "App",

  components: {
    Navbar,
    // Footer
  },

  data: () => ({
    //
  })
};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600&display=swap');
* {
  font-family: 'Kanit', sans-serif; 
}
</style>
