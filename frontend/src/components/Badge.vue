<script setup lang="ts">
import { computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBook, faChartLine, faTrophy } from '@fortawesome/free-solid-svg-icons';

const { variante, count } = defineProps<{
  variante: 'Total' | 'Démarrés' | 'Terminés';
  count: number;
}>();

/**
 * Configuration du badge selon la variante choisie
 * Permet d'éviter la duplication de code dans le template
 */
const badgeConfig = computed(() => {
  // Selon la variante, on retourne la configuration appropriée
  switch (variante) {
    case 'Démarrés':
      return {
        styleClass: 'badge-started',
        icon: faChartLine,
        label: 'Commencés'
      };
    case 'Terminés':
      return {
        styleClass: 'badge-completed',
        icon: faTrophy,
        label: 'Terminés'
      };
    case 'Total':
    default:
      return {
        styleClass: 'badge-total',
        icon: faBook,
        label: 'Cours'
      };
  }
});
</script>

<template>
  <!-- Structure unique du badge, les styles changent selon la variante -->
  <div class="badge" :class="badgeConfig.styleClass">
    <div class="icon">
      <FontAwesomeIcon :icon="badgeConfig.icon" />
    </div>
    <p class="number">{{ count }}</p>
    <p class="label">{{ badgeConfig.label }}</p>
  </div>
</template>

<style scoped>
.badge {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 16px;
  flex: 1;
  min-width: 0;
}

.badge-total {
  background-color: #dbeafe;
  color: #155DFC;
}

.badge-started {
  background-color: #dcfce7;
  color: #00A63E;
}

.badge-completed {
  background-color: #f3e8ff;
  color: #9810FA;
}

.icon {
  font-size: 1.5rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.number {
  font-size: 1.5rem;
  color: #101828;
  margin: 0;
  text-align: center;
}

.label {
  font-size: 1rem;
  color: #4a5565;
  margin: 0;
  text-align: center;
}
</style>
