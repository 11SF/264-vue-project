<template>
  <v-navigation-drawer absolute permanent expand-on-hover>
    <v-list-item
      v-if="$store.state.session_login['status'] == true"
      class="ml-2 pa-0 pt-2"
    >
      <v-list-item-avatar>
        <v-icon size="40" color="blue">mdi-account-circle</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>
          {{ $store.state.userData["displayname_th"] }}</v-list-item-title
        >
      </v-list-item-content>
    </v-list-item>

    <v-divider v-if="$store.state.session_login['status'] == true"></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in menu_items()"
        :key="item.title"
        link
        @click="item.link()"
      >
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
        { title: "เข้าสู่ระบบ", icon: "mdi-login", link: this.goLogin }
      ],
      items_student: [
        { title: "หน้าแรก", icon: "mdi-view-dashboard", link: this.goHome },
        { title: "ข้อมูลส่วนตัว", icon: "mdi-account-box-multiple", link: this.goProfile },
        {
          title: "ดำเนินการลงทะเบียนล้าช้า",
          icon: "mdi-pencil-plus",
          link: this.goEnroll
        },
        { title: "ออกจากระบบ", icon: "mdi-logout", link: this.logOut }
      ],
      items_employee: [
        { title: "หน้าแรก", icon: "mdi-view-dashboard", link: this.goHome },
        { title: "ข้อมูลส่วนตัว", icon: "mdi-account-box-multiple", link: this.goProfile },
        {
          title: "ตรวจสอบคำร้องการลงทะเบียน",
          icon: "mdi-pencil-plus",
          link: this.goEnroll
        },
        { title: "ออกจากระบบ", icon: "mdi-logout", link: this.logOut }
      ],items_staff: [
        { title: "หน้าแรก", icon: "mdi-view-dashboard", link: this.goHome },
        { title: "ข้อมูลส่วนตัว", icon: "mdi-account-box-multiple", link: this.goProfile },
        {
          title: "ตรวจสอบคำร้องการลงทะเบียน",
          icon: "mdi-pencil-plus",
          link: this.goDashboard
        },
        { title: "ออกจากระบบ", icon: "mdi-logout", link: this.logOut }
      ],
      test: true
    };
  },
  methods: {
    menu_items() {
      if (this.$store.state.session_login["status"] == true && this.$store.state.session_login['type'] == 'student') {
        return this.items_student;
      } else if(this.$store.state.session_login["status"] == true && this.$store.state.session_login['type'] == 'employee') {
        return this.items_employee;
      } else if(this.$store.state.session_login["status"] == true && this.$store.state.session_login['type'] == 'staff') {
        return this.items_staff;
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
    goDashboard() {
      this.$router.push({
        name: "StaffDashboard"
      });
    }
  }
};
</script>

<style>
</style>

