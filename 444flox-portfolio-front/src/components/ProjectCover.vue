<script setup lang="ts">
const props = defineProps(['cover', 'title', 'subTitle'])
</script>

<template>
  <div class="cover column flex-centered">
    <img class="project-listen" :src="cover" alt="listened project">
    <div class="title-container column flex-centered">
      <h1 class="project-title">{{ title }}</h1>
      <h2 class="project-type">{{ subTitle }}</h2>
    </div>

  </div>

</template>

<style scoped>
h1, h2 {
  font-family: Modeseven, serif;

}

.project-listen {
  width: 100%;
  max-width: 80%;
  height: 87.5%;
  max-height: 50vh;
  min-width: 32vh;
  object-fit: contain;
  filter: drop-shadow(2px 2px 6px rgba(0,0,0, 0.4));
}

.project-title {
  text-transform: uppercase;
  color: var(--text-header-c);
  font-size: max(2.25vh, min(3vw, 4.5vh));
  filter: drop-shadow(2px 2px 6px rgba(0,0,0, 0.35));

}

.project-type {
  font-size: max(1.25vh, min(1.5vw, 2.5vh));
  color: var(--text-hover-header-c);
  filter: drop-shadow(2px 2px 4px rgba(0,0,0, 0.45));
  line-height: 0;
}

.title-container {
  justify-content: space-between;
}

</style>