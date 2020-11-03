<template>
  <div class="wrapper">
    <form class="form-signin mx-auto" action="/auth/login" method="GET">
      <h4 class="form-signin-heading text-center">
        เข้าสู่ระบบ (นักศึกษา/บุคลากร)
      </h4>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          name="username"
          id="username"
          aria-describedby="helpId"
          placeholder="เลขทะเบียนนักศึกษา/รหัสผู้ใช้"
          v-model="login_data['username']"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          name="password"
          id="password"
          aria-describedby="helpId"
          placeholder="รหัสผ่าน"
          v-model="login_data['password']"
        />
      </div>
      <div class="alert alert-danger" role="alert" v-if='user_data["status"] == "FALSE"'>
        {{ user_data["message"] }}
    	</div>
      <button type="button" class="btn btn-primary btn-block" @click="authAPI">
        เข้าสู่ระบบ
      </button>
      <p class="text-right">@CSTU</p>
	  <div class="alert alert-primary" role="alert" v-if='user_data["status"] == true'>
        {{ user_data["message"] }}
    	</div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      login_data: {
        username: "",
        password: ""
      },
      user_data: {
		  status: ""
	  }
    };
  },
  methods: {
    async authAPI() {
	//   await axios.post("http://localhost:5000/api/getUser", this.login_data);
	  let userData = await axios.post("https://cs264-backend-project.herokuapp.com/api/getUser", this.login_data);
    //   let userData = await axios.get("http://localhost:5000/api/getUser",this.login_data);
      console.log(userData.data);
      this.user_data = userData.data;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400&display=swap");

template {
  background: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
.wrapper {
  margin: 80px;
}
.form-signin {
  width: 400px;
  max-width: 100%;
  background-color: #ffffff;
  padding: 15px 40px 50px;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.form-signin .form-signin-heading {
  margin-bottom: 40px;
  margin-top: 20px;
}
#password {
  margin-bottom: 30px;
}
p {
  font-weight: 400;
  font-size: 12px;
}
</style>