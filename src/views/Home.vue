<template>
  <div class="home">
    <v-parallax
      class="pa-0"
      height="700"
      src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      gradient="to right left, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    >
      
        <v-row align-content="center" justify="end">
          
          <v-col cols="12" sm="6">
            <h1 class="text-center">ยินดีต้อนรับ</h1>
            <v-divider dark insert></v-divider>
            <h4 class="text-center">
              สามารถดำเนินการลงทะเบียนล้าช้าได้ตั้งแต่วันที่ 07/11/2563
              ถึงวันที่ 31/12/2563
            </h4>
            <v-row justify="center" class="mt-12">
              <v-btn
                depressed
                elevation="2"
                x-large
                rounded
                dark
                color="green"
                v-if="$store.state.session_login['status'] != true"
                @click="
                  () => {
                    this.$router.push({ name: 'Login' });
                  }
                "
                >เข้าสู่ระบบ</v-btn
              >
            </v-row>
          </v-col>
        </v-row>
      
    </v-parallax>
    <div class="container-content">
      <TimelineProcess />
    </div>
  </div>
</template>

<script>
import TimelineProcess from "../components/TimelineProcess";

export default {
  name: "Home",
  components: {
    TimelineProcess,
  },
};
</script>

<style  scoped>
.container-content {
  max-width: 960px;
  margin: 0 auto;
}
</style>