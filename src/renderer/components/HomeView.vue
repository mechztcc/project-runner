<template>
  <div class="grid grid-cols-3 px-5">
    <div class="col-span-3" v-for="(item, index) in folders" :key="index">
      <CardProgram :name="item.name" :started="item.started" :type="item.type" :scripts="item.scripts" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import CardProgram from "./CardProgram.vue";

const folders = ref([]);

onMounted(async () => {
  folders.value = await window.electronAPI.getFolders();
});
</script>

<style lang="scss" scoped></style>
