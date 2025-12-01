<script setup lang="ts">
import { computed } from 'vue';

const { progress } = defineProps<{
  progress: number
}>()

const courseStatus = computed(() => {
  if (progress === 0) {
    return 'À découvrir';
  } else if (progress === 100) {
    return 'Terminé';
  } else {
    return 'Démarré';
  }
});
</script>

<template>
  <div class="course-status-header">
    <span class="course-status">{{ courseStatus }}</span>
    <span class="course-progress">{{ progress }}%</span>
  </div>
</template>

<style>
.course-status-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.course-status {
  color: #ffffff;
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.course-progress {
  display: flex;
  width: 56px;
  height: 24px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 12px;
  background: rgba(255, 255, 255, 0.20);
}
</style>