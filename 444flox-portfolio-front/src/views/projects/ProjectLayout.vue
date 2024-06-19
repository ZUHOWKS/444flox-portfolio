<script setup lang="ts">

import {getCurrentInstance, onMounted, onUpdated, type Ref, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {getProjectIndex, type Project, projects} from "@/modules/utils/projects";
import ProjectsView from "@/views/ProjectsView.vue";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const route = useRoute()
const router = useRouter()
let projectId: number = getProjectIndex(route.path.split('/')[1])

const rank: Ref<string> = ref(((projectId + 1) < 10 ? '0' : '') + (projectId + 1))
const project: Ref<Project> = ref(projects[projectId])

const isDragging = ref(false)
const mouseXPos = ref(0)
const mouseYPos = ref(0)

const draggableWindow: Ref<HTMLElement | null> = ref(null)

function scrollTop() {
  (document.querySelector('.project-container') as HTMLElement).scrollTo({ top: 0, left: 0, behavior: 'smooth'})
  resetArrowScroll();
}

function closeProjectWindow() {
  gsap.to('.project-window', {
    scale: 0,
    duration: 0.1,
    onComplete: () => {
      gsap.set('.project-window',{visibility: 'hidden'})
      router.push('/projects')
    }
  })
}


function setWindowProjectPosition(e: MouseEvent) {
  if (draggableWindow.value) {
    const top = (e.clientY - mouseYPos.value + draggableWindow.value.offsetTop) + 'px'
    const left = (e.clientX - mouseXPos.value + draggableWindow.value.offsetLeft) + 'px'

    draggableWindow.value.style.top = top
    draggableWindow.value.style.left = left

    localStorage.setItem('444flox-w-project-top', top);
    localStorage.setItem('444flox-w-project-left', left);


    if ((document.querySelector('.project-container') as HTMLElement).scrollTop > (document.querySelector('.project-header') as HTMLElement).offsetHeight) {
      gsap.set('.arrow-scroll-move', {
        top: arrowTopPosition,
      })
    } else resetArrowScroll()


  }
}

onMounted(() => {
  if (draggableWindow.value) {
    draggableWindow.value.style.top = "" + localStorage.getItem('444flox-w-project-top')
    draggableWindow.value.style.left = "" + localStorage.getItem('444flox-w-project-left')
  }
  
  if (localStorage.getItem('444flox-reloaded')) {
    // The page was just reloaded. Clear the value from local storage
    // so that it will reload the next time this page is visited.
    localStorage.removeItem('444flox-reloaded');
    gsap.set('.arrow-link-icon', {rotate: -90});
    gsap.set('.arrow-link', {visibility: 'hidden', top: arrowTopPosition() * 2})

    window.addEventListener("mousemove", (e) => {
      if (isDragging.value) {
        setWindowProjectPosition(e)
      }

      mouseXPos.value = e.clientX
      mouseYPos.value = e.clientY
    })
  } else {
    // Set a flag so that we know not to reload the page twice.
    localStorage.setItem('444flox-reloaded', '1');
    getCurrentInstance()?.proxy?.$forceUpdate()
  }

})

onUpdated(() => {
  location.reload();
})

function arrowTopPosition(): number {
  const distWindowFromTop = (document.querySelector('.project-window') as HTMLElement).offsetTop
  const headerHeight = (document.querySelector('.project-window-header') as HTMLElement).offsetHeight

  return distWindowFromTop + headerHeight + Math.min(window.innerHeight, window.innerWidth) * 0.035
}

function resetArrowScroll() {
  gsap.to('.arrow-icon', {rotate: 0, duration: 0.35})
  gsap.set('.arrow-scroll-move', {position: 'absolute', top:'0.45%'})
}

function arrowFollowScroll() {
  gsap.timeline({
    scrollTrigger: {
      scroller: ".project-container",
      trigger: '.main-content',
      start: 'top top',
      end: '1% top',
      onLeaveBack: resetArrowScroll,
      onEnter: () => {
        gsap.to('.arrow-icon', {rotate: 90, duration: 0.35})
        gsap.set('.arrow-scroll-move', {
          position: 'fixed',
          top: arrowTopPosition,
        })
      }
    }
  })
}

function hiddenLinkArrow() {
  const topPos = arrowTopPosition();
  gsap.to('.arrow-link', {opacity: 0, top: topPos * 2, visibility: 'hidden', duration: 0.35});
  gsap.to('.arrow-scroll-move', {opacity: 1, top: topPos, visibility: 'visible', duration: 0.35});

}

function showLinkArrow() {
  const topPos = arrowTopPosition();
  gsap.to('.arrow-link', {opacity: 1, top: topPos, visibility: 'visible',  duration: 0.35});
  gsap.to('.arrow-scroll-move', {opacity: 0, top: topPos * 2, visibility: 'hidden', duration: 0.35});
}

</script>

<template>
  <ProjectsView class="projects"/>
  <div class="project-window box column" ref="draggableWindow" @mousedown="draggableWindow?.style.setProperty('z-index', '2')">
    <div class="project-window-header row" @mousedown="isDragging = true" @mouseup="isDragging = false">
      <img class="close-screen-icon selectable" src="@/assets/icons/close-screen.svg" alt="close screen icon" draggable="false" rel="preload" @click="closeProjectWindow">
      <h1 class="window-title">{{ project.title }}</h1>
    </div>
    <div class="project-container">
      <div class="project-header row">
        <div class="rank column">
          <div>
            <h1>{{ rank }}</h1>
            <p>{{ project.year }}</p>
          </div>

        </div>
        <div class="title-desc column">
          <h1>{{ project.title }}</h1>
          <p class="desc">{{ project.description }}</p>
        </div>

      </div>
      <div class="blog-content row">
        <div class="side-content">
          <div class="arrow-action arrow-scroll-move column selectable" @click="scrollTop()">
            <img class="arrow arrow-icon" src="@/assets/icons/arrow.svg" alt="arrow scroll" rel="preload" draggable="false">
            <p class="arrow-text">Back</p>
          </div>

          <div class="arrow-action arrow-link column selectable">
            <img class="arrow arrow-link-icon" src="@/assets/icons/arrow.svg" alt="arrow scroll" rel="preload" draggable="false">
            <p class="arrow-text arrow-link-text">Link</p>
          </div>
        </div>
        <div class="main-content">
          <RouterView :arrow-top-position="arrowTopPosition" :arrow-follow-scroll="arrowFollowScroll" :show-link-arrow="showLinkArrow" :hidden-link-arrow="hiddenLinkArrow"/>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>

  .project-window {
    position: fixed;
    width: calc(70vw + 5vh);
    height: 75vh;
    left: 0.75%;
    top: 10%;
    padding: calc(1% - 0.5vw);
    background: var(--header-c);
    border-radius: 8px;
    margin-bottom: 5%;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
  }

  .project-window>.project-window-header {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: var(--background-c);
    width: calc(100%);
    height: 14.5%;
    align-items: center;
  }

  .project-window-header>.close-screen-icon {
    justify-self: start;
    height: 70%;
    margin: 1.5%;
  }

  .project-window-header>.window-title {
    justify-self: center;
    width: 80%;
    font-size: calc(1vh + 4.5vw);
    text-align: center;
    text-transform: uppercase;
  }

  .project-container {
    width: 100%;
    height: 84.5%;
    background: var(--background-c);
    z-index: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    border-radius: 8px;
  }

  .project-container>.project-header {
    width: 100%;
    padding-top: 4%;
    padding-bottom: 12%;
  }

  .project-container> .blog-content, .project-header {
    position: relative;
    width: 100%;
  }

  .blog-content>.side-content, .project-header>.rank {
    padding: 1% 1%;
    height: 100%;
  }

  .blog-content>.main-content, .project-header>.title-desc {
    padding-top: 1%;
    width: 90%;
    height: 100%;
  }

  .container>.blog-content {
    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
  }

  .project-header h1 {
    font-weight: bold;
    text-transform: uppercase;
    font-family: vcr-osd-neue, serif;
    font-size: min(9vh, 9vw);
    line-height: min(7vh, 7vw);
  }

  .project-header>.rank {
    width: 15%;
  }

  .project-header p {
    font-size: min(2vh, 2vw);
    line-height: min(2vh, 2vw);
  }

  .project-header .desc {
    font-family: VT323, serif;
    font-weight: 400;
    text-align: justify;
    font-size: min(3vh, 3vw);
    line-height: min(3vh, 3vw);
  }

  .title-desc>.desc {
    width: 67.5%;
    white-space: pre-wrap;
  }

  .title-desc>h1 {
    font-size: min(11vh, 11vw);
    line-height: min(9vh, 9vw);
  }

  .blog-content>.side-content {
    min-height: 100vh;
    width: 10%;
    max-width: 10vw;
  }

  .blog-content>.main-content {
    max-width: 90vw;
    min-height: 100vh;
  }

  .arrow-action {
    position: absolute;
    top: 0.45%;
    justify-content: center;
    width: max-content;
    filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.5));
    z-index: 1;
  }

  .arrow-link {
    position: fixed;
    visibility: hidden;
  }

  .arrow-link>.arrow-link-icon {
    rotate: -90deg;
    transition: .35s;
  }

  .arrow-link:hover>.arrow-link-icon {
    rotate: -180deg;
  }

  .arrow-action>.arrow {
    height: 100%;
    width: 100%;
  }

  .arrow-action>.arrow-text {
    text-transform: uppercase;
    font-size: min(3.5vh, 3.5vw);
  }

  @media screen and (max-width: 1020px){

    .project-window {
      width: calc(80vw + 5vh);
      height: 80vh;
      left: 2%;
      top: 11%;
    }

    .title-desc>.desc {
      width: 85%;
    }

    .project-header h1 {
      font-size: min(10vh, 10vw);
      line-height: min(8vh, 8vw);
    }

    .project-header>.title-desc {
      width: 80%;
    }

    .project-header>.rank, .blog-content>.side-content {
      width: 22.5%;
    }

    .blog-content>.side-content {
      padding-right: 5vw;
    }

    .blog-content>.main-content {
      width: 77.5%;
      padding-left: 2vw;
    }


    .project-header p {
      font-size: min(3vh, 3vw);
      line-height: min(3vh, 3vw);
    }

    .project-header .desc {
      font-size: min(4vh, 4vw);
      line-height: min(4vh, 4vw);
    }

    .arrow-action {
      margin: 0 5% 0 1%;
    }

    .arrow-action>.arrow {
      height: 65%;
      width: 65%;
    }

    .arrow-action>.arrow-text {
      font-size: min(3vh, 3vw);
    }
  }

  @media screen and (max-width: 720px){
    .project-header h1 {
      font-size: min(11.5vh, 11.5vw);
      line-height: min(11.5vh, 11.5vw);
      text-wrap: wrap;
    }
  }
</style>