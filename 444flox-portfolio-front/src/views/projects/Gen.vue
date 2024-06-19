<script setup lang="ts">
import {onMounted} from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const props = defineProps(['arrowFollowScroll', 'arrowTopPosition', 'hiddenLinkArrow', 'showLinkArrow'])

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  (document.querySelector('.arrow-link') as HTMLElement).addEventListener('click', () => window.location.href = 'https://www.figma.com/proto/fvewfNrVGc507ACE51tEjW/gen-app?page-id=0%3A1&node-id=1-2&viewport=-707%2C1335%2C1.15&t=iLImeat4Kp8yeuna-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2')

  props.arrowFollowScroll();
  gsap.timeline({
    scrollTrigger: {
      scroller: ".project-container",
      trigger: '.view-app',
      start: '-15% top',
      end: () => ((document.querySelector('.view-app') as HTMLElement).offsetHeight * 0.8) + "px",
      onLeaveBack: props.hiddenLinkArrow,
      onLeave: props.hiddenLinkArrow,
      onEnter: props.showLinkArrow,
      onEnterBack: props.showLinkArrow,
    }
  });

  (document.querySelector('.arrow-link-text') as HTMLElement).innerText = 'app'

})
</script>

<template>
  <section class="gallery">
    <div class="row list">
      <img src="@/assets/img/gen/mockup-app.png" alt="mockup app gen" rel="preload" draggable="false">
    </div>
    <div class="view-app row list">
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