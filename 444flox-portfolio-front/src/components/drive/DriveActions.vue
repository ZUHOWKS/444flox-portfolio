<script setup lang="ts">
  import {useRouter} from "vue-router";

  const props=defineProps(['next', 'previous', 'projectListened'])

  const router = useRouter();
</script>

<template>
  <div class="drive-actions row flex-centered">
    <img class="selectable" src="../../assets/icons/previous.svg" alt="previous icon" draggable="false" @click="previous" rel="preload">
  <img class="selectable" src="../../assets/icons/play.svg" alt="play icon" draggable="false" @click="router.push('/' + projectListened.coverName)">
    <img class="selectable" src="../../assets/icons/next.svg" alt="next icon" draggable="false" @click="next" rel="preload">
  </div>
</template>

<style scoped>
div {
  height: 20%;
  width: 100%;
  justify-content: space-around;
}

div>img {
  min-height: 22.5%;
  height: calc(1.25vh + 2.5vw);
  max-height: 33%;
  object-fit: contain;
  filter: drop-shadow(2px 0px 2px rgba(0,0,0, 0.35));
}

@media screen and (max-width: 860px){
  div {
    height: 10%;
    margin-bottom: 7.5%;
    align-items: center;
  }

  div>img {
    max-height: 70%;
    margin: 2% 0;
  }
}

</style>