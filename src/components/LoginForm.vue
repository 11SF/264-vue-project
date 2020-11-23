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
          v-model="username"
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
          v-model="password"
        />
      </div>
      <button
        type="button"
        class="btn btn-primary btn-block"
        @click="push_api_tu()"
      >
        เข้าสู่ระบบ
      </button>
      <p class="text-right">@CSTU</p>
      <p>{{ username }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
      user_data: Array
    };
  },
  methods: {
    push_api_tu() {
      this.$emit("usrAndpws", this.username, this.password);
    }
  }
};
</script>

<style>
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
