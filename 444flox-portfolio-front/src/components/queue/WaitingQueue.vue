<script setup lang="ts">

import QueueCover from "@/components/queue/QueueCover.vue";
import {onMounted, type Ref, ref} from "vue";

const props=defineProps(['select', 'projectsQueued'])

const listElem: Ref<HTMLElement | null> = ref(null)

function scrollWheel(evt: any) {
  evt.preventDefault();
  if (listElem.value) {

    listElem.value.scrollLeft += ((evt.deltaX + evt.deltaY) * 6);


  }
}

</script>

<template>
  <h1>Waiting queue</h1>
  <div class="list row" @wheel="(evt) => scrollWheel(evt)" ref="listElem">
    <QueueCover v-for="project of projectsQueued" class="cover column flex-centered selectable" :cover="project.coverName" :title="project.title" :sub-title="project.author" @click="select(project.coverName)"/>
  </div>

</template>

<style scoped>
  h1 {
    margin-top: 6.5%;
    font-size: max(2.25vh, 1.5vw);
    line-height: 100%;
    color: var(--text-header-c);
  }

  .list {
    height: calc(83% - 0.75vw);
    overflow-y: scroll;
    align-items: start;
  }

  .cover {
    margin: 0 1vh;
  }

  .cover-container {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }

  @media screen and (max-width: 860px) {
    h1 {
      font-size: 2.75vh;
      margin-top: min(3vh, 5vw);
    }

    .cover {
      margin: 0 1vh;
    }

    .list {
      height: 80%;
      align-items: center;
    }

  }
</style>