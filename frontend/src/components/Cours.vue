<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { getCourses } from '../utils/courses';

import Content from './Content.vue';
import CourseCard from './CourseCard.vue';

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

const { data: courses, error: coursesError, isPending: coursesIsPending } = useQuery({
  queryKey: ['courses'],
  queryFn: getCourses,
})
</script>

<template>
  <header class="smallHeader">
    <img src="../assets/SmallLogoHEH.svg" alt="Logo HEH" />
    <span>Liste des cours</span>
  </header>

  <Content>
    <span v-if="coursesIsPending">Chargement des cours...</span>
    <span v-else-if="coursesError">Erreur lors du chargement des cours.</span>
    <template v-else>
      <CourseCard v-for="(course, index) in courses" :key="course.title" :progress="course.progress"
        :title="course.title" :class="chooseGradient(index)" />
    </template>
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
