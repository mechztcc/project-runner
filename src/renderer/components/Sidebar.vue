<template>
  <div
    class="flex flex-col bg-zinc-100 h-screen left-0 top-0 sticky px-3 py-3 sidebar"
  >
    <button
      @click="item.navigate()"
      :class="{ 'bg-green-300 text-zinc-50': item.active() }"
      class="flex justify-start items-center px-5 py-3 my-2 rounded-lg cursor-pointer hover:bg-green-300 hover:text-zinc-50"
      v-for="(item, index) in items"
      :key="index"
    >
      <font-awesome-icon :icon="item.icon" class="mr-4" />
      {{ item.label }}
    </button>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const items = ref([
  {
    label: "Início",
    icon: ["fas", "folder"],
    navigate: () => {
      router.push("/");
    },
    active: () => route.path === "/",
  },
  {
    label: "Projetos",
    icon: ["fas", "house"],
    navigate: () => {
      router.push("/projects");
    },
    active: () => route.path === "/projects",
  },
  {
    label: "Iniciados",
    icon: ['fas', 'play'],
    navigate: () => {
      router.push("/projects");
    },
    active: () => route.path === "/started",
  },
]);
</script>

<style scoped>
.sidebar {
  width: 200px;
}
</style>
