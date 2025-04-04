<template>
  <div class="grid grid-cols-3 px-5">
    <div class="col-span-3 mt-10 mb-10">
      <div class="flex w-full justify-end">
        <input
          type="text"
          class="outline-none px-5 py-3 w-50 bg-zinc-100 rounded-lg mr-2"
          placeholder="Buscar..."
        />
        <font-awesome-icon
          :icon="['fas', 'grip-lines']"
          class="px-2 py-3 bg-zinc-100 rounded-lg mr-2 h-5 w-5"
        />
        <font-awesome-icon
          :icon="['fas', 'grip']"
          class="px-2 py-3 bg-zinc-100 rounded-lg h-5 w-5 mr-2"
        />
        <font-awesome-icon
          :icon="['fas', 'arrow-up-z-a']"
          class="px-2 py-3 bg-zinc-100 rounded-lg h-5 w-5"
        />
      </div>
    </div>

    <div
      class="col-span-3"
      v-for="(item, index) in store.projects"
      :key="index"
    >
      <CardProgram
        :name="item.name"
        :started="item.started"
        :type="item.type"
        :scripts="item.scripts"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useFoldersStore } from "../stores/foldersStore";

import CardProgram from "../components/CardProgram.vue";

const store = useFoldersStore();

onMounted(() => {});
</script>

<style lang="scss" scoped></style>
