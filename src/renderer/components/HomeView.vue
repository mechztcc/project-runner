<template>
    <div>
      <h1 class="">Página Inicial</h1>
      <p>Bem-vindo ao Vue Router no Electron!</p>
      <router-link to="/about">Ir para Sobre</router-link>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(async () => {
  const d = await window.electronAPI.getFolders();
  console.log(d);
})
</script>

<style lang="scss" scoped>

</style>

