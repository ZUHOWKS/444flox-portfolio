<script setup lang="ts">

import PlaylistElement from "@/components/playlist/PlaylistElement.vue";
import {projects} from "@/modules/utils/projects";

</script>

<template>
  <h1>Playlist of user</h1>
  <div class="list column">
    <PlaylistElement v-for="project of projects" class="cover" :cover="project.coverName" :title="project.title" :sub-title="project.author + ', ' + project.category"/>
  </div>
</template>

<style scoped>

h1 {
  margin: 1% 0;
  font-size: max(2.25vh, 1.5vw);
  line-height: 100%;
  color: var(--text-header-c);
}
.list {
  width: 100%;
  height: 100%;
  overflow-x: scroll;
}


</style>