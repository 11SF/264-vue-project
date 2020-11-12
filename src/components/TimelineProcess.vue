<template>
  <v-container class="mt-6">
    <h1 class="text-center">ขั้นตอนในการลงทะเบียน</h1>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item color="red lighten-1" fill-dot left small>
        <v-card>
          <v-card-title class="red lighten-1 justify-end">
            <h2 class="display-1 mr-4 white--text font-weight-light">
              เข้าสู่ระบบ
            </h2>
            <v-icon dark size="42">
              mdi-account-multiple-outline
            </v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col class="hidden-sm-and-down" md="2">
                <v-icon size="64">
                  mdi-server-network
                </v-icon>
              </v-col>
              <v-col cols="12" md="10">
                เข้าสู่ระบบด้วยบัญชีผู้ใช้ของมหาลัยธรรมศาสตร์
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="purple lighten-2" fill-dot right>
        <v-card>
          <v-card-title class="purple lighten-2">
            <v-icon dark size="42" class="mr-4">
              mdi-magnify
            </v-icon>
            <h2 class="display-1 white--text font-weight-light">
              เพิ่มรายวิชาที่ต้องการลงทะเบียน
            </h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="10">
                เพิ่มรายวิชาและกรอกข้อมูลในแบบฟอร์มให้ครบถ้วนและถูกต้องจากนั้นกดยืนยัน
              </v-col>
              <v-col class="hidden-sm-and-down text-right" md="2">
                <v-icon size="64">
                  mdi-calendar-text
                </v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="amber lighten-1" fill-dot left small>
        <v-card>
          <v-card-title class="amber lighten-1 justify-end">
            <h2 class="display-1 mr-4 white--text font-weight-light">
              รออนุมัติจากผู้ที่เกี่ยวข้อง
            </h2>
            <v-icon dark size="42">
              mdi-home-outline
            </v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="12">
                รออนุมัติจากอาจารย์ที่ปรึกษา เจ้าหน้าที่โครงการ อาจารย์ผู้สอน และ คณบดี
              </v-col>
              
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="amber lighten-2" fill-dot right>
        <v-card>
          <v-card-title class="amber lighten-2 justify-end">
            <h2 class="display-1 mr-4 white--text font-weight-light">
              ชำระเงิน
            </h2>
            <v-icon dark size="42">
              mdi-home-outline
            </v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="12">
                ชำระเงินผ่านระบบของธนาคาร
              </v-col>
              
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: "TimelineProcess",
  data() {
    return {};
  }
};
</script>

<style>
</style>