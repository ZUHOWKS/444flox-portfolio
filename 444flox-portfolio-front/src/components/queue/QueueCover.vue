<script setup lang="ts">
const props = defineProps(['cover', 'title', 'subTitle'])
</script>

<template>
  <div class="cover column">
    <img class="project-in-queue" :src="'./covers/' + cover + '-cover.png'" alt="queued project cover" draggable="false">
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

.cover {
  justify-content: center;
  height: 95%;
}

.project-in-queue {
  width: min(15vh, 10vw);
  object-fit: contain;
  filter: drop-shadow(1px 1px 4px rgba(0,0,0, 0.35));
}

.project-title {
  text-transform: uppercase;
  color: var(--text-header-c);
  font-size: max(2vh, min(2.5vw, 3vh));
  filter: drop-shadow(1px 1px 4px rgba(0,0,0, 0.3));

}

.project-type {
  font-size: max(1vh, min(1vw, 2vh));
  color: var(--text-hover-header-c);
  filter: drop-shadow(1px 1px 3px rgba(0,0,0, 0.4));
  line-height: 0;
}

.title-container {
  justify-content: space-between;
}

@media screen and (max-width: 850px) {

  .project-in-queue {
    width: min(20vh, 17.5vw);
    min-width: 65px;
  }
}

</style>