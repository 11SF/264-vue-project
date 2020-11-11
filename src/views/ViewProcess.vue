<template>
  <v-container class="mr-5">
    <v-row v-if="loading == true" justify="center">
      <Loading />
    </v-row>
    <v-row justify="center" align-content="center">
      <v-col cols="12" sm="6">
        <v-card class="pa-8" >
          <h3>อาจารย์ที่ปรึกษา</h3>
          <v-divider insert></v-divider>
          <h5>ชื่อ-สกุล : {{form.owner_info.advisor}}</h5>
          <h5>ความเห็นจากอาจารย์ที่ปรึกษา</h5>
          <p>{{form.acception.advisor.comment}}</p>
          <p>วันที่ :{{form.acception.advisor.time}}</p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        
      </v-col>
      <v-col cols="12" sm="6">
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Loading from "../components/Loading2";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
export default {
  name: "ViewProcess",
  data() {
    return {
      form: this.$store.state.form_id_for_employee,
      loading: ""
    };
  },
  components: {
    Loading
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
  }
};
</script>

<style>
</style>