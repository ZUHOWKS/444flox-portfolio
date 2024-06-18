<script setup lang="ts">

  import {onMounted} from "vue";

  const props = defineProps(['arrowFollowScroll'])

  onMounted(() => {
    props.arrowFollowScroll()
  })
</script>

<template>
  <div class="gallery">
    <section class="banner list">
      <img src="@/assets/img/cavalry/instagram-1.png" alt="Instagram post 1 cavalry" rel="preload" draggable="false">
    </section>

    <section class="covers row list">
      <img src="@/assets/img/cavalry/cover.png" alt="Cover cavalry" rel="preload" draggable="false">
      <img src="@/assets/img/cavalry/cover-back.png" alt="Cover-back cavalry" rel="preload" draggable="false">
    </section>

    <section class="posts row">
      <div class="row list">
        <img src="@/assets/img/cavalry/instagram-2.png" alt="Instagram post 2 cavalry" rel="preload" draggable="false">
      </div>
      <div class="column list">
        <img src="@/assets/img/cavalry/instagram-3.png" alt="Instagram post 3 cavalry" rel="preload" draggable="false">
        <img src="@/assets/img/cavalry/instagram-4.png" alt="Instagram post 4 cavalry" rel="preload" draggable="false">
      </div>
    </section>
  </div>


</template>

<style scoped>
  img {
    object-fit: contain;
  }

  section {
    margin-bottom: 2vh;
    margin-left: 2vh;
    padding: 0 2vh;
    width: calc(100% - 2vh);
  }

  .banner>img {
    width: 100%
  }

  .banner>img {
    width: 100%;
  }

  .covers>img {
    width: calc(50% - 1vh);
  }

  .covers>img:nth-child(1) {
    margin-right: 2vh;
  }

  .posts {
    flex-wrap: wrap;
  }

  .posts>.row {
    width: calc(65% + 1.5vh);
    justify-content: start;
    align-items: start;
  }

  .posts>.row>img {
    width: 100%;
  }

  .posts>.column {
    width: calc(35% - 1.5vh);
    justify-content: space-between;
    align-items: end;

  }

  .posts>.column>img {
    height: calc(50% - 1vh);
  }

  @media screen and (max-width: 1775px) {
    .posts>.row {
      width: 100%;
      margin-bottom: 2vh;
    }

    .posts>.column {
      width: 100%;
      overflow-x: scroll;
      flex-direction: row;
    }

    .posts>.column>img {
      height: 80vh;
    }

    .posts>.column>img:nth-child(1) {
      margin-right: 2vh;
    }
  }

  @media screen and (max-width: 1020px) {
    .gallery {
      width: 70vw;
    }
    .covers, .banner {
      width: 100%;
      overflow-x: scroll;
    }

    .banner>img {
      width: unset;
      height: 60vh;
      margin-right: 4vh;
    }

    .covers>img {
      width: 75vw;
      margin-right: 2vh;
    }

    .posts>.row {
      width: 100vw;
      height: 100%;
      overflow-x: scroll;
    }

    .posts>.row>img {
      width: 100vw;

    }
  }

</style>