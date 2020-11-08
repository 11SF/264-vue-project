<template>
  <div>
    <v-row justify="center" align-content="center">
      <v-col>
        <v-sheet
          rounded
          elevation="4"
          width="100%"
          max-width="1080px"
          class="pa-10 mx-auto"
        >
          <h1 class="mx-12">ข้อมูลส่วนตัว</h1>
          <v-divider insert></v-divider>
          <v-row justify="center" align-content="center">
            <v-col>
              <v-icon size="200" color="yellow darken-2"
                >mdi-account-circle</v-icon
              >
            </v-col>
            <v-col align-self="center">
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
      </v-col>
    </v-row>
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

<style>
.avatar {
  border-radius: 100%;
  background: yellow;
  /* max-width: 30px; */
  width: 150px;
  height: 150px;
}
</style>
