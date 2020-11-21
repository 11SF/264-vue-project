<template >
  <div class="lg ml-0 mr-0 pa-0">
    <div class="login">
      <v-card
        max-width="600"
        class="pa-8 mx-auto login_box"
        elevation="10"
        shaped
      >
        <h1>เข้าสู่ระบบ (นักศึกษา/บุคคลากร)</h1>
        <v-container class="pa-10">
          <v-form>
            <v-text-field
              label="Username"
              v-model="login_data['username']"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              v-model="login_data['password']"
              required
            ></v-text-field>
            <v-alert
              color="red"
              icon="mdi-alert-circle"
              type="warning"
              v-if="$store.state.userData['status'] == 'FALSE'"
            >
              {{ $store.state.userData["message"] }}
            </v-alert>
            <v-btn
              block
              color="primary"
              class="mt-4"
              :loading="loading"
              :disabled="loading"
              @click="authAPI()"
            >
              <Loading v-if="inprocess == true" />
              เข้าสู่ระบบ</v-btn
            >
          </v-form>
        </v-container>
      </v-card>
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
  },
  watch: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400&display=swap");

.lg {
  margin-top: -64px;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}
.login {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  background-image: url(https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
  width: 100%;
  height: 100%;
  font-family: "Kanit", sans-serif;
  letter-spacing: 0.02rem;
  font-weight: 400;
}
.login_box {
  margin-top: 230px;
}
</style>
