<script setup lang="ts">
import {onMounted, ref} from "vue";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  const phone = ref(false)

  onMounted(() => {
    if (window.innerWidth > 1020) {
      if (localStorage.getItem('444flox-reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('444flox-reloaded');
        initScrollTrigger()
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
  })

  function initScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".banner", {
      ease: "none",
      scrollTrigger: {
        trigger: '.banner',
        start: 'center center',
        pin: true,
        scrub: 0.1,
        end: () => "+=" + (document.querySelector('.banner') as HTMLElement).offsetWidth * 1.2 + "px"
      },
      x: "-=" + (document.querySelector('.banner') as HTMLElement).offsetWidth * 1.2 + "px",
    })

    const galleryAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.gallery',
        start: 'center center',
        pin: true,
        scrub: true,
        end: () => "+=" + (document.querySelector('.gallery') as HTMLElement).offsetWidth * 3.5 + "px",
        snap: {
          snapTo: 'labels',
          ease: 'none',
          duration: {min:0.2, max:100},
        },
        onLeave: () => {
          const gridGallery = (document.querySelector('.grid-gallery') as HTMLElement)
          window.scroll({
            top: gridGallery.offsetHeight * 0.15 + gridGallery.offsetTop,
            behavior: 'smooth'
          });
        },
      }
    })

    galleryAnimation
        .addLabel('start', '<=-1')
        .from('#cover-front', {x: '-15%', y: "130%", rotate: -23}, "cover-move-0")
        .from('#cover-back', {x: '15%', y: "130%", rotate: 23}, "cover-move-0")

        .addLabel('start', '<=-0.4')
        .to('#cover-front', {y: "0", duration: 1}, "cover-move-0")
        .to('#cover-back', {y: "0", duration: 1}, "cover-move-0")

        .addLabel('start', '>+=0.1')
        .from('#cover-front', {x: "0"}, "cover-move-1")
        .from('#cover-back', {x: "0"}, "cover-move-1")
        .from('.covers', {zIndex: 1})

        .addLabel('coverMove')
        .to('#cover-front', {x: "-55%", scale: 0.95, duration: 1}, "cover-move-1")
        .to('#cover-back', {x: "55%",  scale: 0.95, duration: 1}, "cover-move-1")
        .to('.covers', {zIndex: -1})
        .from('#cover-front', {x: "-55%", scale: 0.95}, "cover-move-2")
        .from('#cover-back', {x: "55%", scale: 0.95}, "cover-move-2")

        .addLabel('coverMove', '>')
        .to('#cover-front', {x: "55%", scale: 0.9, duration: 1}, "cover-move-2")
        .to('#cover-back', {x: "-55%", scale: 0.9, duration: 1}, "cover-move-2")
        .to('.covers', {opacity: 0, delay: 0.75, duration: 0.25}, "cover-move-2")


        .addLabel('firstAppear', '<-=0.1')
        .from('#cover-post-1', {visibility: 'hidden', rotate: -5})

        .addLabel('firstAppear', '<')
        .from('.covers', {visibility: 'visible'})

        .addLabel('firstAppear')
        .to('.covers', {visibility: 'hidden'})
        .to('#cover-post-1', {rotate: -5})

        .addLabel('secondAppear', '<-=0.1')
        .from('#cover-post-2', {visibility: 'hidden', rotate: 4})

        .addLabel('secondAppear')
        .to('#cover-post-2', {rotate: 4})
        .to('.gallery-img', {position: 'relative', delay: 0.4})
        .set('.arrow-scroll-move', {position: 'fixed', y: "600%"})
        .from('.arrow-icon', {rotate: 0})
        .addLabel('end', '<-=0.5')
        .to('.gallery', {x: "-100%"})
        .addLabel('end')
        .to('.gallery', {x: "-150%", duration: 0.6}, 'arrowAnimation')
        .to('.arrow-scroll-move', {y: "-690%", delay: 0.3, duration: 0.3}, 'arrowAnimation')
        .to('.arrow-icon', {rotate: 90, delay: 0.3, duration: 0.3}, 'arrowAnimation')





  }
</script>

<template>
  <div v-if="!phone">
    <section class="banner row flex-centered">
      <img class="cover-illustration" id="cover-illustration-1" src="@/assets/img/sage/Instagram-01_1.png" alt="cover illustration part 1" rel="preload">
      <img class="cover-illustration" id="cover-illustration-2" src="@/assets/img/sage/Instagram-01_2.png" alt="cover illustration part 2" rel="preload">
    </section>
    <section class="gallery row flex-centered">
      <img id="cover-post-3" class="gallery-img" src="@/assets/img/sage/disk.png" alt="cover instagram promotion 2" rel="preload">
      <img id="cover-post-1" class="gallery-img" src="@/assets/img/sage/Instagram-02.png" alt="cover instagram promotion 1" rel="preload">
      <img id="cover-post-2" class="gallery-img" src="@/assets/img/sage/Instagram-03.png" alt="cover instagram promotion 2" rel="preload">
      <div class="covers row">
        <img id="cover-front" class="cover" src="@/assets/img/sage/cover.png" alt="cover instagram promotion 2" rel="preload">
        <img id="cover-back" class="cover" src="@/assets/img/sage/cover_back.png" alt="cover instagram promotion 2" rel="preload">
      </div>
    </section>
  </div>
  <section class="grid-gallery column">
    <div class="list row">
      <img src="@/assets/img/sage/Instagram-01_1.png" alt="cover illustration part 1" rel="preload">
      <img src="@/assets/img/sage/Instagram-01_2.png" alt="cover illustration part 2" rel="preload">
    </div>
    <div class="list row row-gallery">
      <img src="@/assets/img/sage/cover.png" alt="cover instagram promotion 2" rel="preload">
      <img src="@/assets/img/sage/cover_back.png" alt="cover instagram promotion 2" rel="preload">
    </div>
    <div class="list row row-gallery">
      <img src="@/assets/img/sage/Instagram-02.png" alt="cover instagram promotion 1" rel="preload">
      <img src="@/assets/img/sage/Instagram-03.png" alt="cover instagram promotion 2" rel="preload">
    </div>
    <div class="list row">
      <img src="@/assets/img/sage/disk.png" alt="cover instagram promotion 2" rel="preload">
    </div>
  </section>


</template>

<style scoped>

img {
  object-fit: contain;
}

.banner {
  position: relative;
  height: 100%;
  width: max(100vh, 90vw);
  z-index: 1;
}

.banner>img {
  position: relative;
  width: max(50vh, 40vw);
}

.gallery {
  position: relative;
  height: 90vh;
  width: 90vw;
  transform: translateY(max(-70vh, -80vw)) translateX(-5%);
}

.gallery img {
  filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.5));
}

.gallery>img {
  position: absolute;
  height: 100%;
  width: max(55vh, 40vw);
}

.covers {
  position: absolute;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.covers>img {
  width: max(55vh, 40vw);
}

.grid-gallery {
  align-items: start;
  justify-content: center;
}

.grid-gallery>div {
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-bottom: 1%;
}

.grid-gallery>div>img {
  height: calc(50vw);
}

.grid-gallery>.row-gallery>img {
  margin-right: 1%;
}

.grid-gallery>.row-gallery>img:nth-last-child(1) {
  margin-right: 0;
}


@media screen and (max-width: 750px){
  .grid-gallery>div>img {
    height: 75vw;
  }
}

</style>