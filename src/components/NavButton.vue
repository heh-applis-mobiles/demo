<script setup lang="ts">
defineProps<{
  variante?: 'Accueil' | 'Cours'
  current?: boolean
}>()
</script>

<template>
  <div v-if="variante === 'Cours' && !current" class="nav-button">
    <div class="icon">📖</div>
    <p class="label inactive">Cours</p>
  </div>

  <div v-else class="nav-button">
    <div class="icon">🏠</div>
    <p class="label active">Accueil</p>
  </div>
</template>

<style scoped>
.nav-button {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  flex: 1;
  height: 48px;
}

.icon {
  font-size: 24px;
  width: 24px;
  height: 24px;
}

.label {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-align: center;
  margin: 0;
}

.label.active {
  color: #e41513;
}

.label.inactive {
  color: #4a5565;
}
</style>
