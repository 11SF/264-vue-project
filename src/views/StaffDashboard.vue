<template>
  <v-row class="container-row">
    <v-col cols="12" sm="12" lg="2">
      <v-card
        color="light-blue"
        dark
        link
        height="100%"
        @click="
          (formDisplay = formData), (titleDisplay = 'ใบคำร้องลงทะเบียนทั้งหมด')
        "
      >
        <v-card-title class="text-right">ใบคำร้องลงทะเบียนทั้งหมด</v-card-title>
        <v-card-text>
          <h2 v-if="loading == true">Loading...</h2>
          <h2 v-else>{{ formData.length }}</h2>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" lg="4" fill-height>
      <v-card
        color="blue-grey"
        dark
        link
        height="100%"
        @click="
          (formDisplay = formUnseen),
            (titleDisplay = 'ใบคำร้องที่ยังไม่ตรวจ'),
            (lastSelect = 'formUnseen')
        "
      >
        <v-card-title class="text-right">ใบคำร้องที่ยังไม่ตรวจ</v-card-title>
        <v-card-text>
          <h2 v-if="loading == true">Loading...</h2>
          <h2 v-else>{{ formUnseen.length }}</h2>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" lg="2">
      <v-card
        color="yellow darken-1"
        dark
        link
        height="100%"
        @click="
          (formDisplay = formWaitAccept),
            (titleDisplay = 'ใบคำร้องที่รอการอนุมัติ')
        "
      >
        <v-card-title class="text-right">ใบคำร้องที่รอการอนุมัติ</v-card-title>
        <v-card-text>
          <h2 v-if="loading == true">Loading...</h2>
          <h2 v-else>{{ formWaitAccept.length }}</h2>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" lg="2">
      <v-card
        color="red"
        dark
        link
        height="100%"
        @click="
          (formDisplay = formNotApprove),
            (titleDisplay = 'ใบคำร้องที่ไม่ผ่านการอนุมัติ')
        "
      >
        <v-card-title class="text-right"
          >ใบคำร้องที่ไม่ผ่านการอนุมัติ</v-card-title
        >
        <v-card-text>
          <h2 v-if="loading == true">Loading...</h2>
          <h2 v-else>{{ formNotApprove.length }}</h2>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" lg="2">
      <v-card
        color="success"
        dark
        link
        height="100%"
        @click="
          (formDisplay = formAllApprove),
            (titleDisplay = 'ใบคำร้องที่ผ่านการอนุมัติ')
        "
      >
        <v-card-title class="text-right"
          >ใบคำร้องที่ผ่านการอนุมัติ</v-card-title
        >
        <v-card-text>
          <h2 v-if="loading == true">Loading...</h2>
          <h2 v-else>{{ formAllApprove.length }}</h2>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <v-card
        color="cyan"
        dark
        link
        height="100%"
        @click="
          (formDisplay = formWaitPayment), (titleDisplay = 'รอการชำระเงิน')
        "
      >
        <v-card-title class="text-right">รอการชำระเงิน</v-card-title>
        <v-card-text>
          <h2 v-if="loading == true">Loading...</h2>
          <h2 v-else>{{ formWaitPayment.length }}</h2>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" lg="5">
      <v-card
        color="indigo"
        dark
        link
        height="100%"
        @click="
          (formDisplay = formWaitCheckPayment),
            (titleDisplay = 'รอเจ้าหน้าที่ยืนยันการชำระเงิน')
        "
      >
        <v-card-title class="text-right"
          >รอเจ้าหน้าที่ยืนยันการชำระเงิน</v-card-title
        >
        <v-card-text>
          <h2 v-if="loading == true">Loading...</h2>
          <h2 v-else>{{ formWaitCheckPayment.length }}</h2>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" lg="3">
      <v-card
        color="success"
        dark
        link
        height="100%"
        @click="(formDisplay = formFinish), (titleDisplay = 'เสร็จสิ้น')"
      >
        <v-card-title class="text-right">เสร็จสิ้น</v-card-title>
        <v-card-text>
          <h2 v-if="loading == true">Loading...</h2>
          <h2 v-else>{{ formFinish.length }}</h2>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" v-if="formDisplay != null">
      <h2>{{ titleDisplay }}</h2>
      <p>{{ formDisplay.length }} รายการ</p>
    </v-col>
    <v-col cols="12" sm="12">
      <v-card class="text-center pa-5">
        <h4 class="pa-12" v-if="formDisplay == null">ไม่มีข้อมูล</h4>
        <v-expansion-panels v-else>
          <v-expansion-panel v-for="form in formDisplay" :key="form" class="">
            <v-expansion-panel-header>
              <v-row>
                <v-col>
                  <h6>ชื่อวิชา : {{ form.subject_info.subject_name }}</h6>
                  <p>ผู้ยื่นคำร้อง : {{ form.owner_info.name }}</p>
                </v-col>
                <v-col>
                  <p>รหัสวิชา : {{ form.subject_info.subject_id }}</p>
                  <p>เวลาที่ยื่นคำร้อง : {{ form.timestamps }}</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col cols="6" sm="2">
                  <v-btn
                    color="green"
                    dark
                    @click="
                      goViewProcess(),
                        ($store.state.form_id_for_employee = form)
                    "
                  >
                    ตรวจสอบสถานะ
                  </v-btn>
                </v-col>
                <v-col
                  cols="6"
                  sm="2"
                  v-if="
                    titleDisplay == 'ใบคำร้องที่ยังไม่ตรวจ' ||
                    titleDisplay == 'ใบคำร้องที่รอการอนุมัติ'
                  "
                >
                  <v-btn
                    color="primary"
                    dark
                    @click="
                      goViewForm(), ($store.state.form_id_for_employee = form)
                    "
                  >
                    ตรวจสอบใบคำร้อง
                  </v-btn>
                </v-col>
                <v-col
                  cols="6"
                  sm="2"
                  v-if="titleDisplay == 'ใบคำร้องที่ไม่ผ่านการอนุมัติ'"
                >
                  <v-btn color="red" dark @click="completeForm(form)">
                    เสร็จสิ้นคำร้อง
                  </v-btn>
                </v-col>
                <v-col
                  cols="6"
                  sm="2"
                  v-if="titleDisplay == 'ใบคำร้องที่ผ่านการอนุมัติ'"
                >
                  <v-btn color="primary" dark @click="goPayment(form)">
                    ขั้นตอนจ่ายเงิน
                  </v-btn>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
