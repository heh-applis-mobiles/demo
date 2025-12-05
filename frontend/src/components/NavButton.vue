<script setup lang="ts">
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { RouterLink } from 'vue-router';

const { title, icon, to } = defineProps<{
  to: string;
  title: string;
  icon: IconDefinition;
}>();

</script>

<template>
  <RouterLink :to="to" class="nav-button">
    <FontAwesomeIcon :icon="icon" class="icon" />
    <p class="label">{{ title }}</p>
  </RouterLink>
</template>

<style scoped>
.nav-button {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  flex: 1;
  color: #4a5565;
  justify-content: center;
}

.router-link-active {
  color: #e41513;
}

.icon {
  font-size: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 0.2s ease, color 0.2s ease;
}

.nav-button:active .icon {
  transform: scale(0.85);
}

.label {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  text-align: center;
  margin: 0;
}
</style>
