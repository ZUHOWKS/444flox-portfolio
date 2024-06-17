<script setup lang="ts">
const props = defineProps(['cover', 'title', 'subTitle'])
</script>

<template>
  <div class="cover column flex-centered">
    <img class="project-listened user-unselect-any" :src="'./covers/' + cover + '-cover.png'" alt="listened project cover" draggable="false" rel="preload">
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
  text-overflow: ellipsis;
}

.cover {
  height: 40vh;
  width: min(37.5vh, 37.5vw);
  max-width: 40vh;
  min-width: 25vh;
}

.project-listened {
  width: 100%;
  height: 80%;
  object-fit: contain;
  filter: drop-shadow(2px 2px 6px rgba(0,0,0, 0.4));
}

.title-container {
  justify-content: space-between;
  margin-top: 1%;
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
    height: max(30vh, 24vw);
    width: min(25vh, 25vw);
    max-width: 30vh;
    min-width: 15vh;
    justify-content: center;
  }

  .project-listened {
    width: 100%;
    height: min(28vh, 24vw);
    min-height: 15.5vh;
  }

  .title-container {
    margin-bottom: min(0.25vw, 0.1vh);
  }

  .project-title {
    font-size: max(1.75vh, min(3vw, 3.5vh));
    animation: textSwitch1 4s infinite linear;
  }

  .project-type {
    position: absolute;
    line-height: max(2.65vh, min(3.85vw, 4vh));
    animation: textSwitch2 4s infinite linear;
    font-size: max(1.5vh, min(2.1vw, 2.35vh));
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