<script setup lang="ts">
import { computed } from 'vue';

const {progress} = defineProps<{
  progress: number
  title: string
}>()

const cardStatus = computed(() => {
  if (progress === 0) {
    return 'À découvrir';
  } else if (progress === 100) {
    return 'Cours terminé';
  } else {
    return 'Cours démarré';
  }
});
</script>

<template>
  <div class="course-card">
    <div class="card-header">
      <span class="card-status">{{ cardStatus }}</span>
      <span class="card-progress">{{ progress }}%</span>
    </div>

    <h3 class="card-title">{{ title }}</h3>

    <div class="progress-bar">
      <div class="progress-level" :style="{ width: `${progress}%` }"></div>
    </div>

    <button class="continue-button">Continuer</button>
  </div>
</template>

<style scoped>
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
  color: #e41513;
  cursor: pointer;
  font-weight: normal;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.15);
}
</style>
