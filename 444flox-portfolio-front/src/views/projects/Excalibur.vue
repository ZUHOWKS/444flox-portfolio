<script setup lang="ts">
import {onMounted, ref} from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const phone = ref(false);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

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

  gsap.timeline({
    scrollTrigger: {
      trigger: '.posts',
      start: 'bottom 97.5%',
      end: '105% bottom',
      onLeaveBack: () => {
        gsap.to('.arrow-icon', {rotate: 0, duration: 0.35})
        gsap.set('.arrow-scroll-move', {position: 'relative', duration: 0.25})
      },
      onEnter: () => {
        gsap.to('.arrow-icon', {rotate: 90, duration: 0.35})
        gsap.set('.arrow-scroll-move', {position: 'fixed', top:'2%', duration: 0.25})
      }
    }
  })
})

function initScrollTrigger() {



  const postsWidth = (document.querySelector('.posts') as HTMLElement).offsetWidth
  const postsHeight = (document.querySelector('.posts') as HTMLElement).offsetHeight

  const coversWidth = (document.querySelector('.covers') as HTMLElement).offsetWidth
  const coversHeight = (document.querySelector('.covers') as HTMLElement).offsetHeight

  gsap.set('.covers', {
    x: (-coversHeight/2) + 'px',
  })

  gsap.to('.posts', {
    scrollTrigger: {
      trigger: '.posts',
      start: 'bottom 95%',
      pin: true,
      scrub: true,
      end: () => (postsWidth * 1.5) + 'px',
    },
    x: (-postsHeight * 1.5) + 'px'

  })


  gsap.to('.covers', {
    scrollTrigger: {
      trigger: '.covers',
      start: 'bottom 97.5%',
      pin: true,
      scrub: true,
      end: () => (coversWidth * 1.5) + 'px',
      onLeave: (self) => {
      }
    },
    x: (coversHeight/2) + 'px'
  })
}
</script>

<template>
  <div class="gallery">
    <section class="posts row">
      <img class="post" src="@/assets/img/excalibur/instagram-3.png" alt="Instagram post 3 excalibur" rel="preload" draggable="false">
      <img class="post" src="@/assets/img/excalibur/instagram-2.png" alt="Instagram post 2 excalibur" rel="preload" draggable="false">
      <img class="post" src="@/assets/img/excalibur/instagram-1.png" alt="Instagram post 1 excalibur" rel="preload" draggable="false">
    </section>
    <section class="covers row">
      <img class="cover" src="@/assets/img/excalibur/cover.png" alt="Cover excalibur" rel="preload" draggable="false">
      <img class="cover" src="@/assets/img/excalibur/cover-back.png" alt="Cover-back excalibur" rel="preload" draggable="false">
    </section>
    <section class="merch list row">
      <img class="merch-item" src="@/assets/img/excalibur/merch.png" alt="T-Shirt merch excalibur" rel="preload" draggable="false">
    </section>
  </div>





</template>

<style scoped>
  img {
    object-fit: contain;
  }

  .gallery>.posts, .gallery>.covers {
    margin-bottom: 4vh;
  }

  .posts>.post, .covers>.cover {
    height: min(85vh,85vw);
    background: red;
    margin-right: 2vh;
  }

  .merch {
    overflow-x: scroll;
  }

  .merch>.merch-item {
    height: min(100vh,100vw);
    margin-right: 2vh;
  }

  @media screen and (max-width: 1020px) and (orientation: portrait) {
    .posts>.post, .covers>.cover {
      height: max(85vh,85vw);
      margin-right: 2vh;
    }

    .merch>.merch-item {
      height: max(80vh,80vw);
      margin-right: 2vh;
    }
  }

  @media screen and (max-width: 1020px) and (orientation: landscape) {
    .posts>.post, .covers>.cover {
      height: min(80vh,80vw);
      margin-right: 2vh;
    }

    .merch>.merch-item {
      height: max(80vh,80vw);
      margin-right: 2vh;
    }
  }
</style>