<script setup lang="ts">
import {onMounted, ref} from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const phone = ref(false);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  if (window.innerWidth > 1020) {
    if (localStorage.getItem('444flox-reloaded')) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem('444flox-reloaded');
      initScrollTrigger();
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem('444flox-reloaded', '1');
      location.reload();
    }
  }
  else phone.value = true


  addEventListener('resize', () => {
    if (window.innerWidth <= 1020) phone.value = true
  })

  gsap.timeline({
    scrollTrigger: {
      trigger: '.disk',
      start: '1.5% center',
      end: '15% center',
      onEnter: () => gsap.to('.disk', {rotate: 360, duration: 2.5}),
      onEnterBack: () => gsap.to('.disk', {rotate: 0,  duration: 2.5})
    }
  })

  gsap.timeline({
    scrollTrigger: {
      trigger: '.top',
      start: 'top top',
      end: '1% top',
      onLeaveBack: () => {
        gsap.to('.arrow-icon', {rotate: 0, duration: 0.35})
        gsap.set('.arrow-scroll-move', {position: 'relative', duration: 0.25})
      },
      onEnter: () => {
        gsap.to('.arrow-icon', {rotate: 90, duration: 0.35})
        gsap.set('.arrow-scroll-move', {position: 'fixed', top:'2.5%', duration: 0.25})
      }
    }
  })


})

function initScrollTrigger() {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.poster',
      start: '-1.5% top',
      pin: true,
      end: () => ((document.querySelector('.covers') as HTMLElement).offsetHeight - (document.querySelector('.poster') as HTMLElement).offsetHeight - 12) + "px",
    }
  })
}
</script>

<template>
  <section class="gallery">
    <div class="top row">
      <img class="poster" src="@/assets/img/fallenhero/poster-1.png" alt="poster fallen hero" rel="preload">
      <div class="list covers column">
        <img class="cover" src="@/assets/img/fallenhero/cover.png" alt="cover fallen hero" rel="preload">
        <img class="cover" src="@/assets/img/fallenhero/cover-back.png" alt="cover-back fallen hero" rel="preload">
      </div>
    </div>
    <div class="list row">
      <img class="disk" src="@/assets/img/fallenhero/disk.png" alt="cover-back fallen hero" rel="preload">
    </div>
  </section>

</template>

<style scoped>
img {
  object-fit: contain;
}

.gallery>.top>.poster, .gallery>.top>.covers {
  width: 50%;
  margin-right: 1%;
}

.gallery>.top>.poster {
  width: 42.5%;
  height: 25%;
  align-self: start;
}

.gallery>.top>.covers>.cover:nth-child(1) {
  margin-bottom: 2.5%;
}

.gallery>.list {
  overflow-x: scroll;
  overflow-y: hidden;
  max-width: 100vw;
  justify-content: center;
}

.gallery>.list>img {
  width: 75vw;
}

@media screen and (max-width: 1020px) {
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
    height: 100vw;
  }

  .gallery>.top>.covers>.cover:nth-child(1) {
    margin-bottom: 0;
    margin-right: 5%;
  }

  .gallery>.list>img {
    width: 80vh;
    max-width: 80vh;
    margin-left: 35vh;

  }
}
</style>