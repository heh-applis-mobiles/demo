<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import type { Course } from '../types/course.ts';
import SmallLogoHEH from '../assets/SmallLogoHEH.svg';

import Content from './Content.vue';
import CourseCard from './CourseCard.vue';

/**
 * Choisit une classe de gradient pour un cours selon son index
 *
 * Cette fonction utilise l'opérateur modulo (%) pour faire une rotation cyclique
 * à travers les 5 gradients disponibles. Par exemple :
 * - index 0 → gradient-1
 * - index 1 → gradient-2
 * - index 5 → gradient-1 (on recommence le cycle)
 * - index 7 → gradient-3
 *
 * Cela permet d'avoir une variété visuelle même avec beaucoup de cours
 */
function getGradientClass(index: number): string {
  const availableGradients = [
    'gradient-1',
    'gradient-2',
    'gradient-3',
    'gradient-4',
    'gradient-5',
  ];

  // L'opérateur % donne le reste de la division
  // Cela crée une rotation : 0,1,2,3,4,0,1,2,3,4,...
  const gradientIndex = index % availableGradients.length;

  return availableGradients[gradientIndex]!;
}

const { data, isFetching, error } = useFetch('http://localhost:3000/api/courses').get().json<Course[]>();
</script>

<template>
  <header class="smallHeader">
    <img :src="SmallLogoHEH" alt="Logo HEH" />
    <span>Liste des cours</span>
  </header>

  <Content>
    <span v-if="isFetching">Chargement des cours...</span>
    <span v-else-if="error">Erreur lors du chargement des cours.</span>
    <template v-else>
      <CourseCard v-for="(course, index) in data" :key="course.title" :progress="course.progress" :title="course.title"
        :class="getGradientClass(index)" />
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
