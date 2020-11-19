<template>
  <v-contaner>
    <v-row justify="center" class="mt-5">
      <v-timeline align-top>
        <v-timeline-item fill-dot>
          <v-alert
            value="true"
            color="success"
            icon="mdi-alert"
            class="white--text"
            dark
          >
            <div>
              <span
                >คำร้องของท่านถูกบันทึกในระบบแล้ว
                โปรดติดตามสถานะการดำเนินการต่อไป.</span
              >
            </div>
            <v-divider></v-divider>
            <div>
              <span>เวลา : {{ form.timestamps }} </span>
            </div>
          </v-alert>
        </v-timeline-item>
        <v-timeline-item fill-dot>
          <v-alert
            value="true"
            color="gray"
            icon="mdi-alert"
            class="white--text elevation-2"
          >
            <div class="white">
              <span>ขออนุมัติจากผู้เกี่ยวข้อง.</span>
            </div>
          </v-alert>
        </v-timeline-item>
        <v-timeline-item v-if="form.acception.advisor.accept">
          <v-card color="purple darken-1" dark>
            <v-card-title class="title"> อาจารย์ที่ปรึกษา </v-card-title>
            <v-card-text class="white text--primary pa-9">
              <v-row justify="center">
                <v-col cols="12" sm="10"
                  ><p>
                    {{ form.acception.advisor.comment }}
                  </p>
                </v-col>
                <v-col cols="12" sm="2" align-self="center">
                  <v-icon color="purple" size="70" v-if="form.acception.advisor.approve">
                     mdi-check-circle
                  </v-icon>
                  <v-icon color="red" size="70" v-else>
                     mdi-chat-alert
                  </v-icon>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-if="form.acception.teacher.accept">
          <v-card color="purple darken-1" dark>
            <v-card-title class="title"> อาจารย์ผู้สอน </v-card-title>
            <v-card-text class="white text--primary pa-9">
              <v-row justify="center">
                <v-col cols="12" sm="10"
                  ><p>
                    {{ form.acception.teacher.comment }}
                  </p>
                </v-col>
                <v-col cols="12" sm="2" align-self="center">
                  <v-icon color="purple" size="70" v-if="form.acception.teacher.approve">
                     mdi-check-circle
                  </v-icon>
                  <v-icon color="red" size="70" v-else>
                     mdi-chat-alert
                  </v-icon>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-if="form.acception.staff.accept">
          <v-card color="purple darken-1" dark>
            <v-card-title class="title"> เจ้าหน้าที่โครงการ </v-card-title>
            <v-card-text class="white text--primary pa-9">
              <v-row justify="center">
                <v-col cols="12" sm="10"
                  ><p>
                    {{ form.acception.staff.comment }}
                  </p>
                </v-col>
                <v-col cols="12" sm="2" align-self="center">
                  <v-icon color="purple" size="70" v-if="form.acception.staff.approve">
                     mdi-check-circle
                  </v-icon>
                  <v-icon color="red" size="70" v-else>
                     mdi-chat-alert
                  </v-icon>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-if="form.acception.doyen.accept">
          <v-card color="purple darken-1" dark>
            <v-card-title class="title"> คณบดี </v-card-title>
            <v-card-text class="white text--primary pa-9">
              <v-row justify="center">
                <v-col cols="12" sm="10"
                  ><p>
                    {{ form.acception.doyen.comment }}
                  </p>
                </v-col>
                <v-col cols="12" sm="2" align-self="center">
                  <v-icon color="purple" size="70" v-if="form.acception.doyen.approve">
                     mdi-check-circle
                  </v-icon>
                  <v-icon color="red" size="70" v-else>
                     mdi-chat-alert
                  </v-icon>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-row>
  </v-contaner>
</template>

<script>
import axios from "axios";
// import Loading from "../components/Loading2";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
export default {
  name: "ViewProcess",
  data() {
    return {
      form: this.$store.state.form_id_for_employee,
      loading: "",
      accepStyle: [
        {
          color: "red lighten-2",
          icon: "mdi-star",
        },
        {
          color: "purple darken-1",
          icon: "mdi-book-variant",
        },
        {
          color: "green lighten-1",
          icon: "mdi-airballoon",
        },
        {
          color: "indigo",
          icon: "mdi-buffer",
        },
      ],
    };
  },
  components: {
    // Loading,
  },
  methods: {
    // async fetchFormData() {
    //   this.loading = true;
    //   let res = await axios.get(
    //     "https://cs264-backend-project.herokuapp.com/api/enroll/getEnrollForm",
    //     {
    //       params: {
    //         select: 8,
    //         id: this.$store.state.form_id_for_employee
    //       }
    //     }
    //   );
    //   this.loading = false;
    //   this.form = res.data;
    // }
  },
  mounted() {
    this.fetchFormData();
  },
};
</script>

<style lang="scss" scoped>
.white {
  color: black;
}
</style>