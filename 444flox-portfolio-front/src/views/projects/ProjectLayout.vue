<script setup lang="ts">

import {onMounted, type Ref, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {getProjectIndex, type Project, projects} from "@/modules/utils/projects";
import ProjectsView from "@/views/ProjectsView.vue";
import gsap from "gsap";

const route = useRoute()
const router = useRouter()
const projectId: number = getProjectIndex(route.path.split('/')[1])

const rank: Ref<string> = ref(((projectId + 1) < 10 ? '0' : '') + (projectId + 1))
const project: Ref<Project> = ref(projects[projectId])

function scrollTop() {
  (document.querySelector('.project-container') as HTMLElement).scrollTo({ top: 0, left: 0, behavior: 'smooth'})
}

function hiddenWindow() {
  gsap.to('.project-window', {
    scale: 0,
    duration: 0.25,
    onComplete: () => {
      gsap.set('.project-window',{visibility: 'hidden'})
      router.push('/projects')
    }
  })
}


onMounted(() => {
  if (!localStorage.getItem('444flox-reloaded')) {
    gsap.set('.project-window', {
      visibility: 'visible',
    })
  }
})

function arrowTopPosition(): number {
  const distWindowFromTop = (document.querySelector('.project-window') as HTMLElement).offsetTop
  const headerHeight = (document.querySelector('.project-window-header') as HTMLElement).offsetHeight
  return distWindowFromTop + headerHeight + Math.min(window.innerHeight, window.innerWidth) * 0.05
}

</script>

<template>
  <ProjectsView class="projects"/>
  <div class="project-window column">
    <div class="project-window-header row">
      <img class="full-screen-icon selectable" src="@/assets/icons/full-screen.svg" alt="full screen icon" draggable="false" rel="preload" @click="hiddenWindow">
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
          <div class="arrow-scroll-move column selectable" @click="scrollTop()">
            <img class="arrow-icon" src="@/assets/icons/arrow.svg" alt="arrow scroll" rel="preload" draggable="false">
            <p class="arrow-text">Back</p>
          </div>
        </div>
        <div class="main-content">
          <RouterView :arrow-top-position="arrowTopPosition"/>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>

  .projects {
    position: fixed;
    width: 100vw;
  }

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
    visibility: hidden;
  }

  .project-window>.project-window-header {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: var(--background-c);
    width: calc(100%);
    height: 14.5%;
    align-items: center;
  }

  .project-window-header>.full-screen-icon {
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
    font-size: min(10vh, 10vw);
    line-height: min(8vh, 8vw);
  }

  .project-header>.rank {
    width: 12.5%;
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
    width: 47.5%;
  }

  .title-desc>h1 {
    font-size: min(16vh, 16vw);
    line-height: min(13vh, 13vw);
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

  .arrow-scroll-move {
    position: absolute;
    top: 0.1%;
    justify-content: center;
    width: max-content;
    filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.5));
    z-index: 1;
  }

  .arrow-scroll-move>.arrow-icon {
    height: 100%;
    width: 100%;
  }

  .arrow-scroll-move>.arrow-text {
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
      font-size: min(15vh, 15vw);
      line-height: min(13vh, 13vw);
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
      font-size: min(4vh, 4vw);
      line-height: min(4vh, 4vw);
    }

    .project-header .desc {
      font-size: min(6vh, 6vw);
      line-height: min(6vh, 6vw);
    }

    .arrow-scroll-move {
      margin: 0 5% 0 1%;
    }

    .arrow-scroll-move>.arrow-icon {
      height: 65%;
      width: 65%;
    }

    .arrow-scroll-move>.arrow-text {
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