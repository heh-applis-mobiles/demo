<script setup lang="ts">
import Badge from './Badge.vue';
import Content from './Content.vue';
import CourseCard from './CourseCard.vue';
import { getCourses } from '../utils/courses';
import { computed, ref } from 'vue';

defineProps<{
  ctaAction: () => void
}>()

const courses = ref(getCourses());
const totalCourseCount = computed(() => courses.value.length);
const startedCourses = computed(() => courses.value.filter(course => course.progress > 0 && course.progress < 100));
const startedCourseCount = computed(() => startedCourses.value.length);
const completedCoursesCount = computed(() => courses.value.filter(course => course.progress === 100).length);
const lastStartedCourse = computed(() => {
  const sorted = [...startedCourses.value].sort((a, b) => (b.lastAccessed?.getTime() ?? 0) - (a.lastAccessed?.getTime() ?? 0));
  return sorted[0];
});
</script>

<template>
  <!-- Header -->
  <header class="header">
    <img src="../assets/LogoHEH.png" class="logo">
  </header>

  <!-- Content -->
  <Content>
    <!-- Overview Badges -->
    <div class="overview">
      <Badge variante="Total" :count="totalCourseCount" />
      <Badge variante="Démarrés" :count="startedCourseCount" />
      <Badge variante="Terminés" :count="completedCoursesCount" />
    </div>

    <!-- Continue Learning Section -->
    <div class="continue-section" v-if="lastStartedCourse">
      <h2>Continuer à apprendre</h2>
      <CourseCard :progress="lastStartedCourse.progress" :title="lastStartedCourse.title" />
    </div>

    <!-- Browse All Courses Button -->
    <button class="cta-button" @click="ctaAction">Parcourir tous les cours</button>
  </Content>
</template>

<style>
/* Header */
.header {
  padding: 24px 24px;
  background-color: #101828;
}

.logo {
  height: 101.92px;
  flex-shrink: 0;
  align-self: stretch;
  aspect-ratio: 364.00/101.19;
}

/* Overview */
.overview {
  display: flex;
  gap: 16px;
  width: 100%;
}

/* Continue Learning Section */
.continue-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.continue-section h2 {
  font-size: 24px;
  margin: 0;
}

/* CTA Button */
.cta-button {
  background-color: #e41513;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 8px 16px;
  height: 48px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
  transition: transform 0.2s ease;
}

.cta-button:active {
  transform: scale(0.95);
}
</style>