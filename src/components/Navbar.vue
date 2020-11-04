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
          <router-link to="/" class="nav-link">หน้าแรก</router-link>
        </li>
        <li class="nav-item ">
          <a  class="nav-link" href="#" v-if="$store.state.session_login['status'] == true" @click="goEnroll">ดำเนินการลงทะเบียน</a>
        </li>
        <li class="nav-item ">
          <p>{{ data }}</p>
        </li>
      </ul>
      <ul class="navbar-nav  my-2 my-lg-0" >
        <div>
          <router-link to="/login" class="nav-link" v-if="!$store.state.session_login['status'] == true"
          >Login</router-link>
          <li class="nav-item dropdown" v-else> 
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              คุณ {{ $store.state.userData['displayname_th'] }}
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <!-- <router-link to="/profile" class="dropdown-item">Profile</router-link> -->
                <a class="dropdown-item" href="#" @click="goProfile">Profile</a>
                <a class="dropdown-item" href="#">#TEST#</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" @click="logOut">Logout</a>
              </div>
            </a>      
          </li>
        <!-- <router-link to="/" class="nav-link" v-else @click="logOut">Logout</router-link> -->
        </div>

      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      
    };
  },
  methods: {
    logOut() {
      this.$session.clear('login_session')
      this.$store.state.session_login = ""
      this.$store.state.userData = ""
      this.$router.push("Home")
    },
    goProfile() {
      this.$router.push({
        name: "Profile",
        params: {
          status: this.$store.state.session_login['status'],
          username: this.$store.state.session_login['username']
        }
      })
    },
    goEnroll() {
      this.$router.push({
        name: "Enroll",
        params: {
          status: this.$store.state.session_login['status'],
          username: this.$store.state.session_login['username'],
          // on_time: //เช็คเวลาเปิดให้ลงทะเบียนกับ backend
        }
      })
    }
  },
  mounted: {
     
  },
  watch: {

  }
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