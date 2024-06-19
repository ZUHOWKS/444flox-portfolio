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
      <img src="@/assets/img/gen/mockup-app.png" alt="mockup app gen" rel="preload" draggable="false">
    </div>
    <div class="row list">
      <img src="@/assets/img/gen/mockup-phone.png" alt="mockup phone gen" rel="preload" draggable="false">
      <img src="@/assets/img/gen/gen-logo.png" alt="gen logo gen" rel="preload" draggable="false">
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

.gallery>div:nth-child(1)>img {
  width: 100%;
}

.gallery>div:nth-child(2) {
  justify-content: space-between;
}

.gallery>div:nth-child(2)>img {
  width: calc(48% - 2vh);
}

.gallery>div:nth-child(2)>img:nth-child(1) {
  margin-right: 2vh;
}

@media screen and (max-width: 1020px) {

  .gallery {
    width: calc(72vw - 2vh);
  }

  .gallery>div:nth-child(1)>img {
    width: max(100vh, 95vw);
  }

  .gallery>div:nth-child(2)>img {
    width: 68vw;
  }
}
</style>