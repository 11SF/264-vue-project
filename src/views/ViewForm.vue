<template>
  <v-container>
    <v-row v-if="loading == true" justify="center" align-content="center">
      <Loading2 />
    </v-row>
    <v-row justify="center" align="center" >
      <v-card width="1096" class="pa-10 mb-6" rounded>
        <h3 class="mb-10">ใบคำร้องลงทะเบียนเรียนล้าช้า</h3>
        <v-divider></v-divider>
        <p>ข้อมูลส่วนตัว</p>
        <v-row class="py-5">
          <v-col cols="12" sm="6">
            <h5>ชื่อ : {{ form.owner_info.name }}</h5>
          </v-col>
          <v-col cols="12" sm="6">
            <h5>เลขทะเบียน : {{ form.owner_info.student_id }}</h5>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="9" align-self="center">
            <h5>สาชาวิชา : {{ form.owner_info.department }}</h5>
          </v-col>
          <v-col cols="12" sm="3">
            <h5>ชั้นปี : {{ form.owner_info.college_years }}</h5>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <p>ที่อยู่ที่ติดต่อได้</p>
        <v-row>
          <v-col cols="12" sm="6">
            <h5>เลขที่ : {{ form.owner_info.address.no }}</h5>
          </v-col>
          <v-col cols="12" sm="6">
            <h5>แขวง/ตำบล : {{ form.owner_info.address.sub_district }}</h5>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <h5>เขต/อำเภอ : {{ form.owner_info.address.district }}</h5>
          </v-col>
          <v-col cols="12" sm="6">
            <h5>จังหวัด : {{ form.owner_info.address.province }}</h5>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="6" sm="6">
            <h5>โทรศัพท์ติดต่อนักศึกษา : {{ form.owner_info.tel_number }}</h5>
          </v-col>
          <v-col cols="6" sm="6">
            <h5>
              โทรศัพท์ติดต่อผู้ปกครอง : {{ form.owner_info.parents_tel_number }}
            </h5>
          </v-col>
          <v-col cols="12" sm="12">
            <h5>ชื่ออาจารย์ที่ปรึกษา : {{ form.owner_info.advisor }}</h5>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <p>ประสงค์จะลงทะเบียนในรายวิชา</p>
        <v-row>
          <v-col cols="12" sm="4">
            <h5>รหัสวิชา : {{ form.subject_info.subject_id }}</h5>
          </v-col>
          <v-col cols="12" sm="4">
            <h5>Section : {{ form.subject_info.section }}</h5>
          </v-col>
          <v-col cols="12" sm="2">
            <h5>ภาคเรียนที่ : {{ form.subject_info.semester }}</h5>
          </v-col>
          <v-col cols="12" sm="2">
            <h5>ปีการศึกษา : {{ form.subject_info.year }}</h5>
          </v-col>
          <v-col cols="12" sm="12">
            <h5>ชื่อวิชา : {{ form.subject_info.subject_name }}</h5>
          </v-col>
          <v-col cols="12" sm="12">
            <h5>อาจารย์ผู้สอน : {{ form.subject_info.teacher_name }}</h5>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" sm="12">
            <h5>เหตุผลที่ยื่นคำร้อง : {{ form.reason }}</h5>
          </v-col>
        </v-row>
      </v-card>

      <v-card width="1096" class="pa-10" rounded v-if="$store.state.session_login['type'] == 'employee'">
        <h3 class="mb-10">ส่วนสำหรับอาจารย์ที่ปรึกษา</h3>
        <v-divider></v-divider>
        <p>ยืนยันแบบฟอร์ม</p>
        <v-form>
          <v-row>
            <v-col cols="12" sm="8">
              <v-text-field label="ชื่อ-สกุล"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select
                v-model="approve"
                :items="items"
                :rules="itemRequest"
                label="อนุมัติ/ไม่อนุมัติ"
                required
              >
              </v-select>
            </v-col>
            <v-col cols="12" sm="12">
              <v-textarea
                
                label="ความเห็น"
                v-model="comment"
              >
              </v-textarea>
            </v-col>
          </v-row>
        </v-form>

        <v-row justify="end">
          <v-btn color="green" @click="postData()" dark>ยืนยันข้อมูล</v-btn>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Loading2 from '../components/Loading2'
export default {
  name: "ViewForm",
  data() {
    return {
      form: this.$store.state.form_id_for_employee,
      items: ["อนุมัติ", "ไม่อนุมัติ"],
      approve: "",
      comment: "",
      timestamps: "",
      selected: true,
      titles: ["อาจารย์ที่ปรึกษา", "เจ้าหน้าที่โครงการ", "อาจารย์ผู้สอน/ผู้อำนวยการโครงการ", "คณบดี"],
      loading : ""
    };
  },
  methods: {
    // async fetchFormData() {
    //    this.loading = true
    //   let res = await axios.get(
    //     "https://cs264-backend-project.herokuapp.com/api/enroll/getEnrollForm",
    //     {
    //       params: {
    //         select: 8,
    //         id: this.$store.state.form_id_for_employee
    //       }
    //     }
    //   );
    //   this.loading = false
    //   this.form = res.data;
    // },
    async postData() {
      await axios.put("https://cs264-backend-project.herokuapp.com/api/enroll/updateEnrollForm",{
        params: {
          id: this.$store.state.form_id_for_employee,
          acception: {
            advisor: {
              comment: this.comment,
              approve: this.getApprove(),
              accept: true,
              time: this.getCurrentTime()
            }
          }
        }
      });
      this.$router.push({
        name: "Enroll",
        params: {
          status: this.$store.state.session_login["status"],
          username: this.$store.state.session_login["username"]
        }
      });
    },
    getApprove() {
      if (this.approve == "อนุมัติ") 
        return true
      else 
        return false
    },
    getCurrentTime() {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      return dateTime;
    }
  },
  mounted() {
    // this.fetchFormData();
  },
  watch: {
    approve: ()=> {
      this.getApprove()
    }
  },
  components: {
    Loading2
  }
};
</script>

<style>
</style>


