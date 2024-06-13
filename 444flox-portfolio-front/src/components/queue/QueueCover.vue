<script setup lang="ts">
import {onMounted, type Ref, ref} from "vue";

const props = defineProps(['cover', 'title', 'subTitle'])

const titleElem: Ref<HTMLElement | null> = ref(null)
const subTitleElem: Ref<HTMLElement | null> = ref(null)

onMounted(() => {
  if (titleElem.value && subTitleElem.value) {
    if (props.title.toString().length > 10) {
      const fontSize = 1.5 / Math.max(1, 1.025 * props.title.toString().length/10)
      titleElem.value.style.fontSize = "max(" + fontSize + "vh, min(" + fontSize + "vw, " + (fontSize + 0.75) + "vh))"
    }
  }
})

</script>

<template>
  <div class="cover column">
    <img class="project-in-queue user-unselect-any" :src="'./covers/' + cover + '-cover.png'" alt="queued project cover" draggable="false">
    <div class="title-container column flex-centered">
      <h1 class="project-title" ref="titleElem">{{ title }}</h1>
      <h2 class="project-type" ref="subTitleElem">{{ subTitle }}</h2>
    </div>

  </div>

</template>

<style scoped>
h1, h2 {
  font-family: Modeseven, serif;
  text-align: center;

}

.cover {
  justify-content: space-between;
  height: 80%;
  padding: 2.5% 0;
}

.project-in-queue {
  width: min(15vh, 10vw);
  object-fit: contain;
  filter: drop-shadow(1px 1px 4px rgba(0,0,0, 0.35));
}

.project-title {
  text-transform: uppercase;
  color: var(--text-header-c);
  font-size: max(1.5vh, min(1.5vw, 2.25vh));
  filter: drop-shadow(1px 1px 4px rgba(0,0,0, 0.3));

}

.project-type {
  font-size: max(1vh, min(1vw, 2vh));
  color: var(--text-hover-header-c);
  filter: drop-shadow(1px 1px 3px rgba(0,0,0, 0.4));
}

.title-container {
  height: 40%;
  margin-top: 5%;
  justify-content: start;
  line-height: 1.35em;
}

@media screen and (max-width: 850px) {

  .project-in-queue {
    width: min(20vh, 17.5vw);
    min-width: 65px;
  }
}

</style>