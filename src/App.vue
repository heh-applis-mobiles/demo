<script setup lang="ts">
import Badge from './components/Badge.vue'
import NavButton from './components/NavButton.vue'
import PWABadge from './components/PWABadge.vue'
</script>

<template>
  <div class="home-page">
    <!-- Header -->
    <header class="header">
      <h1>Bienvenue à la HEH</h1>
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

        <div class="course-card">
          <div class="card-header">
            <span class="card-status">Cours démarré</span>
            <span class="card-progress">65%</span>
          </div>

          <h3 class="card-title">Design et dev d'applis mobiles</h3>

          <div class="progress-bar">
            <div class="progress-level" style="width: 65%"></div>
          </div>

          <button class="continue-button">Continuer</button>
        </div>
      </div>

      <!-- Browse All Courses Button -->
      <button class="cta-button">Parcourir tous les cours</button>
    </div>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav">
      <NavButton variante="Accueil" :current="true" />
      <NavButton variante="Cours" :current="false" />
    </nav>

    <PWABadge />
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #e41513;
}

/* Header */
.header {
  padding: 48px 24px;
  background-color: #e41513;
}

.header h1 {
  font-family: Arial, sans-serif;
  font-size: 36px;
  line-height: 36px;
  color: white;
  margin: 0;
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

.course-card {
  background: linear-gradient(to right, #ff8904, #f6339a);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-status {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: white;
}

.card-progress {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 4px 10px;
  border-radius: 12px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: white;
}

.card-title {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: white;
  margin: 0;
}

.progress-bar {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  height: 8px;
  overflow: hidden;
}

.progress-level {
  background-color: white;
  height: 100%;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.continue-button {
  background: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  height: 40px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  background: linear-gradient(to right, #ff8904, #f6339a);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  font-weight: normal;
}

.continue-button:hover {
  opacity: 0.9;
}

/* CTA Button */
.cta-button {
  background-color: #e41513;
  color: white;
  border: none;
  border-radius: 16px;
  padding: 16px;
  height: 48px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-button:hover {
  background-color: #c71311;
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
</style>
