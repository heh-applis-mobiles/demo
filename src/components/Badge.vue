<script setup lang="ts">
defineProps<{
  variante?: 'Total' | 'Démarrés' | 'Terminés'
}>()
</script>

<template>
  <div v-if="variante === 'Démarrés'" class="badge badge-started">
    <div class="icon">
      <font-awesome-icon icon="fa-solid fa-chart-line" />
    </div>
    <p class="number">8</p>
    <p class="label">Commencés</p>
  </div>

  <div v-else-if="variante === 'Terminés'" class="badge badge-completed">
    <div class="icon icon-total">
      <font-awesome-icon icon="fa-solid fa-trophy" />
    </div>
    <p class="number">4</p>
    <p class="label">Terminés</p>
  </div>

  <div v-else class="badge badge-total">
    <div class="icon">
      <font-awesome-icon icon="fa-solid fa-book" />
    </div>
    <p class="number">12</p>
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
  font-size: 24px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.number {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #101828;
  margin: 0;
  text-align: center;
}

.label {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #4a5565;
  margin: 0;
  text-align: center;
}
</style>
