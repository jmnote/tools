<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/random">🎲 Random</RouterLink>
        <RouterLink to="/svg">🖼 SVG</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 1em;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.navbar {
  display: flex;
  justify-content: center;
  gap: 2em;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
}

.navbar a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}

main {
  padding: 6em 2em 2em;
  /* 헤더 공간 확보 */
}
</style>
