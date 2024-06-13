<script setup lang="ts">
  const props = defineProps(['cover', 'title', 'subTitle'])
</script>

<template>
  <div class="content row">
    <img class="project-cover user-unselect-any" :src="'./covers/' + cover + '-cover.png'" alt="queued project cover" draggable="false">
    <div class="title-container column">
      <h1 class="project-title" ref="titleElem">{{ title }}</h1>
      <h2 class="project-type" ref="subTitleElem">{{ subTitle }}</h2>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  height: 7.5vh;
  align-items: center;
  padding: 0.25% 0.25%;
}

h1, h2 {
  font-family: Modeseven, serif;
  text-align: left;
}

.project-cover {
  height: 95%;
  object-fit: contain;
  border-radius: 5px;
  filter: drop-shadow(1px 1px 4px rgba(0,0,0, 0.3));
}

.project-title {
  text-transform: uppercase;
  color: var(--text-header-c);
  font-size: max(1.5vh, min(1.5vw, 2.25vh));
  filter: drop-shadow(1px 1px 4px rgba(0,0,0, 0.3));
}

.project-type {
  font-size: max(1vh, min(1vw, 2vh));
  color: var(--text-hover-header-c);
  filter: drop-shadow(1px 1px 3px rgba(0,0,0, 0.4));
}

.title-container {
  height: 100%;
  justify-content: center;
  line-height: 1.35em;
  margin: 0 2%;
}
</style>