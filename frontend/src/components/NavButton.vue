<script setup lang="ts">
import { computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const { title, icon, current } = defineProps<{
  title: string;
  icon: IconDefinition;
  current?: boolean;
}>();

/**
 * Classes CSS pour l'icône
 * Change de couleur selon si le bouton est actif ou non
 */
const iconClasses = computed(() => {
  return ['icon', current ? 'active-icon' : 'inactive-icon'];
});

/**
 * Classes CSS pour le label
 * Change de couleur selon si le bouton est actif ou non
 */
const labelClasses = computed(() => {
  return ['label', current ? 'active' : 'inactive'];
});
</script>

<template>
  <div class="nav-button">
    <FontAwesomeIcon :icon="icon" :class="iconClasses" />
    <p :class="labelClasses">{{ title }}</p>
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
  transition: transform 0.2s ease, color 0.2s ease;
}

.nav-button:active .icon {
  transform: scale(0.85);
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
