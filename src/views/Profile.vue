<template>
  <div class="container">
    <div class="jumbotron jumbotron-field">
      <h1 class="display-4">{{ user["displayname_th"] }}</h1>
      <h3 class="display-6">{{ user["displayname_en"] }}</h3>
      <p class="">สถานะ : {{ user["tu_status"] }}</p>
      <p>สาขา : {{ user["department"] }}</p>
      <p>คณะ : {{ user["faculty"] }}</p>
    </div>
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

<style></style>
