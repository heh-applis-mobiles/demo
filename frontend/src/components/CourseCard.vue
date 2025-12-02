<script setup lang="ts">
import { computed } from 'vue';

const { progress } = defineProps<{
  progress: number;
  title: string;
}>();

const labels = computed(() => {
  if (progress === 0) {
    return { status: 'À découvrir', action: 'Commencer' };
  } else if (progress === 100) {
    return { status: 'Terminé', action: 'Recommencer' };
  } else {
    return { status: 'Démarré', action: 'Continuer' };
  }
});

</script>

<template>
  <div class="course-card">
    <div class="card-header">
      <span class="card-status">{{ labels.status }}</span>
      <span class="card-progress">{{ progress }}%</span>
    </div>

    <h3 class="card-title">{{ title }}</h3>

    <div class="progress-bar">
      <div class="progress-level" :style="{ width: `${progress}%` }"></div>
    </div>

    <button class="action-button">{{ labels.action }}</button>
  </div>
</template>

<style>
.course-card {
  border-radius: 16px;
  background: linear-gradient(to right, #FF8904 0%, #F6339A 100%);
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
  font-size: 1rem;
  color: white;
}

.card-progress {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 1rem;
  color: white;
}

.card-title {
  font-size: 1.5rem;
  font-weight: normal;
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

.action-button {
  background: white;
  color: #101828;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  height: 40px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.15);
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
  transition: transform 0.2s ease;
}

.action-button:active {
  transform: scale(0.95);
}
</style>
