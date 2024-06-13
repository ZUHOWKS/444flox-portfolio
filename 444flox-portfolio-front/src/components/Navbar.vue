<script setup lang="ts">

</script>

<template>
  <RouterLink to="/" class="logo"><img src="@/assets/img/logo/444flox-logo-black.svg" alt=""/></RouterLink>
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
  width:  50vh;
  height: 3.25vh;
  transform: translateY(0.5vh);
}

nav>a {
  margin: 0 1.5vh;
  font-size: 3.75vh;
  filter: blur(0.02vh);
}

nav>a:hover {
  color: var(--text-hover-header-c);
}

.logo {
  height: 3.25vh;
  margin: 0 6vh 0 2vh;
}

.logo>img {
  width: 100%;
  height: 100%;
}
</style>