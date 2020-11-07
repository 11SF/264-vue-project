<template>
  <v-app-bar
      color="dark"
      dark
    >
      <v-app-bar-nav-icon @click="toggle"></v-app-bar-nav-icon>

      <v-toolbar-title>ระบบลงทะเบียนเรียนล้าช้า</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text v-if="$store.state.session_login['status'] == true" >คุณ {{ $store.state.userData['displayname_th'] }}</v-text>
    </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  components: {
  },
  props: ["onClickToggle","test1"],
  methods: {
    toggle() {
      this.$emit("onClickToggle")
    }
  },
  mounted: {},
  watch: {}
};
</script>

<style>
#navbar {
  padding: 20;
}
#navbar a {
  color: #2c3e50;
}

#navbar a.router-link-exact-active {
  color: #42b983;
}
</style>
