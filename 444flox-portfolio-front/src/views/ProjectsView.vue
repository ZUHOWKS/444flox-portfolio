<script setup lang="ts">

import ProjectCover from "@/components/drive/ProjectCover.vue";
import DriveActions from "@/components/drive/DriveActions.vue";
import WaitingQueue from "@/components/queue/WaitingQueue.vue";
import Playlist from "@/components/playlist/Playlist.vue";
import {onMounted, onUpdated, type Ref, ref} from "vue";
import {type Project, projects} from "@/modules/utils/projects";
import gsap from 'gsap'

const projectListened: Ref<Project> = ref(projects[0])
const _projectListened: Ref<Project> = ref(projects[0])
const projectsQueued = ref(projects.slice())


onMounted(() => {
  const listened: string | null = localStorage.getItem('444flox_listened')
  if (!listened) localStorage.setItem('444flox_listened', projectListened.value.coverName)
  else {
    projects.forEach((_p) => {
      if (_p.coverName === listened) {
        projectListened.value = _p;
        hardRefreshQueue();
        return;
      }
    })
  }
})

function selectInQueue(coverName: string) {
  refreshQueue(coverName)
}

function hardRefreshQueue() {
  let listened: string | null = localStorage.getItem('444flox_listened')

  if (!listened) listened = projects[0].coverName

  let i: number = 0;
  let cont: boolean = true;
  while (i < projectsQueued.value.length && cont) {
    if (projectsQueued.value[0].coverName === listened) {
      cont = false;
    }
    projectsQueued.value.push(projectsQueued.value.shift() as Project)
    i++;
  }
}

function refreshQueue(coverName: string) {

  let i: number = 0;
  let cont: boolean = true;

  while ((i < projectsQueued.value.length)&& cont) {

    if (projectsQueued.value[0].coverName === coverName) {
      nextProject();
      cont = false;
    } else {
      projectsQueued.value.push(projectsQueued.value.shift() as Project)
      i++;
    }

  }

}

function nextProject() {
  localStorage.setItem('444flox_listened', projectsQueued.value[0].coverName)

  gsap.fromTo('#listened-transition-cover', {opacity: 1, visibility: 'visible', x:0 + "%"}, {opacity: 0, x:-100 + "%", duration: 0.35, onComplete: () => {gsap.to('#listened-transition-cover', {visibility: 'hidden', duration: 0})}})
  gsap.fromTo('#listened-cover', {opacity: 0, x:100 + "%"}, {opacity: 1, x:0 + "%", duration: 0.35});
  _projectListened.value = projectListened.value;
  projectListened.value=projectsQueued.value[0];
  projectsQueued.value.push(projectsQueued.value.shift() as Project)



}

function previousProject() {
  localStorage.setItem('444flox_listened', projectsQueued.value[projectsQueued.value.length-2].coverName)

  gsap.fromTo('#listened-transition-cover', {opacity: 1, visibility: 'visible', x:0 + "%"}, {opacity: 0, x:100 + "%", duration: 0.35, onComplete: () => {gsap.to('#listened-transition-cover', {visibility: 'hidden', duration: 0})}})
  gsap.fromTo('#listened-cover', {opacity: 0, x:-100 + "%"}, {opacity: 1, x:0 + "%", duration: 0.35});

  _projectListened.value = projectListened.value;
  projectListened.value=projectsQueued.value[projectsQueued.value.length-2];

  const p = projectsQueued.value.pop() as Project
  projectsQueued.value = [p].concat(projectsQueued.value)
}

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
        <div class="cover-container row flex-centered">
          <ProjectCover class="cover-transition" id="listened-transition-cover" :cover="_projectListened.coverName" :title="_projectListened.title" :sub-title="_projectListened.category"/>
          <ProjectCover class="cover" id="listened-cover" :cover="projectListened.coverName" :title="projectListened.title" :sub-title="projectListened.category"/>
        </div>
        <DriveActions class="drive-actions user-unselect-any" :next="nextProject" :previous="previousProject" :projectListened="projectListened"/>
      </div>
      <div class="menu column">
        <div class="queue">
          <WaitingQueue :select="selectInQueue" :projects-queued="projectsQueued"/>
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
  justify-content: start;
  align-items: center;
}

.drive>.cover-container {
  max-height: 80%;
  width: 100%;
  display: flex;
  margin-top: 10%;
  margin-bottom: 5%;
}

.cover-container>.cover-transition {
  position: absolute;
  transform: translateX(100%);
  opacity: 0;
  visibility: hidden;
  z-index: 1;
}

.cover-container>.cover {
  z-index: 1;
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
    justify-content: space-evenly;
  }

  .box-content>.menu {
    width: 55%;

  }

  .drive>.cover-container {
    margin-top: 4%;
    margin-bottom: 0;
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

@media screen and (max-width: 655px){
  .menu>.playlists {
    max-height: 40.5vh;
  }
}

</style>