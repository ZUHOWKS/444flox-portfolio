<script setup lang="ts">
import {onMounted, onUpdated} from "vue";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  onMounted(() => {
    if (window.innerWidth > window.innerHeight) {
      initScrollTrigger();
    }

  })

  onUpdated(() => {
    if (window.innerWidth > window.innerHeight) {
      initScrollTrigger();
    }
  })

  function initScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger)
    let sections = gsap.utils.toArray(".banner")
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      x: () => -(document.querySelector('.banner') as HTMLElement).offsetWidth * 1.2 ,
      ease: "none",
      scrollTrigger: {
        trigger: '.banner',
        start: 'center center',
        pin: true,
        scrub: 0.1,
        end: () => "+=" + (document.querySelector('.banner') as HTMLElement).offsetWidth * 1.2 + "px"
      }
    })

    const galleryAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.gallery',
        start: 'center center',
        pin: true,
        scrub: true,
        end: () => "+=" + (document.querySelector('.gallery') as HTMLElement).offsetWidth * 4.5 + "px",
        snap: {
          snapTo: 'labels',
          ease: 'none',
          duration: 99999999,
        }
      }
    })

    galleryAnimation
        .addLabel('start', '<=-1')
        .from('#cover-front', {x: '-15%', y: "130%", rotate: -23}, "cover-move-0")
        .from('#cover-back', {x: '15%', y: "130%", rotate: 23}, "cover-move-0")

        .addLabel('start', '<=-0.4')
        .to('#cover-front', {y: "0"}, "cover-move-0")
        .to('#cover-back', {y: "0"}, "cover-move-0")

        .addLabel('start', '>+=0.1')
        .from('#cover-front', {x: "0"}, "cover-move-1")
        .from('#cover-back', {x: "0"}, "cover-move-1")
        .from('.covers', {zIndex: 1})

        .addLabel('coverMove')
        .to('#cover-front', {x: "-55%"}, "cover-move-1")
        .to('#cover-back', {x: "55%"}, "cover-move-1")
        .to('.covers', {zIndex: -1})
        .from('#cover-front', {x: "-55%"}, "cover-move-2")
        .from('#cover-back', {x: "55%"}, "cover-move-2")

        .addLabel('coverMove', '>')
        .to('#cover-front', {x: "75%", duration: 0.5}, "cover-move-2")
        .to('#cover-back', {x: "-75%", duration: 0.5}, "cover-move-2")


        .addLabel('firstAppear', '<-=0.1')

        .from('#cover-post-1', {visibility: 'hidden', rotate: -5})

        .addLabel('firstAppear', '<')
        .from('.covers', {visibility: 'visible'})

        .addLabel('firstAppear')
        .to('.covers', {visibility: 'hidden'})
        .to('#cover-post-1', {rotate: -5, duration: 0.25})

        .addLabel('secondAppear', '<-=0.1')
        .from('#cover-post-2', {visibility: 'hidden', rotate: 4})

        .addLabel('secondAppear')
        .to('#cover-post-2', {rotate: 4, duration: 0.25})
        .addLabel('secondAppear', '>+=0.25')
        .to('.gallery-img', {position: 'relative'}, 'nextSection')
        .from('.grid-gallery', {y: "-50%", x: "150%"}, 'nextSection')

        .addLabel('end')
        .to('.gallery', {x: "-150%"}, 'nextSection')
        .to('.grid-gallery', {y: "-25%"}, 'nextSection')
        .set('.arrow-scroll-move', {y: "+=" + (document.querySelector('.banner') as HTMLElement).offsetWidth * 1.5 + "px"})
        .addLabel('end', ">+=0.1")
        .to('.arrow-scroll-move', {y: "+=" + (document.querySelector('.gallery') as HTMLElement).offsetWidth * 4.5 + "px"})



  }
</script>

<template>
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
    <section class="grid-gallery row">
      <img src="@/assets/img/sage/cover.png" alt="cover instagram promotion 2" rel="preload">
      <img src="@/assets/img/sage/cover_back.png" alt="cover instagram promotion 2" rel="preload">
      <img src="@/assets/img/sage/Instagram-02.png" alt="cover instagram promotion 1" rel="preload">
      <img src="@/assets/img/sage/Instagram-03.png" alt="cover instagram promotion 2" rel="preload">
      <img src="@/assets/img/sage/disk.png" alt="cover instagram promotion 2" rel="preload">
    </section>


</template>

<style scoped>

img {
  object-fit: contain;
}

.banner {
  position: relative;
  height: 100%;
  width: max(90vh, 80vw);
  z-index: 1;
}

.banner>img {
  width: max(52.5vh, 40vw);
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

.grid-gallery {
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.grid-gallery>img {
  margin: 1% 1%;
}
.grid-gallery>img:nth-last-child(1) {
  width: 70%;
}

</style>