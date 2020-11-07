<template>
  <v-bottom-sheet v-model="sheet">
      <v-sheet
        class="text-center"
        height="200px"
      >
        <div class="py-3">
          This is a bottom sheet using the controlled by v-model instead of activator
        </div>
      </v-sheet>
    </v-bottom-sheet>
</template>

<script>
export default {
    name: "Timeline",
    props: ["sheet","form_data"]
}
</script>

<style>

</style>