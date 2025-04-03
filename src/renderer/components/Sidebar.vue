<template>
  <div
    class="flex flex-col bg-zinc-100 h-screen left-0 top-0 sticky px-3 py-3 sidebar"
  >
    <button
      :class="{'bg-green-300 text-zinc-50': route.path === '/' }"
      class="flex justify-start items-center px-5 py-3 rounded-lg cursor-pointer hover:bg-green-300 hover:text-zinc-50"
      v-for="(item, index) in items"
      :key="index"
    >
      <font-awesome-icon :icon="['fas', 'house']" class="mr-4" />
      Home
    </button>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();


const items = ref([1]);
</script>

<style scoped>
.sidebar {
  width: 200px;
}
</style>
