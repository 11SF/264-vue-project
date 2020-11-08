<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-card width="1096" class="pa-10" rounded>
        <h3 class="mb-10">กรุณากรอกข้อมูลให้ครบถ้วน</h3>
        <v-divider></v-divider>
        <v-form>
          <p>ข้อมูลส่วนตัว</p>
          <v-row class="py-5">
            <v-col cols="12" sm="6">
              <h5>ชื่อ : {{ $store.state.userData["displayname_th"] }}</h5>
            </v-col>
            <v-col cols="12" sm="6">
              <h5>เลขทะเบียน : {{ $store.state.userData["username"] }}</h5>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="9" align-self="center">
              <h5>สาชาวิชา : {{ $store.state.userData["department"] }}</h5>
            </v-col>
            <v-col cols="12" sm="3">
              <v-select
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="ชั้นปีที่"
                required
              >
              </v-select>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <p>ที่อยู่ที่ติดต่อได้</p>
          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field label="เลขที่" required> </v-text-field>
            </v-col>
            <v-col cols="12" sm="8">
              <v-text-field label="แขวง/ตำบล" required> </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field label="เขต/อำเภอ" required> </v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="จังหวัด" required> </v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="6" sm="6">
              <v-text-field label="โทรศัพท์ติดต่อนักศึกษา" required>
              </v-text-field>
            </v-col>
            <v-col cols="6" sm="6">
              <v-text-field label="โทรศัพท์ติดต่อผู้ปกครอง" required>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field label="ชื่ออาจารย์ที่ปรึกษา" required>
              </v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <p>ประสงค์จะลงทะเบียนในรายวิชา</p>
          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field label="รหัสวิชา"> required</v-text-field>
            </v-col>
            <v-col cols="12" sm="8">
              <v-text-field label="Section"> required</v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field label="ชื่อวิชา"> required</v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12">
              <v-textarea
              label="เหตุผลที่ยื่นคำร้อง"
              >

              </v-textarea>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-btn color="green" dark>ยืนยันข้อมูล</v-btn>
          </v-row>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  }
};
</script>
    name: "EnrollForm"
<style>
</style>