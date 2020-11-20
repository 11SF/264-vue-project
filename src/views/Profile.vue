<template>
  <div class="container">
    <!-- <v-row justify="center" align-content="center"> -->
      
        <v-sheet
          rounded
          elevation="4"
          
          class="pa-12 ml-12 my-12"
        >
        <v-col cols="12" sm="12">
          <h1 >ข้อมูลส่วนตัว</h1>
        </v-col>
          
          <v-divider insert></v-divider>
          <v-row justify="center" align-content="center">
            <v-col cols="12" sm="6">
              <v-icon size="200" color="yellow darken-2" 
                >mdi-account-circle</v-icon
              >
            </v-col>
            <v-col align-self="center" cols="12" sm="6">
              <h3>{{ user["displayname_th"] }}</h3>
              <h5>{{ user["displayname_en"] }}</h5>
              <h5>{{ user["username"] }}</h5>
            </v-col>
          </v-row>
          <v-divider insert></v-divider>

          <v-row align-content="center">
            <v-col align-self="center">
              <p>Email : {{ user["email"] }}</p>
            </v-col>
            <v-col align-self="center">
              <p>สถานะ : {{ user["tu_status"] }}</p>
            </v-col>
          </v-row>

          <v-row class="" align-content="center">
            <v-col align-self="center">
              <p>สาขา : {{ user["department"] }}</p>
            </v-col>
            <v-col align-self="center">
              <p>คณะ : {{ user["faculty"] }}</p>
            </v-col>
          </v-row>
        </v-sheet>
     
    <!-- </v-row> -->
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      user: this.$store.state.userData
    };
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 100%;
  background: yellow;
  /* max-width: 30px; */
  width: 150px;
  height: 150px;
}
.container {
  width: 1200px;
  margin: 0 auto;

}
</style>
