<template>
  <div class="home">
    <v-parallax
      class="pa-0"
      height="700"
      src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      gradient="to right left, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    >
      <v-container>
        <v-row align-content="center" justify="center">
          <v-col></v-col>
          <v-col>
            <h1 class="text-center">ยินดีต้อนรับ</h1>
            <v-divider dark insert></v-divider>
            <h4 class="text-center">ยังไม่ถึงช่วงเวลาการลงทะเบียนล้าช้า</h4>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-container>
      <h1 class="text-center">กำหนดการลงทะเบียน</h1>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
