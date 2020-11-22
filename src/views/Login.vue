<template>
  <div class="container">
    <div class="login-wrapper">
      <form>
        <div class="form-group">
          <h3>เข้าสู่ระบบ (นักศึกษา/บุคคลากร)</h3>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">รหัสนักศึกษา / รหัสผู้ใช้</label>
          <input
            type="text"
            class="form-control"
            v-model="login_data['username']"
          />
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">รหัสผ่าน</label>
          <input
            type="password"
            class="form-control"
            v-model="login_data['password']"
          />
        </div>
        <v-alert
          color="red"
          icon="mdi-alert-circle"
          type="warning"
          v-if="$store.state.userData['status'] == 'FALSE'"
        >
          {{ $store.state.userData["message"] }}
        </v-alert>
        <div class="form-group submit-area">
          <a @click="goLoginStaff()">เข้าสู่ระบบสำหรับเจ้าหน้าที่โครงการ</a>
        </div>
        <button class="btn btn-primary text-light btn-block" @click="authAPI()">
          <Loading v-if="inprocess == true" />
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loading from "../components/Loading";

export default {
  name: "Login",
  data() {
    return {
      login_data: {
        username: "",
        password: "",
      },
      user_data: this.$store.state.session_login,
      inprocess: false,
    };
  },
  components: {
    Loading,
  },

  methods: {
    async authAPI() {
      this.inprocess = true;
      let userData = await axios.post(
        "https://cs264-backend-project.herokuapp.com/api/user/identify",
        this.login_data
      );
      this.inprocess = false;
      console.log(userData.data);
      this.$store.state.userData = userData.data;

      if (
        this.$store.state.userData["status"] == true &&
        this.$store.state.userData["type"] == "student"
      ) {
        this.$router.push("/");
        let data = {
          username: this.$store.state.userData["username"],
          status: this.$store.state.userData["status"],
          type: this.$store.state.userData["type"],
        };
        this.$session.set("login_session", data);
        this.$store.state.session_login = this.$session.get("login_session");
      } else if (
        this.$store.state.userData["status"] == true &&
        this.$store.state.userData["type"] == "employee"
      ) {
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
    reloadApp() {
      this.vm.$forceUpdate();
    },
    goLoginStaff() {
      this.$router.push("/login/staff");
    },
  },
  watch: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400&display=swap");
.container {
  background-image: url("https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1521&q=80");
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 110%;
  display: flex;
  max-width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 0;
  padding: 0px;
}
.login-wrapper {
  display: flex;
  align-items: center;
  max-width: 620px;
  height: 450px;
  border-radius: 20px;
  background-color: whitesmoke;
  border: none;
  box-sizing: border-box;
  box-shadow: 6px 5px 19px -7px rgba(0, 0, 0, 0.38);
  -webkit-box-shadow: 6px 5px 19px -7px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 6px 5px 19px -7px rgba(0, 0, 0, 0.38);
  padding: 40px 120px;
}
.login-wrapper h1 {
  text-align: center;
}
.form-group {
  margin-bottom: 20px;
}
.submit-area {
  display: flex;
  justify-content: flex-end;
}
</style>
