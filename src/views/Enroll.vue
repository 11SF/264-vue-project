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
              <loading v-if="forms == ''" />
              <v-expansion-panel v-for="form in forms" :key="form">
                <v-expansion-panel-header disable-icon-rotate>
                  <v-row>
                    <v-col>
                      <h6>{{ form.subject_info.subject_name }}</h6>
                      <p>ผู้สอน : อาจารย์{{ form.subject_info.teacher_name }}</p>
                    </v-col>
                    <v-col>
                      <p>รหัสวิชา : {{ form.subject_info.subject_id }}</p>
                      <p>Seccion : {{ form.subject_info.section }}</p>
                       
                    </v-col>
                  </v-row>
                  <template v-slot:actions>
                    <v-icon color="teal" v-if="alertIcon(form) == 'success' ">
                      mdi-check
                    </v-icon>
                    <v-icon
                      color="blue"
                      v-else-if="alertIcon(form) == 'process' "
                    >
                      mdi-vanish
                    </v-icon>
                    <v-icon
                      color="error"
                      v-else-if="alertIcon(form) == 'warning' "
                    >
                      mdi-alert-circle
                    </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="">
                    <v-btn color="green" dark @click="overlay = !overlay">
                      ตรวจสอบสถานะ
                    </v-btn>
                    <v-overlay :value="overlay">
                      <v-card
                        class="pa-6 scroll"
                        shaped
                        height="700"
                        max-width="800"
                        elevation="4"
                        color="grey darken-3"
                        dark
                      >
                        <v-card-title>
                          <v-btn @click="overlay = !overlay" color="dark">
                            X
                          </v-btn>
                        </v-card-title>
                        <timeline-event form_data="form"></timeline-event>
                      </v-card>
                    </v-overlay>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-sheet>
        </v-row>
      </div>
    </v-row>
  </div>
</template>

<script>
import TimelineEvent from "../components/Timeline.vue";
import Loading from "../components/Loading2.vue";
const axios = require("axios");

export default {
  name: "RegisSubject",
  data() {
    return {
      forms: "",
      enrollRules: "",
      agree: false,
      sheet: false,
      overlay: false
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
      if(this.agree == false)
        this.agree = true
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
      this.show = !this.show;
    },
    alertIcon(form) {
      if (form.form_status) {
        return "success";
      } else if (
        form.acception.advisor.accept &&
        !form.acception.advisor.approve
      ) {
        return "warning";
      } else if (form.acception.staff.accept && !form.acception.staff.approve) {
        return "warning";
      } else if (
        form.acception.teacher.accept &&
        !form.acception.teacher.approve
      ) {
        return "warning";
      } else if (form.acception.doyen.accept && !form.acception.doyen.approve) {
        return "warning";
      } else {
        return "process";
      }
    }
  },
  mounted() {
    this.fetchData();
    this.fetchEnrollRule();
  },
  components: {
    TimelineEvent,
    Loading
  }
};
</script>

<style>
.area {
  width: 1400px;
  height: 400px;
}
.scroll {
  overflow-y: scroll;
}
</style>