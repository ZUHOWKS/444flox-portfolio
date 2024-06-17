<script setup lang="ts">

import {type Ref, ref} from "vue";
import {useRoute} from "vue-router";
import {getProjectIndex, type Project, projects} from "@/modules/utils/projects";

const route = useRoute()
const projectId: number = getProjectIndex(route.path.split('/')[1])

const rank: Ref<string> = ref(((projectId + 1) < 10 ? '0' : '') + (projectId + 1))
const project: Ref<Project> = ref(projects[projectId])

function scrollTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})
}


</script>

<template>
  <div class="container">
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
        <div class="arrow-scroll-move column">
          <img class="arrow-icon selectable" src="@/assets/icons/arrow.svg" alt="arrow scroll" rel="preload" @click="scrollTop()">
          <p class="arrow-text">Back</p>
        </div>
      </div>
      <div class="main-content">
        <RouterView/>
      </div>
    </div>

  </div>
<h1></h1>
</template>

<style scoped>

  .container {
    width: 100vw;
    min-height: 100vh;
  }

  .container>.project-header {
    height: 45vh;
    width: 100vw;
    padding-top: 4%;
  }

  .container> .blog-content, .project-header {
    position: relative;
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
    justify-content: center;
    width: 100%;
  }

  .arrow-scroll-move>.arrow-icon {
    height: 30%;
    width: 30%;
  }

  .arrow-scroll-move>.arrow-text {
    text-transform: uppercase;
  }
</style>