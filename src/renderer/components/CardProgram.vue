<template>
  <div
    class="flex justify-between items-center bg-zinc-100 py-5 px-5 my-2 rounded-lg text-zinc-800"
  >
    <div class="flex flex-col items-start">
      <font-awesome-icon
        :icon="['fab', 'python']"
        v-if="props.type == 'PY'"
        class="text-blue-400"
      />
      <font-awesome-icon
        :icon="['fab', 'square-js']"
        v-if="props.type == 'JS'"
        class="text-yellow-500"
      />
      <font-awesome-icon
        :icon="['fab', 'dart-lang']"
        v-if="props.type == 'DART'"
        class="text-blue-400"
      />

      <span>{{ props.name }}</span>
    </div>

    <div class="flex items-center">
      <font-awesome-icon
        @click="onHandle()"
        v-if="!started"
        :icon="['fas', 'play']"
        class="px-2 py-2 rounded-full hover:bg-zinc-200 cursor-pointer"
      />

      <font-awesome-icon
       @click="onHandle()"
        :icon="['fas', 'pause']"
        class="px-2 py-2 rounded-full hover:bg-zinc-200 cursor-pointer"
        v-if="started"
      />

      <font-awesome-icon
        :icon="['fas', 'ellipsis-vertical']"
        class="ml-5 px-2 py-2 rounded-full hover:bg-zinc-200 cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  name: string;
  started: boolean;
  type: string;
}>();

let started = ref(props.started);

function onHandle() {
  started.value = !started.value;
}
</script>

<style lang="scss" scoped></style>
