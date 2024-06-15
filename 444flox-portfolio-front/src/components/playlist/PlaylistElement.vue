<script setup lang="ts">
  const props = defineProps(['cover', 'title', 'subTitle'])
</script>

<template>
  <div class="content row">
    <img class="project-cover user-unselect-any" :src="'./covers/' + cover + '-cover.png'" alt="queued project cover" draggable="false">
    <div class="title-container column">
      <RouterLink :to="'/' + cover.toString().toLocaleLowerCase()" class="project-title" ref="titleElem">{{ title }}</RouterLink>
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

a, h2 {
  font-family: Modeseven, serif;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  font-size: max(2.35vh, min(1.5vw, 2.25vh));
  filter: drop-shadow(1px 1px 4px rgba(0,0,0, 0.3));
}

.project-title:hover {
  text-decoration: underline;
}

.project-type {
  font-size: max(1.85vh, min(1vw, 2vh));
  color: var(--text-hover-header-c);
  filter: drop-shadow(1px 1px 3px rgba(0,0,0, 0.4));
}

.title-container {
  height: 100%;
  justify-content: space-evenly;
  line-height: max(1.5vh, min(1.5vw, 2.25vh));
  margin: 0 2%;
  width: 100%;
  overflow: hidden;
}
</style>