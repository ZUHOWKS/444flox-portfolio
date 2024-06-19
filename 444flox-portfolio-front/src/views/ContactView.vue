<script setup lang="ts">
import gsap from "gsap";

const props = defineProps(['closeMainWindow'])

const email='florent.btl@gmail.com'

function copyMail() {
  navigator.clipboard.writeText(email)
  const showInfoMessage = gsap.timeline();

  showInfoMessage.addLabel('start')
      .set('.info-message', {
        opacity: 1,
      })
      .addLabel('end')
      .set('.info-message', {
        opacity: 0,
        delay: 5,
      });
}

</script>

<template>
<div class="flox-desk column flex-centered">
  <div class="main-window box column flex-centered">
    <div class="box-header row">
      <img class="close-screen-icon selectable" src="@/assets/icons/close-screen.svg" alt="close screen icon" draggable="false" rel="preload" @click="closeMainWindow">
      <img class="logo" src="@/assets/img/logo/444flox-logo-white.svg" alt="444flox logo" draggable="false" rel="preload">
    </div>
    <div class="box-content column flex-centered">
      <h1>Instagram: <a href="https://www.instagram.com/444flox/" target="_blank">444Flox</a></h1>
      <h1>Mail: <a @click="copyMail">florent.btl@gmail.com</a></h1>
      <h1>Twitter: <a href="https://x.com/444flox" target="_blank">444Flox</a></h1>
      <p class="info-message">Copied !</p>
    </div>

  </div>
</div>

</template>

<style scoped>
.flox-desk {
  position: fixed;
  height: 100%;
  width: 100%;
  background-image: url('@/assets/img/background.png');
  background-position: center;
  background-size: max(175vh, 150vw);
}

.box {
  max-height: 80%;
  height: calc(85% - 1vw);
  min-height: 77.5%;
  max-width: 100vh;
  width: calc(95% - 15vw);
  min-width: 43vh;
  background: var(--header-c);
  border-radius: 8px;
  margin-bottom: 5%;
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

.box-header>.close-screen-icon {
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

.box-content> h1,a {
  font-size: calc(2vw + 1vh);
  font-weight: 800;
  text-transform: lowercase;
  text-align: center;
}

.box-content>h1 {
  margin: 2.5% 0;
  text-transform: uppercase;
}

.box-content>h1>a:hover {
  text-decoration: underline;
}

.info-message {
  position: absolute;
  bottom: 15%;
  opacity: 0;
  font-size: min(2vh, 2.5vw);
}

@media screen and (max-width: 1120px) {
  .box-content> h1,a {
    font-size: max(3.25vh, 4vw);
  }
}


</style>