<script setup lang="ts">
import {onMounted, ref} from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const props = defineProps(['arrowFollowScroll'])

const phone = ref(false);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  if (window.innerWidth > 1020) {
    initScrollTrigger();
  }
  else phone.value = true


  addEventListener('resize', () => {
    if (window.innerWidth <= 1020) phone.value = true
  })

  gsap.timeline({
    scrollTrigger: {
      scroller: ".project-container",
      trigger: '.disk',
      start: '1% top',
      end: '25% center',
      onEnter: () => gsap.to('.disk', {rotate: 360, duration: 2.5}),
      onEnterBack: () => gsap.to('.disk', {rotate: 0,  duration: 2.5})
    }
  })

  props.arrowFollowScroll()

})

function initScrollTrigger() {
  gsap.timeline({
    scrollTrigger: {
      scroller: ".project-container",
      trigger: '.poster',
      start: '-1.5% top',
      pin: true,
      end: () => ((document.querySelector('.covers') as HTMLElement)?.offsetHeight - (document.querySelector('.poster') as HTMLElement)?.offsetHeight - 12) + "px",
    }
  })
}
</script>

<template>
  <section class="gallery">
    <div class="top row">
      <img class="poster" src="@/assets/img/fallenhero/poster-1.png" alt="poster fallen hero" rel="preload" draggable="false">
      <div class="list covers column">
        <img class="cover" src="@/assets/img/fallenhero/cover.png" alt="cover fallen hero" rel="preload" draggable="false">
        <img class="cover" src="@/assets/img/fallenhero/cover-back.png" alt="cover-back fallen hero" rel="preload" draggable="false">
      </div>
    </div>
    <div class="list row">
      <img class="disk" src="@/assets/img/fallenhero/disk.png" alt="cover-back fallen hero" rel="preload" draggable="false">
    </div>
  </section>

</template>

<style scoped>
img {
  object-fit: contain;
}

.gallery>.top {
  z-index: 1;
}

.gallery>.top>.poster, .gallery>.top>.covers {
  margin-right: 1%;
}
.gallery>.top>.covers {
  width: 50%;
}

.gallery>.top>.poster {
  width: 47.5%;
  height: 26%;
  align-self: start;
}

.gallery>.top>.covers>.cover:nth-child(1) {
  margin-bottom: 2.5%;
}

.gallery>.list {
  overflow-x: scroll;
  overflow-y: hidden;
  max-width: 100%;
  justify-content: start;

}

.gallery>.list>img {
  height: 100%;
}

@media screen and (max-width: 1020px) {
  .gallery {
    width: 75vw;
  }

  .gallery>.top {
    flex-wrap: wrap;
  }

  .gallery>.top>.poster {
    width: 100%;
    margin-bottom: 5%;
  }

  .gallery>.top>.covers {
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    height: 100%;
  }

  .gallery>.top>.covers>.cover {
    height: 80vw;
  }

  .gallery>.top>.covers>.cover:nth-child(1) {
    margin-bottom: 0;
    margin-right: 5%;
  }

  .gallery>.list>img {
    width: 80vh;
    max-width: 80vh;

  }
}
</style>