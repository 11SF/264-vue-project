<template>
  <div class="container">
    <v-row class="ma-12">
      <h1>ลงทะเบียน</h1>
    </v-row>
    <v-row class="mx-auto" justify="center">
      <div class="area">
        <v-row justify="end" class="ma-5">
          <v-btn>เพิ่มรายวิชา</v-btn>
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
              <v-expansion-panel>
                <v-expansion-panel-header disable-icon-rotate>
                  Item
                  <template v-slot:actions>
                    <v-icon color="error">
                      mdi-alert-circle
                    </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
export default {
  name: "RegisSubject",
  data() {
    return {};
  }
};
</script>

<style>
.area {
  width: 1400px;
  height: 400px;
}
</style>
