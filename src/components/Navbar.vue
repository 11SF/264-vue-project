<template>
  <v-app-bar color="indigo" dense absolute dark>
    <div class="d-flex ">
      <v-toolbar-title class="mr-5">ระบบลงทะเบียนล้าช้า</v-toolbar-title>
    </div>

    <div>
      <v-btn @click="goHome" color="indigo" class="mr-5">หน้าแรก</v-btn>
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
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      group: null
    };
  },
  methods: {
    logOut() {
      this.$session.clear("login_session");
      this.$store.state.session_login = "";
      this.$store.state.userData = "";
      this.$router.push("/");
    },
    goProfile() {
      this.session_update()
      this.$router.push({
        name: "Profile",
        params: {
          status: this.$store.state.session_login["status"],
          username: this.$store.state.session_login["username"]
        }
      });
    },
    goEnroll() {
      this.session_update()
      this.$router.push({
        name: "Enroll",
        params: {
          status: this.$store.state.session_login["status"],
          username: this.$store.state.session_login["username"]
          // on_time: //เช็คเวลาเปิดให้ลงทะเบียนกับ backend
        }
      });
    },
    goLogin() {
      this.$router.push({
        name: "Login",
      });
    },
    goHome() {
      this.$router.push({
        name: "Home",
      });
    },
    session_update() {
      let test = this.$session.get("login_session")
      if(test['status'] == true) {
        this.$store.state.session_login = this.$session.get("login_session");  
      } else {
        this.logOut();
        this.vm.$forceUpdate();
      }
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
