<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBook, faChartLine, faTrophy } from '@fortawesome/free-solid-svg-icons'

defineProps<{
  variante: 'Total' | 'Démarrés' | 'Terminés';
  count: number;
}>()
</script>

<template>
  <div v-if="variante === 'Démarrés'" class="badge badge-started">
    <div class="icon">
      <FontAwesomeIcon :icon="faChartLine" />
    </div>
    <p class="number">{{ count }}</p>
    <p class="label">Commencés</p>
  </div>

  <div v-else-if="variante === 'Terminés'" class="badge badge-completed">
    <div class="icon icon-total">
      <FontAwesomeIcon :icon="faTrophy" />
    </div>
    <p class="number">{{ count }}</p>
    <p class="label">Terminés</p>
  </div>

  <div v-else class="badge badge-total">
    <div class="icon">
      <FontAwesomeIcon :icon="faBook" />
    </div>
    <p class="number">{{ count }}</p>
    <p class="label">Cours</p>
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
