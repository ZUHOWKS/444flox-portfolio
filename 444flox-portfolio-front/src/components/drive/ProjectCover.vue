<script setup lang="ts">
const props = defineProps(['cover', 'title', 'subTitle'])
</script>

<template>
  <div class="cover column flex-centered">
    <img class="project-listened user-unselect-any" :src="'./covers/' + cover + '-cover.png'" alt="listened project cover" draggable="false">
    <div class="title-container column flex-centered">
      <h1 class="project-title">{{ title }}</h1>
      <h2 class="project-type">{{ subTitle }}</h2>
    </div>
  </div>

</template>

<style scoped>
h1, h2 {
  font-family: Modeseven, serif;
  white-space: nowrap;
}

.project-listened {
  width: 100%;
  max-width: 80%;
  height: 100%;
  max-height: 54vh;
  min-width: 19vh;
  object-fit: contain;
  filter: drop-shadow(2px 2px 6px rgba(0,0,0, 0.4));
}

.title-container {
  margin: 1% 0;
  justify-content: space-between;
}

.project-title {
  text-transform: uppercase;
  color: var(--text-header-c);
  font-size: max(2.25vh, min(3vw, 4.5vh));
  filter: drop-shadow(2px 2px 6px rgba(0,0,0, 0.35));
}

.project-type {
  font-size: max(1.25vh, min(1.5vw, 2.5vh));
  color: var(--text-hover-header-c);
  filter: drop-shadow(2px 2px 4px rgba(0,0,0, 0.45));
  line-height: 0;
}

@media screen and (max-width: 860px) {

  .cover {
    justify-content: end;
  }

  .project-listened {
    width: min(26vh, 20vw);
    height: min(26vh, 20vw);
    min-height: 14vh;
  }

  .title-container {
    margin-bottom: 0;
    margin-top: 1%;
  }

  .project-title {
    font-size: max(1.75vh, min(3vw, 3.5vh));
  }

  .project-type {
    font-size: max(1.1vh, min(1vw, 2vh));
  }

  .project-title {
    animation: textSwitch1 4s infinite linear;
  }

  .project-type {
    position: absolute;
    line-height: max(3vh, min(4vw, 3.75vh));
    animation: textSwitch2 4s infinite linear;
    font-size: max(1.45vh, min(1.65vw, 2.25vh));
  }

  @keyframes textSwitch1 {
    0%, 42.5%, 100% {
      opacity: 1;
    }
    47.5%, 97.5% {
      opacity: 0;
    }
  }

  @keyframes textSwitch2 {
    0%, 47.5%, 97.5%, 100% {
      opacity: 0;
    }
    50%, 92.5% {
      opacity: 1;
    }
  }
}

</style>