<script setup lang="ts">
import {onMounted, type Ref, ref} from "vue";

const props = defineProps(['cover', 'title', 'subTitle'])

</script>

<template>
  <div class="cover column">
    <img class="project-in-queue user-unselect-any" :src="'./covers/' + cover + '-cover.png'" alt="queued project cover" draggable="false">
    <div class="title-container column flex-centered">
      <div class="project-title"><span :class="['h1', title.length > 10 ? 'defile' : '']">{{ title }}</span></div>
      <div class="project-type"><span :class="['h2', subTitle.length > 10 ? 'defile' : '']">{{ subTitle }}</span></div>
    </div>
  </div>

</template>

<style scoped>
.h1, .h2 {
  font-family: Modeseven, serif;
  text-align: center;
}



.cover {
  justify-content: center;
  height: 100%;
  padding: 2.5% 0;
}

.title-container {

  margin-top: 5%;
  justify-content: start;
  line-height: 1.35em;
  width: min(13.5vh, 10vw);
  overflow: hidden;
}

.project-in-queue {
  width: min(13.5vh, 10vw);
  object-fit: contain;
  filter: drop-shadow(1px 1px 4px rgba(0,0,0, 0.35));
}

.project-title {
  display: block;
  min-width: min(13.5vh, 10vw);
  overflow: hidden;
  position: relative;
  table-layout: fixed;
}

.project-title>.h1 {
  display: block;
  white-space: nowrap;
  text-transform: uppercase;
  height: max(1.5vh, min(2vw, 2.5vh));
  color: var(--text-header-c);
  font-size: max(1.5vh, min(1.5vw, 2.25vh));
  filter: drop-shadow(1px 1px 4px rgba(0,0,0, 0.3));
  line-height: max(1.5vh, min(1.5vw, 2.25vh));
}

.project-type {
  display: block;
  width: min(13.5vh, 10vw);
}

.project-type>.h2 {
  display: block;
  font-size: max(1vh, min(1vw, 2vh));
  height: max(1vh, min(1vw, 2vh));
  line-height: max(1vh, min(1vw, 2vh));
  color: var(--text-hover-header-c);
  filter: drop-shadow(1px 1px 3px rgba(0,0,0, 0.4));
}

.defile {
  animation:linear marqueelike 3s infinite ;
  transform-origin: center;
  transform: translateX(15%);
}

@keyframes marqueelike {
  0%, 100% {
    transform: translateX(15%);
  }
  80%,92.5% {
    transform: translateX(-15%);
  }
}

@media screen and (max-width: 860px) {

  .project-in-queue {
    max-width: 145px;
    width: min(calc(20vh), calc(20vw + 2.5vh));
    min-width: 65px;
  }

  .title-container {
    line-height: 0.75em;
  }
}

</style>