<script setup lang="ts">

</script>

<template>
  <RouterLink to="/" class="logo"><img src="@/assets/img/logo/444flox-logo-black.svg" alt="444flox logo" draggable="false" rel="preload"></RouterLink>
  <nav class="row flex-centered">
    <RouterLink to="/projects" id="home">home</RouterLink>
    <RouterLink to="/projects" id="shop">shop</RouterLink>
    <RouterLink to="/projects" id="contact">contact</RouterLink>
    <RouterLink to="/projects" id="cv">cv</RouterLink>
  </nav>
</template>

<style scoped>

a {
  color: var(--text-header-c);
  font-family: vcr-osd-neue,serif;
  font-style: italic;
  font-weight: bold;
  text-transform: lowercase;
}

nav {
  justify-content: space-between;
  width:  50vw;
  max-width: max-content;
  height: 3.25vh;
  transform: translateY(0.5vh);
}

nav>a {
  margin: 0 1.5vh;
  font-size: max(3.75vh, 1.25vw);
  filter: blur(0.02vh);
}

nav>a:hover {
  color: var(--text-hover-header-c);
}

.logo {
  height: max(3.25vh, 1vw);
  margin: 0 6vh 0 2vh;
}

.logo>img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 850px) {

  .logo {
    height: calc(3vw + 1vh);
    margin: 0 4vw 0 1.5vw;
  }

  nav>a {
    font-size: calc(3.25vw + 1vh);
    margin: 0 calc(1.25vw + 0.5vh);
  }
}

@media screen and (max-width: 420px) {

  .logo {
    height: calc(5vw);
    margin: 0 2vw 0 1vw;
  }

  nav>a {
    font-size: calc(4.75vw);
    margin: 0 calc(1.15vw);
  }
}
</style>