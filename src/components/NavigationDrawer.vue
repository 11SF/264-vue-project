<template>
  <v-navigation-drawer v-model="onClickToggle" absolute temporary>
    <v-list-item v-if="$store.state.session_login['status'] == true">
      <v-list-item-avatar>
        <!-- <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img> -->
        <v-icon size="40" color="blue">mdi-account-circle</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{ $store.state.userData['displayname_th'] }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider v-if="$store.state.session_login['status'] == true" ></v-divider>

    <v-list dense>
      <v-list-item v-for="item in menu_items()" :key="item.title" link @click="item.link()">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  props: ["onClickToggle"],
  data() {
    return {
      items_guest: [
        { title: "หน้าแรก", icon: "mdi-view-dashboard", link: this.goHome },
        { title: "เข้าสู่ระบบ", icon: "mdi-image", link: this.goLogin}
      ],
      items_student: [
        { title: "หน้าแรก", icon: "mdi-view-dashboard", link: this.goHome },
        { title: "ข้อมูลส่วนตัว", icon: "mdi-image", link: this.goProfile },
        { title: "ดำเนินการลงทะเบียนล้าช้า", icon: "mdi-image", link: this.goEnroll },
        { title: "ออกจากระบบ", icon: "mdi-image", link: this.logOut }
      ],
      test : true
    };
  },
  methods: {
    menu_items() {
      if (this.$store.state.session_login["status"] == true) {
        return this.items_student;
      } else {
        return this.items_guest;
      }
    },
    logOut() {
      this.$session.clear("login_session");
      this.$store.state.session_login = "";
      this.$store.state.userData = "";
      this.$router.push("/");
    },
    goProfile() {
      this.session_update();
      this.$router.push({
        name: "Profile",
        params: {
          status: this.$store.state.session_login["status"],
          username: this.$store.state.session_login["username"]
        }
      });
    },
    goEnroll() {
      this.session_update();
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
        name: "Login"
      });
    },
    goHome() {
      this.$router.push({
        name: "Home"
      });
    },
    session_update() {
      let test = this.$session.get("login_session");
      if (test["status"] == true) {
        this.$store.state.session_login = this.$session.get("login_session");
      } else {
        this.logOut();
        this.vm.$forceUpdate();
        
      }
    },
  }
};
</script>

<style>
</style>

