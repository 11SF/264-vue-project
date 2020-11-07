<template>
  <div class="container">
    <v-row class="ma-3">
      <h1>ลงทะเบียน</h1>
    </v-row>
    <v-row class="mx-auto" justify="center">
      <div class="area">
        <v-row justify="end" class="ma-5">
          <v-dialog v-model="dialog" width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                เพิ่มรายวิชา
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="mb-10">
                <span class="headline">ข้อกำหนดในการลงทะเบียนล้าช้า</span>
              </v-card-title>
              <v-card-text>
                <h5 v-for="rule in enrollRules" :key="rule">
                  {{ rule }}
                </h5>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" text @click="dialog = false">
                  Disagree
                </v-btn>
                <v-btn
                  color="green darken-1"
                  text
                  @click="(dialog = false), goEnrollForm(), (agree = true)"
                >
                  Agree
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
        <v-row justify="center">
          <v-sheet
            width="95.7%"
            height="600"
            rounded
            color="gray darken-2"
            elevation="10"
            class="pa-5"
          >
            <v-expansion-panels>
              <v-expansion-panel v-for="form in forms" :key="form">
                <v-expansion-panel-header disable-icon-rotate>
                  <h6>{{ form.subject_info.subject_name }}</h6>
                  <p>Seccion : {{ form.subject_info.section }}</p>
                  <template v-slot:actions>
                    <v-icon color="teal" v-if="form.form_status == true">
                      mdi-check
                    </v-icon>
                    <v-icon color="blue" v-else-if="form.form_status == false">
                      mdi-vanish
                    </v-icon>
                    <!-- <v-icon color="error" v-if="">
                      mdi-alert-circle
                    </v-icon> -->
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-btn color="blue" dark @click="updateShow">
                    ตรวจสอบสถานะ
                  </v-btn>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <TimelineEvent sheet="show" form_data="form" />
            </v-expansion-panels>
          </v-sheet>
        </v-row>
      </div>
    </v-row>
  </div>
</template>

<script>
import TimelineEvent from "../components/Timeline.vue";
const axios = require("axios");

export default {
  name: "RegisSubject",
  data() {
    return {
      forms: [],
      enrollRules: "",
      agree: false,
      show: false
    };
  },
  methods: {
    async fetchData() {
      const res = await axios.get(
        "https://cs264-backend-project.herokuapp.com/api/enroll/getEnrollForm",
        {
          params: {
            select: 1,
            student_id: this.$store.state.userData["username"]
          }
        }
      );
      this.forms = res.data;
    },
    async fetchEnrollRule() {
      const res = await axios.get(
        "https://cs264-backend-project.herokuapp.com/api/enroll/getEnrollRule"
      );
      this.enrollRules = res.data.data;
    },
    goEnrollForm() {
      this.$router.push({
        name: "EnrollForm",
        params: {
          status: this.$store.state.session_login["status"],
          username: this.$store.state.session_login["username"],
          agree: this.agree
        }
      });
    },
    updateShow() {
      this.show = !this.show
    }
  },
  mounted() {
    this.fetchData();
    this.fetchEnrollRule();
  },
  components: {
    TimelineEvent
  }
};
</script>

<style>
.area {
  width: 1400px;
  height: 400px;
}
</style>
