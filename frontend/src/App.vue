<script setup lang="ts">
import { faBook, faHouse } from '@fortawesome/free-solid-svg-icons';
import { RouterView } from 'vue-router';
import NavButton from './components/NavButton.vue';

</script>

<template>
  <div class="home-page">
    <RouterView />

    <!-- Navigation inférieure -->
    <nav class="bottom-nav">
      <NavButton to="/" title="Accueil" :icon="faHouse" />
      <NavButton to="/cours" title="Cours" :icon="faBook" />
    </nav>
  </div>
</template>

<style scoped>
.home-page {
  background-color: #101828;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

/* Navigation inférieure */
.bottom-nav {
  background-color: white;
  border-top: 0.4px solid rgba(0, 0, 0, 0.30);
  color: #101828;
  height: 64px;
  display: flex;
  padding: 8px;
  gap: 8px;
}

</style>
