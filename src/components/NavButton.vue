<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faBook } from '@fortawesome/free-solid-svg-icons'

defineProps<{
  variante?: 'Accueil' | 'Cours'
  current?: boolean
}>()
</script>

<template>
  <div v-if="variante === 'Cours' && !current" class="nav-button">
    <FontAwesomeIcon :icon="faBook" class="icon inactive-icon" />
    <p class="label inactive">Cours</p>
  </div>

  <div v-else class="nav-button">
    <FontAwesomeIcon :icon="faHouse" class="icon active-icon" />
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

.icon.active-icon {
  color: #e41513;
}

.icon.inactive-icon {
  color: #4a5565;
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
