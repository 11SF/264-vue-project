<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="item in form_data.acception"
      :key="item"
      fill-dot
      light
    >
      <v-card>
        <v-card-title class="title">
          Lorem Ipsum Dolor
        </v-card-title>
        <v-card-text class="white text--primary">
          <p>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.
          </p>
          <v-btn :color="item.color" class="mx-0" outlined>
            Button
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: "Timeline",
  props: ["form_data"],
  data() {
    return {
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
        },
      ],
    };
  }
};
</script>

<style>
</style>