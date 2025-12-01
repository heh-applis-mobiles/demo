<script setup lang="ts">
import Content from './Content.vue';
import CourseCard from './CourseCard.vue';
import { getCourses } from '../utils/courses';
import { ref } from 'vue';

function chooseGradient(index: number): string {
  const gradients = [
    'gradient-1',
    'gradient-2',
    'gradient-3',
    'gradient-4',
    'gradient-5',
  ];
  return gradients[index % gradients.length]!;
}

const courses = ref(getCourses().toSorted((a, b) => (b.lastAccessed?.getTime() ?? 0) - (a.lastAccessed?.getTime() ?? 0)));

</script>

<template>
  <header class="smallHeader">
    <img src="../assets/SmallLogoHEH.svg" alt="Logo HEH" />
    <span>Liste des cours</span>
  </header>

  <Content>
    <CourseCard v-for="(course, index) in courses" :key="course.title" :progress="course.progress" :title="course.title"
      :class="chooseGradient(index)" />
  </Content>
</template>

<style>
.smallHeader {
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 16px;
}

.gradient-1 {
  background: linear-gradient(to right, #FF8904 0%, #F6339A 100%);
}

.gradient-2 {
  background: linear-gradient(to right, #FDC700 0%, #FF6900 100%);
}

.gradient-3 {
  background: linear-gradient(to right, #C27AFF 0%, #F6339A 100%);
}

.gradient-4 {
  background: linear-gradient(to right, #51A2FF 0%, #00B8DB 100%);
}

.gradient-5 {
  background: linear-gradient(to right, #05DF72 0%, #00BBA7 100%);
}
</style>
