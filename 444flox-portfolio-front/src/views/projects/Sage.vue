<script setup lang="ts">
import {onMounted, ref} from "vue";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

const props = defineProps(['arrowTopPosition', 'arrowFollowScroll', 'hiddenLinkArrow'])

  const phone = ref(false)

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  function init() {
    if (window.innerWidth > 1020) {
      initScrollTrigger()
      gsap.timeline({
        scrollTrigger: {
          scroller: ".project-container",
          trigger: '.grid-gallery',
          start: '-5% top',
          end: 'top top',
          onLeaveBack: () => {
            gsap.to('.arrow-icon', {rotate: 0, duration: 0.35})
            gsap.to('.arrow-scroll-move', {opacity: 0, top: props.arrowTopPosition() * 2, duration: 0.35});
          },
          onEnter: () => {
            gsap.to('.arrow-icon', {rotate: 90, duration: 0.35})
            gsap.to('.arrow-scroll-move', {opacity: 1, top: props.arrowTopPosition(), duration: 0.35});
          }
        }
      })
    } else {
      phone.value = true
      props.arrowFollowScroll('.grid-gallery')
    }




    addEventListener('resize', () => {
      if (window.innerWidth <= 1020) phone.value = true
    })
  }

  onMounted(() => {
    init();
  })

  function initScrollTrigger() {

    const bannerScroll = (document.querySelector('.banner') as HTMLElement).offsetWidth * 1.2

    gsap.to(".banner", {
      ease: "none",
      scrollTrigger: {
        scroller: ".project-container",
        trigger: '.banner',
        start: 'center center',
        pin: true,
        scrub: 0.1,
        end: () => "+=" + bannerScroll + "px",
        onEnterBack: () => {
          gsap.set('.arrow-scroll-move', {position: 'absolute', opacity: 1, top:'0.45%'})
        },
        onLeave: () => {
          gsap.set('.arrow-scroll-move', {position: 'fixed', opacity: 0, top: props.arrowTopPosition() * 2})
        }
      },
      x: "-=" + bannerScroll + "px",
    })

    const galleryScroll = (document.querySelector('.gallery') as HTMLElement).offsetWidth * 3.5

    const galleryAnimation = gsap.timeline({
      scrollTrigger: {
        scroller: ".project-container",
        trigger: '.gallery',
        start: 'center center',
        pin: true,
        scrub: true,
        end: () => "+=" + galleryScroll + "px",
        fastScrollEnd: true,
        onLeave: () => {
          gsap.to(".project-container", {
            duration: 0.5,
            scrollTo: {
              y: ".grid-gallery",
              offsetY: 50
            }
          })
        },
      }
    })


    galleryAnimation
        .addLabel('start', '<=-1')
        .set('.covers', {zIndex: 1})
        .fromTo('#cover-front', {x: '-15%', y: "130%", rotate: -23}, {x: 0, rotate:0, y: 0, duration: 1}, "cover-move-0")
        .fromTo('#cover-back', {x: '15%', y: "130%", rotate: 23}, {x:0, rotate:0, y: 0, duration: 1}, "cover-move-0")

        .addLabel('coverMove')
        .to('#cover-front', {x: "-55%", scale: 0.95, duration: 1}, "cover-move-1")
        .to('#cover-back', {x: "55%",  scale: 0.95, duration: 1}, "cover-move-1")
        .addLabel('coverMove', '>')
        .set('.covers', {zIndex: -1})
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
        .addLabel('end', '<-=0.5')
        .to('.gallery', {x: "-100%"})
        .addLabel('end')
        .to('.gallery', {x: "-150%", duration: 0.6}, 'arrowAnimation')
  }
</script>

<template>
  <div v-if="!phone">
    <section class="banner row flex-centered">
      <img class="cover-illustration" id="cover-illustration-1" src="@/assets/img/sage/Instagram-01_1.png" alt="cover illustration part 1" rel="preload" draggable="false">
      <img class="cover-illustration" id="cover-illustration-2" src="@/assets/img/sage/Instagram-01_2.png" alt="cover illustration part 2" rel="preload" draggable="false">
    </section>
    <section class="gallery row flex-centered">
      <img id="cover-post-3" class="gallery-img" src="@/assets/img/sage/disk.png" alt="cover instagram promotion 2" rel="preload" draggable="false">
      <img id="cover-post-1" class="gallery-img" src="@/assets/img/sage/Instagram-02.png" alt="cover instagram promotion 1" rel="preload" draggable="false">
      <img id="cover-post-2" class="gallery-img" src="@/assets/img/sage/Instagram-03.png" alt="cover instagram promotion 2" rel="preload" draggable="false">
      <div class="covers row">
        <img id="cover-front" class="cover" src="@/assets/img/sage/cover.png" alt="cover instagram promotion 2" rel="preload" draggable="false">
        <img id="cover-back" class="cover" src="@/assets/img/sage/cover_back.png" alt="cover instagram promotion 2" rel="preload" draggable="false">
      </div>
    </section>
  </div>
  <section class="grid-gallery column">
    <div class="list row">
      <img src="@/assets/img/sage/Instagram-01_1.png" alt="cover illustration part 1" rel="preload" draggable="false">
      <img src="@/assets/img/sage/Instagram-01_2.png" alt="cover illustration part 2" rel="preload" draggable="false">
    </div>
    <div class="list row row-gallery">
      <img src="@/assets/img/sage/cover.png" alt="cover instagram promotion 2" rel="preload" draggable="false">
      <img src="@/assets/img/sage/cover_back.png" alt="cover instagram promotion 2" rel="preload" draggable="false">
    </div>
    <div class="list row row-gallery">
      <img src="@/assets/img/sage/Instagram-02.png" alt="cover instagram promotion 1" rel="preload" draggable="false">
      <img src="@/assets/img/sage/Instagram-03.png" alt="cover instagram promotion 2" rel="preload" draggable="false">
    </div>
    <div class="list row">
      <img src="@/assets/img/sage/disk.png" alt="cover instagram promotion 2" rel="preload" draggable="false">
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
  justify-content: start;
}

.banner>img {
  position: relative;
  width: 40%;
}

.gallery {
  position: relative;
  height: 50vh;
  width: 100%;
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
  height: 50vh;
  z-index: -1;
}

.covers>img {
  height: 100%;
}

.grid-gallery {
  align-items: start;
  justify-content: center;
}

.grid-gallery>div {
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-bottom: 2vh;
}

.grid-gallery>div>img {
  height: 60vh;
}

.grid-gallery>div:nth-child(1)>img {
  height: calc(61vh);
}

.grid-gallery>.row-gallery>img {
  margin-right: 2vh;
}

.grid-gallery>.row-gallery>img:nth-last-child(1) {
  margin-right: 0;
}


@media screen and (max-width: 1020px){

  .grid-gallery {
    width: 75vw;
  }

  .grid-gallery>div>img {
    height: 75vw;
  }
}

</style>