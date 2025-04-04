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
      <div class="relative">
        <font-awesome-icon
          @click="onHandle()"
          v-if="!started"
          :icon="['fas', 'play']"
          class="px-2 py-2 rounded-full hover:bg-zinc-200 cursor-pointer"
        />

        <div
          v-if="showMenu"
          class="absolute top-7 right-5 px-3 py-5 rounded-lg bg-zinc-50 z-10"
        >
          <div
            @click="runScript(item)"
            class="flex items-center my-2 cursor-pointer p-3 hover:bg-zinc-200 rounded-lg"
            v-for="(item, index) in props.scripts"
            :key="index"
          >
            <font-awesome-icon :icon="['fas', 'play']" class="mx-2" />
            {{ item }}
          </div>
        </div>
      </div>

      <font-awesome-icon
        @click="stopScript(props.type)"
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
  scripts: [];
}>();

let showMenu = ref(false);
let started = ref(false);

async function onHandle() {
  showMenu.value = !showMenu.value;
}

async function runScript(script: string) {
  if (props.type == "JS") {
    window.electronAPI.runScript(props.name, script);
    showMenu.value = false;
    started.value = true;
  }
}

async function stopScript() {
  if (props.type == "JS") {
    const result = await window.electronAPI.stopScript(props.name);
    started.value = false;
  }
}
</script>

<style lang="scss" scoped></style>
