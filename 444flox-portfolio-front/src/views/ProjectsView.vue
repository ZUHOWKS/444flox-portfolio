<script setup lang="ts">

import ProjectCover from "@/components/ProjectCover.vue";
import SageCover from "@/assets/img/sage-cover.png";
import DriveActions from "@/components/DriveActions.vue";

</script>

<template>
<div class="container column flex-centered">
  <div class="box column flex-centered">
    <div class="box-header row">
      <img class="full-screen-icon" src="@/assets/icons/full-screen.svg" alt="full screen icon">
      <img class="logo" src="@/assets/img/logo/444flox-logo-white.svg" alt="444flox logo">
    </div>
    <div class="box-content row flex-centered">
      <div class="drive column flex-centered">
        <ProjectCover class="cover" :cover="SageCover" :title="'sage'" :sub-title="'direction artistique'"></ProjectCover>
        <DriveActions class="drive-actions"></DriveActions>
      </div>
      <div class="menu column">
        <div class="queue">

        </div>

        <div class="playlists">

        </div>
      </div>

    </div>
  </div>
</div>
</template>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  background-image: url('@/assets/img/background.png');
  background-position: center;
  background-size: max(175vh, 150vw);
}

.box {
  max-height: 90%;
  height: calc(85% - 1vw);
  min-height: 77.5%;
  max-width: 100vh;
  width: calc(95% - 15vw);
  min-width: 43vh;
  background: var(--header-c);
  border-radius: 8px;

}

.box>.box-header {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 7px 8px;
  background: var(--background-c);
  width: calc(100% - 16px);
  height: calc(16% - 14px);

  align-items: center;
}

.box-header>.full-screen-icon {
  justify-self: start;
  height: 70%;
  margin: 1.5%;
}

.box-header>.logo {
  justify-self: center;
  width: 80%;
  height: 50%;
}

.box>.box-content {
  height: calc(100% - calc(18% - 14px));
  width: 100%;
}

.box>.box-content h1,h2,h3,a,p {
  font-family: Modeseven, serif;
  color: var(--text-header-c);
}

.box>.box-content img {
  filter: drop-shadow(0px 2px 6px rgba(0,0,0, 0.45));
}

.box-content>.drive {
  width: 35%;
  min-width: 17.5vh;
  height: 100%;

}

.drive>.cover {
  max-height: 65%;
  width: 100%;
}

.drive>.drive-actions {
  max-height: 20%;
  width: 100%;
}

.box-content>.menu {
  width: 65%;
  height: 100%;
}

.menu>.queue {
  width: 100%;
  height: 35%;
  opacity: 0.25;

}

.menu>.playlists {
  width: 100%;
  height: 65%;

}

@media screen and (max-width: 850px){

  .box-content {
    align-items: start;
  }

  .box-content>.drive {
    width: 45%;
    height: min(38vh, 38vw);
    min-height: 25vh;
  }

  .box-content>.menu {
    width: 55%;

  }

  .menu>.playlists {
    width: 200%;
    translate: -50%;
    justify-self: center;
    height: calc(100% - min(38vh, 38vw));
  }

  .menu>.queue {
    height: min(38vh, 38vw);
    min-height: 25vh;

  }
}

</style>