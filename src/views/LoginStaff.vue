<template>
  <v-div>
    <v-row justify="center">
      <v-card max-width="700" class="ma-10 py-2 px-12">
        <v-card-title>Login</v-card-title>
        <v-text-field label="Username" v-model="username"> </v-text-field>
        <v-text-field label="Password" v-model="password"> </v-text-field>
        <v-alert
          color="red"
          icon="mdi-alert-circle"
          type="warning"
          v-if="$store.state.userData['status'] == 'FALSE'"
        >
          โปรดลองใหม่
        </v-alert>
        <v-btn @click="authAPI()">เข้าสู่ระบบ</v-btn>
      </v-card>
    </v-row>
  </v-div>
</template>

<script>
// import axios from "axios";
export default {
  name: "LoginStaff",
  data() {
    return {
      username: "",
      password: "",
      advisorMockup: {
        status: true,
        displayname_th: "ผู้ช่วยศาสตราจารย์ ดร. ทรงศักดิ์ รองวิริยะพานิช",
        type: "employee",
      },
      staffMockup: {
        status: true,
        displayname_th: "พี่ริน",
        type: "staff",
      },
    };
  },
  methods: {
    async authAPI() {
      //   this.inprocess = true;
      //   let userData = await axios.post(
      //     "https://cs264-backend-project.herokuapp.com/api/user/identify",
      //     this.login_data
      //   );
      //   this.inprocess = false;
      //   console.log(userData.data);
      if (this.username == "admin" && this.password == "admin") {
        this.$store.state.userData = this.advisorMockup;
      } else if (this.username == "admin" && this.password == "staff") {
        this.$store.state.userData = this.staffMockup;
      } else {
        this.$store.state.userData["status"] = "FALSE";
      }

      if (this.$store.state.userData["status"] == true) {
        this.$router.push("/");
        let data = {
          username: this.$store.state.userData["displayname_th"],
          status: this.$store.state.userData["status"],
          type: this.$store.state.userData["type"],
        };
        this.$session.set("login_session", data);
        this.$store.state.session_login = this.$session.get("login_session");
      }
    },
  },
};
</script>

<style>
</style>