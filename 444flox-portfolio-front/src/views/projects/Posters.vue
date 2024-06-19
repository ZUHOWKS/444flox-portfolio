<script setup lang="ts">
import {onMounted} from "vue";

const props = defineProps(['arrowFollowScroll'])

onMounted(() => {
  props.arrowFollowScroll()
})
</script>

<template>
  <section class="gallery">
    <div class="row list">
      <img src="@/assets/img/posters/poster-1_01.png" alt="poster 1 posters" rel="preload" draggable="false">
      <img src="@/assets/img/posters/poster-1_02.png" alt="poster 1 mockup posters" rel="preload" draggable="false">
    </div>
    <div class="row list">
      <img src="@/assets/img/posters/poster-2_01.png" alt="poster 2 posters" rel="preload" draggable="false">
      <img src="@/assets/img/posters/poster-2_02.png" alt="poster 2 mockup posters" rel="preload" draggable="false">
    </div>
    <div class="row list">
      <img src="@/assets/img/posters/poster-3_01.png" alt="poster 3 posters" rel="preload" draggable="false">
      <img src="@/assets/img/posters/poster-3_02.png" alt="poster 3 mockup posters" rel="preload" draggable="false">
    </div>
    <div class="row list">
      <img src="@/assets/img/posters/poster-4_01.png" alt="poster 4 posters" rel="preload" draggable="false">
      <img src="@/assets/img/posters/poster-4_02.png" alt="poster 4 mockup posters" rel="preload" draggable="false">
    </div>
  </section>
</template>

<style scoped>
img {
  object-fit: contain;
}

.gallery {
  width: calc(100% - 2vh);
  margin-right: 2vh;
}

.gallery>div {
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-bottom: 4vh;
}

.gallery>div>img {
  height: calc(43vw - 1vh);
}

.gallery>div>img:nth-child(1) {
  margin-right: 2vh;
}

@media screen and (max-width: 1020px) {
  .gallery {
    width: calc(72vw - 2vh);
  }

  .gallery>div>img {
    height: max(60vh, 50vw);
  }
}

@media screen and (max-width: 680px) {
  .gallery {
    width: calc(75vw - 2vh);
  }
}
</style>