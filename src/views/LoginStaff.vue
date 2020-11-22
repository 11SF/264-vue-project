<template>
  <div class="container">
    <div class="login-wrapper">
      <form>
        <div class="form-group">
          <h3>เข้าสู่ระบบ (เจ้าหน้าที่โครงการ)</h3>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">รหัสผู้ใช้</label>
          <input
            type="text"
            class="form-control"
            v-model="username"
          />
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">รหัสผ่าน</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
          />
        </div>
        <v-alert
          color="red"
          icon="mdi-alert-circle"
          type="warning"
          v-if="$store.state.userData['status'] == 'FALSE'"
        >
          หรัสผู้ใช้ / รหัสผ่าน ไม่ถูกต้อง
        </v-alert>
        <div class="form-group submit-area">
          <a @click="goLogin()">เข้าสู่ระบบสำหรับผู้ใช้ทั่วไป</a>
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
    goLogin() {
      this.$router.push('/login')
    }
  },
};
</script>

<style scoped>
.container {
  background-image: url("https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-repeat: no-repeat;
  background-position: center;
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