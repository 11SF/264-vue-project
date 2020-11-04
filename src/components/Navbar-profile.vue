<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
    <a class="navbar-brand">ระบบยื่นคำร้องจดทะเบียนล้าช้า</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item ">
          <router-link to="/about" class="nav-link ">Contact us</router-link>
        </li>
        <li class="nav-item ">
          <p>{{ data }}</p>
        </li>
      </ul>
      <ul class="form-inline my-2 my-lg-0">
        <router-link to="/login" class="nav-link" v-if="!isLog"
          >Login</router-link
        >
        <router-link to="/login" class="nav-link" v-else>Logout</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      session: this.$store.state.session_login,
      islog: false
    };
  },
}
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