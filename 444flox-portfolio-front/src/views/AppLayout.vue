<script setup lang="ts">

import Navbar from "@/components/Navbar.vue";
import gsap from "gsap";
import {useRouter} from "vue-router";

const router = useRouter()

function closeMainWindow() {
  gsap.to('.main-window', {
    scale: 0,
    duration: 0.1,
    onComplete: () => {
      router.push('/desk')
    }
  })
}

</script>

<template>
  <header class="row">
    <Navbar/>
  </header>
  <main>
    <RouterView :close-main-window="closeMainWindow" />
  </main>
</template>

<style scoped>
header {
  width: 100vw;
  height: 7.5vh;
  min-height: calc(25px + 2.5vw);
  background: var(--header-c);
  align-items: center;
}

main {
  width: 100vw;
  height: 92.5vh;
}


</style>