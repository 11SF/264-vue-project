<template>
  <!-- <v-app-bar color="indigo" dense absolute dark>
    <div class="d-flex ">
      <v-toolbar-title class="mr-5">ระบบลงทะเบียนล้าช้า</v-toolbar-title>
    </div>

    <div>
      <v-btn @click.stop="toggle" color="indigo" class="mr-5">หน้าแรก</v-btn>
    </div>
    <div v-if="$store.state.session_login['status'] == true">
      <v-btn @click="goHome" color="indigo" class="mr-5">ลงทะเบียนเรียน</v-btn>
    </div>
    <div v-if="$store.state.session_login['status'] == true">
      <v-btn @click="goHome" color="indigo" class="mr-5">ตรวจสอบสถานะดำเนินการ</v-btn>
    </div>
      
      

    <v-spacer></v-spacer>

    <div v-if="$store.state.session_login['status'] == true">
      <v-text>
        คุณ {{ $store.state.userData['displayname_th'] }}
      </v-text>
      <v-btn icon>
        <v-menu 
        left bottom
        offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="goProfile">
              <v-icon class="mr-2">mdi-card-account-details-outline</v-icon>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item >
              <v-list-item-title>comming soon</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item @click="logOut">
              <v-icon class="mr-2">mdi-logout</v-icon>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </div>
    <div v-else>
      <v-text>
        Login
      </v-text>
      <v-btn icon @click="goLogin">
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </div>
  </v-app-bar> -->
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
// import NavigationDrawer from "../components/NavigationDrawer"
export default {
  name: "Navbar",
  components: {
    // NavigationDrawer
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
