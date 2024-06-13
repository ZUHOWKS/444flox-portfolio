<script setup lang="ts">

import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <header class="row">
    <Navbar/>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
header {
  width: 100vw;
  height: 7.5vh;
  background: var(--header-c);
  align-items: center;
}

main {
  width: 100vw;
  height: 92.5vh;
}


</style>