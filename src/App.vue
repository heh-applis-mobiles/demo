<script setup lang="ts">
import { ref } from 'vue'
import { faHouse, faBook } from '@fortawesome/free-solid-svg-icons'
import Badge from './components/Badge.vue'
import CourseCard from './components/CourseCard.vue'
import NavButton from './components/NavButton.vue'
import PWABadge from './components/PWABadge.vue'

const currentPage = ref('Accueil')

function setCurrentPage(page: string) {
  currentPage.value = page
}
</script>

<template>
  <div class="home-page">
    <!-- Header -->
    <header class="header">
      <img src="./assets/LogoHEH.png" class="logo" >
    </header>

    <!-- Content -->
    <div class="content">
      <!-- Overview Badges -->
      <div class="overview">
        <Badge variante="Total" />
        <Badge variante="Démarrés" />
        <Badge variante="Terminés" />
      </div>

      <!-- Continue Learning Section -->
      <div class="continue-section">
        <h2>Continuer à apprendre</h2>
        <CourseCard :progress="65" title="Design et dev d'applis mobiles" />
      </div>

      <!-- Browse All Courses Button -->
      <button class="cta-button">Parcourir tous les cours</button>
    </div>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav">
      <div @click="setCurrentPage('Accueil')">
        <NavButton title="Accueil" :icon="faHouse" :current="currentPage === 'Accueil'" />
      </div>
      <div @click="setCurrentPage('Cours')">
        <NavButton title="Cours" :icon="faBook" :current="currentPage === 'Cours'" />
      </div>
    </nav>

    <PWABadge />
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #101828;
}

/* Header */
.header {
  padding: 24px 24px;
  background-color: #101828;
}

.logo {
  height: 101.92px;
  flex-shrink: 0;
  align-self: stretch;
  aspect-ratio: 364.00/101.19;
}

/* Content */
.content {
  flex: 1;
  background-color: white;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Overview */
.overview {
  display: flex;
  gap: 16px;
  width: 100%;
}

/* Continue Learning Section */
.continue-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.continue-section h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #101828;
  margin: 0;
}

/* CTA Button */
.cta-button {
  background-color: #e41513;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 8px 16px;
  height: 48px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
  transition: transform 0.2s ease;
}

.cta-button:active {
  transform: scale(0.95);
}

/* Bottom Navigation */
.bottom-nav {
  background-color: white;
  border-top: 0.4px solid rgba(0, 0, 0, 0.31);
  height: 64px;
  display: flex;
  padding: 8px;
  gap: 8px;
}

.bottom-nav > div {
  flex: 1;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
}

</style>
