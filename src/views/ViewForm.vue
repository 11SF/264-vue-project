<template>
  <v-container>
    <v-row v-if="loading == true" justify="center" align-content="center">
      <Loading2 />
    </v-row>
    <v-row justify="center" align="center">
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

      <v-card
        width="1096"
        class="pa-10 mb-6"
        rounded
        v-if="
          $store.state.session_login['type'] == 'employee' &&
          $store.state.session_login['username'] == form.owner_info.advisor &&
          !form.acception.advisor.accept
        "
      >
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
                v-model="form.acception.advisor.comment"
              >
              </v-textarea>
            </v-col>
          </v-row>
        </v-form>

        <v-row justify="end">
          <v-btn color="info" @click="saveAdvisor()" dark>บันทึก</v-btn>
        </v-row>
      </v-card>
      <v-card
        v-if="
          $store.state.session_login['type'] == 'employee' &&
          form.acception.advisor.accept == true
        "
        width="1096"
        class="pa-10 mb-5"
        rounded
      >
        <v-row>
          <v-col cols="12" sm="8">
            <h5>ชื่อ-สกุล : {{ form.owner_info.advisor }}</h5>
          </v-col>
          <v-col cols="12" sm="4">
            <h5>
              สถานะ :
              {{ form.acception.advisor.approve ? "อนุมัติ" : "ไม่อนุมัติ" }}
            </h5>
          </v-col>
          <v-col cols="12" sm="12">
            <h5>ความเห็น :</h5>
          </v-col>
          <v-col cols="12" sm="12">
            <p>{{ form.acception.advisor.comment }}</p>
          </v-col>
        </v-row>
      </v-card>

      <v-card
        width="1096"
        class="pa-10 mb-6"
        rounded
        v-if="
          $store.state.session_login['type'] == 'employee' &&
          $store.state.session_login['username'] ==
            form.acception.teacher.name &&
          !form.acception.teacher.accept
        "
      >
        <h3 class="mb-10">ส่วนสำหรับอาจารย์ผู้สอน</h3>
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
              <v-textarea label="ความเห็น" v-model="form.acception.teacher.comment"> </v-textarea>
            </v-col>
          </v-row>
        </v-form>

        <v-row justify="end">
          <v-btn color="info" @click="saveTeacher()" dark>บันทึก</v-btn>
        </v-row>
      </v-card>
      <v-card
        v-if="
          $store.state.session_login['type'] == 'employee' &&
          form.acception.teacher.accept == true
        "
        width="1096"
        class="pa-10 mb-5"
        rounded
      >
        <v-row>
          <v-col cols="12" sm="8">
            <h5>ชื่อ-สกุล : {{ form.acception.teacher.name }}</h5>
          </v-col>
          <v-col cols="12" sm="4">
            <h5>
              สถานะ :
              {{ form.acception.teacher.approve ? "อนุมัติ" : "ไม่อนุมัติ" }}
            </h5>
          </v-col>
          <v-col cols="12" sm="12">
            <h5>ความเห็น :</h5>
          </v-col>
          <v-col cols="12" sm="12">
            <p>{{ form.acception.teacher.comment }}</p>
          </v-col>
        </v-row>
      </v-card>

      <v-card
        width="1096"
        class="pa-10 mb-6"
        rounded
        v-if="
          $store.state.session_login['type'] == 'employee' &&
          $store.state.session_login['username'] == form.acception.doyen.name && !form.acception.doyen.accept
        "
      >
        <h3 class="mb-10">ส่วนสำหรับคณบดี</h3>
        <v-divider></v-divider>
        <p>ยืนยันแบบฟอร์ม</p>
        <v-form>
          <v-row>
            <v-col cols="12" sm="8">
              <v-text-field label="ชื่อ-สกุล"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select
                v-model="form.acception.doyen.approve"
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
                v-model="form.acception.doyen.comment"
              >
              </v-textarea>
            </v-col>
          </v-row>
        </v-form>

        <v-row justify="end">
          <v-btn color="info" @click="saveDoyen()" dark>บันทึก</v-btn>
        </v-row>
      </v-card>
      <v-card
        v-if="
          $store.state.session_login['type'] == 'employee' &&
          form.acception.doyen.accept == true
        "
        width="1096"
        class="pa-10 mb-5"
        rounded
      >
        <v-row>
          <v-col cols="12" sm="8">
            <h5>ชื่อ-สกุล : {{ form.acception.doyen.name }}</h5>
          </v-col>
          <v-col cols="12" sm="4">
            <h5>
              สถานะ :
              {{ form.acception.doyen.approve ? "อนุมัติ" : "ไม่อนุมัติ" }}
            </h5>
          </v-col>
          <v-col cols="12" sm="12">
            <h5>ความเห็น :</h5>
          </v-col>
          <v-col cols="12" sm="12">
            <p>{{ form.acception.doyen.comment }}</p>
          </v-col>
        </v-row>
      </v-card>

      <v-card
        width="1096"
        class="pa-10 mb-6"
        rounded
        v-if="
          $store.state.session_login['type'] == 'staff' &&
          form.acception.staff.accept == false
        "
      >
        <h3 class="mb-10">ส่วนสำหรับเจ้าหน้าที่โครงการ</h3>
        <v-divider></v-divider>
        <p>ยืนยันแบบฟอร์ม</p>
        <v-form>
          <v-row>
            <v-col cols="12" sm="8">
              <v-text-field
                label="ชื่อ-สกุล"
                v-model="staff_name"
              ></v-text-field>
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
              <v-textarea label="ความเห็น" v-model="comment"> </v-textarea>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-btn color="green" @click="saveStaff()" dark>ยืนยันข้อมูล</v-btn>
          </v-row>
        </v-form>
      </v-card>

      <v-card
        v-if="
          $store.state.session_login['type'] == 'staff' &&
          form.acception.staff.accept == true
        "
        width="1096"
        class="pa-10 mb-5"
        rounded
      >
        <v-row>
          <v-col cols="12" sm="8">
            <h5>ชื่อ-สกุล : {{ form.acception.staff.name }}</h5>
          </v-col>
          <v-col cols="12" sm="4">
            <h5>
              สถานะ :
              {{ form.acception.staff.approve ? "อนุมัติ" : "ไม่อนุมัติ" }}
            </h5>
          </v-col>
          <v-col cols="12" sm="12">
            <h5>ความเห็น :</h5>
          </v-col>
          <v-col cols="12" sm="12">
            <p>{{ form.acception.staff.comment }}</p>
          </v-col>
        </v-row>
      </v-card>

      <v-card
        width="1096"
        class="pa-10"
        rounded
        v-if="$store.state.session_login['type'] == 'staff'"
      >
        <p>กรอกชื่อผู้เกี่ยวข้อง</p>
        <v-row>
          <v-col cols="12" sm="4" align-self="center">
            <p v-if="form.owner_info.advisor == ''">
              ชื่ออาจารย์ที่ปรึกษา : ยังไม่มีข้อมูล
            </p>
            <p v-else>ชื่ออาจารย์ที่ปรึกษา : {{ form.owner_info.advisor }}</p>
          </v-col>
          <v-col cols="12" sm="8">
            <v-text-field
              label="ชื่อ-สกุล อาจารย์ที่ปรึกษา"
              v-model="advisor_name"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4" align-self="center">
            <p v-if="form.acception.teacher.name == ''">
              ชื่ออาจารย์ผู้สอน : ยังไม่มีข้อมูล
            </p>
            <p v-else>ชื่ออาจารย์ผู้สอน : {{ form.acception.teacher.name }}</p>
          </v-col>
          <v-col cols="12" sm="8">
            <v-text-field
              label="ชื่อ-สกุล อาจารย์ผู้สอน"
              v-model="teacher_name"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4" align-self="center">
            <p v-if="form.acception.doyen.name == ''">
              ชื่อคณบดี : ยังไม่มีข้อมูล
            </p>
            <p v-else>ชื่อคณบดี : {{ form.acception.doyen.name }}</p>
          </v-col>
          <v-col cols="12" sm="8">
            <v-text-field
              label="ชื่อ-สกุล คณบดี"
              v-model="doyen_name"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="end">
          <v-btn color="green" @click="postDataAcception()" dark
            >ยืนยันข้อมูล</v-btn
          >
        </v-row>
      </v-card>
    </v-row>
    <v-row
      justify="center"
      v-if="$store.state.session_login['type'] == 'employee'"
    >
      <v-btn color="success" @click="postData()"> ยืนยันข้อมูล </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Loading2 from "../components/Loading2";
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
      titles: [
        "อาจารย์ที่ปรึกษา",
        "เจ้าหน้าที่โครงการ",
        "อาจารย์ผู้สอน/ผู้อำนวยการโครงการ",
        "คณบดี",
      ],
      loading: "",
      teacher_name: "",
      doyen_name: "",
      advisor_name: "",
      staff_name: "",
    };
  },
  methods: {
    async postData() {
      await axios.put(
        "https://cs264-backend-project.herokuapp.com/api/enroll/updateEnrollForm",
        {
          params: {
            id: this.$store.state.form_id_for_employee,
            form: this.form,
          },
        }
      );
      this.$router.push({
        name: "Enroll",
        params: {
          status: this.$store.state.session_login["status"],
          username: this.$store.state.session_login["username"],
        },
      });
    },
    async postDataAcception() {
      if (this.advisor_name != "") {
        this.form.owner_info.advisor = this.advisor_name;
      }
      if (this.teacher_name != "") {
        this.form.acception.teacher.name = this.teacher_name;
      }
      if (this.doyen_name != "") {
        this.form.acception.doyen.name = this.doyen_name;
      }

      await axios.put(
        "https://cs264-backend-project.herokuapp.com/api/enroll/updateEnrollForm",
        {
          params: {
            id: this.$store.state.form_id_for_employee,
            form: this.form,
          },
        }
      );
      this.$router.push({
        name: "StaffDashboard",
        // params: {
        //   status: this.$store.state.session_login["status"],
        //   username: this.$store.state.session_login["username"],
        // },
      });
    },
    async saveStaff() {
      this.form.acception.staff.accept = true;
      this.form.acception.staff.comment = this.comment;
      this.form.acception.staff.approve = this.getApprove();
      this.form.acception.staff.time = this.getCurrentTime();
      if (this.staff_name != "") {
        this.form.acception.staff.name = this.staff_name;
      }
      await axios.put(
        "https://cs264-backend-project.herokuapp.com/api/enroll/updateEnrollForm",
        {
          params: {
            id: this.$store.state.form_id_for_employee,
            form: this.form,
          },
        }
      );
    },
    getApprove() {
      if (this.approve == "อนุมัติ") return true;
      else return false;
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
    },
    saveAdvisor() {
      this.form.acception.advisor.approve = this.getApprove();
      this.form.acception.advisor.accept = true;
      this.form.acception.advisor.time = this.getCurrentTime()
    },
    saveTeacher() {
      this.form.acception.teacher.approve = this.getApprove();
      this.form.acception.teacher.accept = true;
      this.form.acception.teacher.time = this.getCurrentTime()
    },
    saveDoyen() {
      this.form.acception.doyen.approve = this.getApprove();
      this.form.acception.doyen.accept = true;
      this.form.acception.doyen.time = this.getCurrentTime()
    },
  },
  mounted() {
    // this.fetchFormData();
  },
  watch: {
    approve: () => {
      this.getApprove();
    },
  },
  components: {
    Loading2,
  },
};
</script>

<style>
</style>


