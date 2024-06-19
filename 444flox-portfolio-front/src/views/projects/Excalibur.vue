<script setup lang="ts">
import {onMounted, ref} from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const phone = ref(false);

const props = defineProps(['arrowFollowScroll'])

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  initScrollTrigger();
  props.arrowFollowScroll()
})

function getPostsWidth(): number {
  return (document.querySelector('.posts') as HTMLElement).offsetWidth
}

function getPostsHeight(): number {
  return (document.querySelector('.posts') as HTMLElement).offsetHeight
}

function getCoversWidth(): number {
  return (document.querySelector('.covers') as HTMLElement).offsetWidth
}

function getCoversHeight(): number {
  return (document.querySelector('.covers') as HTMLElement).offsetHeight
}

function initScrollTrigger() {

  gsap.set('.covers', {
    x: () => (-getCoversHeight()/2) + 'px',
  })

  gsap.to('.posts', {
    scrollTrigger: {
      scroller: ".project-container",
      trigger: '.posts',
      start: 'bottom 95%',
      pin: true,
      scrub: true,
      end: () => (getPostsWidth() * 1.5) + 'px',
    },
    x: () => (-getPostsHeight() * 1.5) + 'px'

  })


  gsap.to('.covers', {
    scrollTrigger: {
      scroller: ".project-container",
      trigger: '.covers',
      start: 'bottom 97.5%',
      pin: true,
      scrub: true,
      end: () => (getCoversWidth() * 1.5) + 'px',
      onLeave: (self) => {
      }
    },
    x: () => (getCoversHeight()/2) + 'px'
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

  .gallery {
    width: 100%;
  }

  .gallery>.posts, .gallery>.covers {
    margin-bottom: 4vh;
  }

  .posts>.post, .covers>.cover {
    height: min(55vh,55vw);
    margin-right: 2vh;
  }

  .merch {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .merch>.merch-item {
    width: 90%;
    margin-right: 2vh;
  }

  @media screen and (max-width: 1020px) {
    .gallery {
      width: 75vw;
    }

    .gallery>.posts, .gallery>.covers {
      overflow-x: scroll;
      overflow-y: hidden;
    }

    .merch>.merch-item {
      width: unset;
      height: 50%;
    }
  }


  @media screen and (max-width: 1020px) and (orientation: portrait) {
    .posts>.post, .covers>.cover {
      height: max(60vh,60vw);
      margin-right: 2vh;
    }


  }

  @media screen and (max-width: 1020px) and (orientation: landscape) {
    .posts>.post, .covers>.cover {
      height: min(75vh,75vw);
      margin-right: 2vh;
    }
  }
</style>