// import loadingC from "../components/Loading2"
export default {
  name: "StaffDashboardS",
  data() {
    return {
      formData: "",
      formUnseen: [],
      formWaitAccept: [],
      formAllApprove: [],
      formNotApprove: [],
      formFinish: [],
      formWaitPayment: [],
      formWaitCheckPayment: [],
      formDisplay: null,
      titleDisplay: null,
      lastSelect: "",
      loading: null,
    };
  },
  methods: {
    async fetchAllForm() {
      this.loading = true;
      let res = await axios.get(
        "https://cs264-backend-project.herokuapp.com/api/enroll/getEnrollForm",
        {
          params: {
            select: 9,
          },
        }
      );
      this.formData = res.data;
      this.formData.forEach((element) => {
        if (element.form_status == false) {
          if (element.acception.staff.accept) {
            if (
              element.acception.advisor.accept &&
              element.acception.teacher.accept &&
              element.acception.doyen.accept
            ) {
              if (
                element.acception.advisor.approve &&
                element.acception.staff.approve &&
                element.acception.teacher.approve &&
                element.acception.doyen.approve
              ) {
                if (!element.pay_money_state)
                  this.formAllApprove.push(element);
                if (element.pay_money_state) {
                  this.formWaitPayment.push(element);
                }
              } else {
                this.formNotApprove.push(element);
              }
            } else {
              if (
                element.acception.advisor.accept &&
                !element.acception.advisor.approve
              ) {
                this.formNotApprove.push(element);
              } else if (
                element.acception.staff.accept &&
                !element.acception.staff.approve
              ) {
                this.formNotApprove.push(element);
              } else if (
                element.acception.teacher.accept &&
                !element.acception.teacher.approve
              ) {
                this.formNotApprove.push(element);
              } else if (
                element.acception.doyen.accept &&
                !element.acception.doyen.approve
              ) {
                this.formNotApprove.push(element);
              } else {
                this.formWaitAccept.push(element);
              }
            }
          } else {
            this.formUnseen.push(element);
          }
        } else {
          if (element.form_status) {
            this.formFinish.push(element);
          } else if (element.pay_money) {
            this.formWaitCheckPayment.push(element);
          } 
          // else if (element.pay_money_state) {
          //   this.formWaitPayment.push(element);
          // }
        }
      });

      this.loading = false;
    },
    goViewForm() {
      this.$router.push("/viewform");
    },
    goViewProcess() {
      this.$router.push("/viewprocess");
    },
    async completeForm(form) {
      form.form_status = true;

      await axios.put(
        "https://cs264-backend-project.herokuapp.com/api/enroll/updateEnrollForm",
        {
          params: {
            id: form,
            form: form,
          },
        }
      );
      this.$router.push('/staff/dashboard');
    },
    async goPayment(form) {
      form.pay_money_state = true;

      await axios.put(
        "https://cs264-backend-project.herokuapp.com/api/enroll/updateEnrollForm",
        {
          params: {
            id: form,
            form: form,
          },
        }
      );
      this.$forceUpdate();
    },
  },
  mounted() {
    this.fetchAllForm();
  },
  components: {
    // loadingC
  },
};
</script>

<style scoped>
.container {
  max-width: 960px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-row {
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>