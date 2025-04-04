<template>
  <div class="flex flex-col px-5 py-5 mx-5 my-3 bg-zinc-100 rounded-lg ">
    <h1 class="text-xl"><b>Gerencie seus projetos com facilidade</b></h1>
    <span class="text-zinc-800 text-md">Arraste e solte uma pasta de projetos ou clique para selecionar</span>



    <div class="flex flex-col items-center justify-center px-10 py-10 border-dashed border-2 border-zinc-200 rounded-lg w-full mt-10 cursor-pointer">
      <font-awesome-icon :icon="['fas', 'folder']" class="text-4xl text-zinc-400"/>
      <span class="text-zinc-800">Selecionar pasta</span>
    </div>

    <div class="flex justify-end mt-5">
      <button class="bg-green-300 text-zinc-50 rounded-lg px-5 py-3 hover:bg-green-400 cursor-pointer"><b>Salvar</b></button>
    </div>
  </div>
</template>
