<script setup lang="ts">

</script>

<template>
  <main class="column flex-centered">
    <div class="title column flex-centered">
      <img class="logo user-unselect-any" src="@/assets/img/logo/444flox-logo-white.svg" alt="logo" draggable="false" rel="preload">
      <h2>bienvenue!</h2>
      <div class="pixel-border-container row flex-centered">
        <img class="pixel-border user-unselect-any" src="@/assets/vec/pixel-border.svg" alt="pixel border" draggable="false" rel="preload">
        <div class="pixel-border-content column flex-centered">
          <RouterLink to="/projects">Entrer</RouterLink>
        </div>
      </div>
    </div>
    <div class="desc">
      <p>Bienvenue sur mon portfolio. Pour visiter mes projets, veuillez cliquer/démarrer un morceau. Bonne visite !
        <br>
       Dev: Joris VILARDELL - Web Desgin: 444flox
      </p>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  max-height: 100vh;

  justify-content: space-evenly;
}

.title {
  margin-top: 5%;
  height: max(22vh, 16vw);
  justify-content: space-evenly;
}

.title>h2 {
  font-size: max(2.5vh, 1.5vw);
}

.title>.logo {
  height: max(7vh, 5vw);
}

.pixel-border-container {
  position: relative;
  width: max(18vh, 15vw);
  height: max(6vh, 5vw);
  display: compact;
}

.pixel-border {
  height: max(6vh, 4.5vw);
  width: max(18vh, 15vw);
}

.pixel-border-container>.pixel-border-content>a {
  font-size: max(4vh, 2.5vw);
  text-transform: uppercase;
  animation: arcade-animation-start 1.5s linear infinite;
}

.desc {
  margin: 1% 0;
  width: max(40vh, 45vw);
}

.desc>p {
  font-family: VT323, serif;
  text-align: center;
  font-size: max(3vh, 2.5vw);
  line-height: max(3vh, 2.5vw);
}

@keyframes arcade-animation-start {
  0% {
    opacity: 1;
  }
  49.99% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@media screen and (max-width: 800px) {
  main {
    justify-content: center;
  }

  .title {
    margin: 10% 0;
  }

  .desc {
    margin: 7.5% 0;
  }
}
</style>