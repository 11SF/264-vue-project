<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-card width="1096" class="pa-10" rounded>
        <h3 class="mb-10">กรุณากรอกข้อมูลให้ครบถ้วน</h3>
        <v-divider></v-divider>
        <v-form ref="form" v-model="valid" lazy-validation>
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
                v-model="form_data.owner_info.college_years"
                :items="items"
                :rules="itemRequest"
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
              <v-text-field
                :rules="itemRequest"
                v-model="form_data.owner_info.address.no"
                label="เลขที่"
                required
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                v-model="form_data.owner_info.address.sub_district"
                label="แขวง/ตำบล"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                :rules="itemRequest"
                v-model="form_data.owner_info.address.district"
                label="เขต/อำเภอ"
                required
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                :rules="itemRequest"
                v-model="form_data.owner_info.address.province"
                label="จังหวัด"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="6" sm="6">
              <v-text-field
                :rules="itemRequest"
                v-model="form_data.owner_info.tel_number"
                label="โทรศัพท์ติดต่อนักศึกษา"
                required
              >
              </v-text-field>
            </v-col>
            <v-col cols="6" sm="6">
              <v-text-field
                :rules="itemRequest"
                v-model="form_data.owner_info.parents_tel_number"
                label="โทรศัพท์ติดต่อผู้ปกครอง"
                required
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field
                :rules="itemRequest"
                v-model="form_data.owner_info.advisor"
                label="ชื่ออาจารย์ที่ปรึกษา"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <p>ประสงค์จะลงทะเบียนในรายวิชา</p>
          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field
                :rules="itemRequest"
                v-model="form_data.subject_info.subject_id"
                label="รหัสวิชา"
                required
              >
                required</v-text-field
              >
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                :rules="itemRequest"
                v-model="form_data.subject_info.section"
                label="Section"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
              <v-text-field
                :rules="itemRequest"
                v-model="form_data.subject_info.semester"
                label="ภาคเรียนที่"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
              <v-text-field
                :rules="itemRequest"
                v-model="form_data.subject_info.year"
                label="ปีการศึกษา"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field
                :rules="itemRequest"
                v-model="form_data.subject_info.subject_name"
                label="ชื่อวิชา"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field
                :rules="itemRequest"
                v-model="form_data.subject_info.teacher_name"
                label="อาจารย์ผู้สอน"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12">
              <v-textarea :rules="itemRequest" label="เหตุผลที่ยื่นคำร้อง" v-model="form.reason">
              </v-textarea>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-btn color="green" @click="saveForm()" dark>ยืนยันข้อมูล</v-btn>
          </v-row>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "EnrollForm",
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8],
      form_data: {
        owner_info: {
          name: this.$store.state.userData["displayname_th"],
          student_id: this.$store.state.userData["username"],
          college_years: "",
          department: this.$store.state.userData["department"],
          address: {
            no: "",
            sub_district: "",
            district: "",
            province: ""
          },
          tel_number: "",
          parents_tel_number: "",
          advisor: ""
        },
        subject_info: {
          semester: "",
          year: "",
          subject_name: "",
          subject_id: "",
          section: "",
          teacher_name: ""
        },
        reason: "",
        timestamps: ""
      },
      itemRequest: [v => !!v || "Item is required"],
      valid: false
    };
  },

  methods: {
    validate() {
      this.$refs.form.validate();
      // this.saveForm();
    },
    async saveForm() {
      this.getCurrentTime();
      let res = await axios.post(
        "https://cs264-backend-project.herokuapp.com/api/enroll/submitEnrollForm",
        this.form_data
      );
      console.log(res);
      this.$router.push({
        name: "Enroll",
        params: {
          status: this.$store.state.session_login["status"],
          username: this.$store.state.session_login["username"]
        }
      });
    },
    getCurrentTime() {
      const today = new Date();
      const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.form_data.timestamps = dateTime;
    }
  }
};
</script>
<style>
</style>