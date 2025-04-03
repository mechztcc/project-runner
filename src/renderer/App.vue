<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';

</script>

<template>
  <div class="flex bg-zinc-200 w-full">
    <Sidebar />
    <div class="w-full">
      <router-view /> 
    </div>
  </div>
</template>
