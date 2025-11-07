<script setup>
import ACDateSelector from '@ac/ac-primevue/acdateselector';
import Select from "primevue/select";
// import DatePicker from "primevue/datepicker";
import { ref } from "vue";

const dates = ref([new Date(), null])
const preset = ref('Today')

const visible = ref(false)
</script>

<template>
  <ACDateSelector
    v-model="dates"
    v-model:presetModelValue="preset"
    selection-mode="range"
    :number-of-months="2"
    :max-date="new Date()"
    disabled
  >
  </ACDateSelector>
  <Select disabled></Select>
  <!-- <DatePicker></DatePicker> -->
  <!-- <Select></Select> -->
   <!-- <Button @click="visible = true">Open Drawer</Button> -->
   <!-- <ACDrawer v-model:visible="visible" :append-to="appOutletShadow">Hello from the drawer</ACDrawer> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
