<template>
  <div class="grid grid-cols-3 px-5">
    <div class="col-span-3" v-for="(item, index) in folders" :key="index">
      <CardProgram :name="item.name" :started="item.started" :type="item.type" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import CardProgram from "./CardProgram.vue";

const folders = ref([]);

onMounted(async () => {
  folders.value = await window.electronAPI.getFolders();

  console.log(folders.value);
  
});
</script>

<style lang="scss" scoped></style>
