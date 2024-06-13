<script setup lang="ts">

import ProjectCover from "@/components/drive/ProjectCover.vue";
import QueuCover from "@/components/queue/QueueCover.vue";
</script>

<template>
  <h1>Waiting queue</h1>
  <div class="list row">
    <QueuCover class="cover column flex-centered" :cover="'sage'" :title="'sage'" :sub-title="'444flox'"/>
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
    flex-wrap: nowrap;
    overflow-y: scroll;
    scroll-behavior: smooth;
    scrollbar-color: rgba(75,75,75, 0.75) transparent;
    scrollbar-width: thin;
    scrollbar-gutter: stable;
  }

  .cover {
    margin: 0 3vh;
  }

  @media screen and (max-width: 850px) {
    h1 {
      font-size: max(2.75vh, 3.5vw);
      margin-top: min(3vh, 5vw);
    }

    .cover {
      margin: 0 1vh;
    }

    .list {
      height: 80%;
    }

  }
</style>