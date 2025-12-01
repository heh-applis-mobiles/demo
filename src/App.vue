<script setup lang="ts">
import { ref } from 'vue'
import { faHouse, faBook } from '@fortawesome/free-solid-svg-icons'
import NavButton from './components/NavButton.vue'
import Accueil from './components/Accueil.vue'
import Cours from './components/Cours.vue'

const currentTab = ref('Accueil')

function goToCourses() {
  currentTab.value = 'Cours'
}

</script>

<template>
  <div class="home-page">

    <Accueil v-if="currentTab === 'Accueil'" :ctaAction="goToCourses" />
    <Cours v-if="currentTab === 'Cours'" />

    <!-- Bottom Navigation -->
    <nav class="bottom-nav">
      <div @click="currentTab = 'Accueil'">
        <NavButton title="Accueil" :icon="faHouse" :current="currentTab === 'Accueil'" />
      </div>
      <div @click="currentTab = 'Cours'">
        <NavButton title="Cours" :icon="faBook" :current="currentTab === 'Cours'" />
      </div>
    </nav>
  </div>
</template>

<style scoped>
.home-page {
  background-color: #101828;
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Bottom Navigation */
.bottom-nav {
  background-color: white;
  border-top: 0.4px solid rgba(0, 0, 0, 0.30);
  color: #101828;
  height: 64px;
  display: flex;
  padding: 8px;
  gap: 8px;
}

.bottom-nav>div {
  flex: 1;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
}
</style>
