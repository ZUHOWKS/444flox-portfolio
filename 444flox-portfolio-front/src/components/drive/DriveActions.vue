<script setup lang="ts">

</script>

<template>
  <div class="drive-actions row flex-centered">
    <img class="selectable" src="../../assets/icons/previous.svg" alt="previous icon" draggable="false">
    <img class="selectable" src="../../assets/icons/play.svg" alt="play icon" draggable="false">
    <img class="selectable" src="../../assets/icons/next.svg" alt="next icon" draggable="false">
  </div>
</template>

<style scoped>
div {
  margin: 2.5% 0;
  height: 100%;
  width: 100%;
  justify-content: space-around;
}

div>img {
  min-height: 22.5%;
  height: calc(1.25vh + 2.5vw);
  max-height: 40%;
  object-fit: contain;
  filter: drop-shadow(2px 0px 2px rgba(0,0,0, 0.35));
}

@media screen and (max-width: 850px){
  div {
    margin: 2.5% 0;
    align-items: end;
  }

  div>img {
    margin: 2% 0;
  }
}

</style>