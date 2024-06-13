<script setup lang="ts">

import ProjectCover from "@/components/drive/ProjectCover.vue";
import DriveActions from "@/components/drive/DriveActions.vue";
import WaitingQueue from "@/components/queue/WaitingQueue.vue";
import Playlist from "@/components/playlist/Playlist.vue";

</script>

<template>
<div class="container column flex-centered">
  <div class="box column flex-centered">
    <div class="box-header row">
      <img class="full-screen-icon" src="@/assets/icons/full-screen.svg" alt="full screen icon" draggable="false">
      <img class="logo" src="@/assets/img/logo/444flox-logo-white.svg" alt="444flox logo" draggable="false">
    </div>
    <div class="box-content row flex-centered">
      <div class="drive column flex-centered">
        <ProjectCover class="cover" :cover="'sage'" :title="'sage'" :sub-title="'direction artistique'"/>
        <DriveActions class="drive-actions user-unselect-any"></DriveActions>
      </div>
      <div class="menu column">
        <div class="queue">
          <WaitingQueue/>
        </div>

        <div class="playlists column">
          <Playlist/>
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

  overflow: hidden;

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
  width: 40%;
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
  width: 60%;
  height: 100%;
}

.menu>.queue {
  width: 100%;
  height: 45%;
}

.menu>.playlists {
  width: 100%;
  height: 55%;
}

@media screen and (max-width: 860px){

  .box-content {
    align-items: start;
  }

  .box-content>.drive {
    width: 45%;
    height: min(38vh, 38vw);
    min-height: 25vh;
    justify-content: center;
  }

  .box-content>.menu {
    width: 55%;

  }

  .menu>.playlists {
    width: 176%;
    translate: -45%;
    justify-self: center;
    height: calc(100% - min(36vh, 36vw));
    max-height: 38vh;
    margin: 0 3.5% 0 3.5%;
  }

  .menu>.queue {
    height: min(38vh, 38vw);
    min-height: 25vh;

  }
}

</style>