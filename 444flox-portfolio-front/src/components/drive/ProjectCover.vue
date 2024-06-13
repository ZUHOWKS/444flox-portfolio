<script setup lang="ts">
const props = defineProps(['cover', 'title', 'subTitle'])
</script>

<template>
  <div class="cover column flex-centered">
    <img class="project-listened user-unselect-any" :src="'./covers/' + cover + '-cover.png'" alt="listened project cover" draggable="false">
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

.project-listened {
  width: 100%;
  max-width: 80%;
  height: 90%;
  max-height: 54vh;
  min-width: 30vh;
  object-fit: contain;
  filter: drop-shadow(2px 2px 6px rgba(0,0,0, 0.4));
}

.title-container {
  margin: 1% 0;
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

@media screen and (max-width: 850px) {

  .project-listened {
    width: min(22.5vh, 22.5vw);
    height: min(22.5vh, 22.5vw);
  }

  .title-container {
    margin: 0% 0;
  }
}

</style>