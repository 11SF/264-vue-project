<template>
  <v-card width="1096" class="pa-10" rounded>
    <h3 class="mb-10">ส่วนสำหรับ{{ title }}</h3>
    <v-divider></v-divider>
    <p>ยืนยันแบบฟอร์ม</p>
    <v-form>
      <v-row>
        <v-col cols="12" sm="12">
          <v-text-field label="ชื่อ-สกุล"></v-text-field>
        </v-col>
        <!-- <v-col cols="12" sm="4">
              <v-select
                v-model="approve"
                :items="items"
                :rules="itemRequest"
                label="อนุมัติ/ไม่อนุมัติ"
                required
              >
              </v-select>
            </v-col> -->
        <v-col cols="12" sm="12">
          <v-textarea> </v-textarea>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "AcceptionArea",
  data() {
    return {};
  },
  props: ["title", "data"],
};
</script>

<style>
</style>