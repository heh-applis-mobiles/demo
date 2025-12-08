<script setup lang="ts">
import { computed } from 'vue';
import type { Course } from '../types/course.ts';
import Badge from './Badge.vue';
import Content from './Content.vue';
import CourseCard from './CourseCard.vue';
import { useFetch } from '@vueuse/core';
import { useRouter } from 'vue-router';

const { data: courses, isFetching, error } = useFetch('http://localhost:3000/api/courses').json<Course[]>();

// --- Computed properties pour les statistiques de cours ---

// Cours qui ont été commencés mais pas terminés (0 < progress < 100)
const startedCourses = computed(() => courses.value ? courses.value.filter(course => course.progress > 0 && course.progress < 100) : []);

// Cours qui sont terminés à 100%
const completedCourses = computed(() => courses.value ? courses.value.filter(course => course.progress === 100) : []);

// --- Logique pour afficher le dernier cours consulté ---

/**
 * Trouve le cours qui a été consulté le plus récemment
 * Utile pour la section "Continuer à apprendre"
 */
const lastAccessedCourse = computed(() => {
  if (courses.value) {

    // Étape 1 : Filtrer uniquement les cours qui ont une date de dernière consultation
    const accessedCourses = courses.value.filter(course => course.lastAccessed);

    // Si aucun cours n'a été consulté, on retourne undefined
    if (accessedCourses.length === 0) return undefined;

    // Étape 2 : Trier les cours du plus récent au plus ancien
    const sortedCourses = [...accessedCourses].sort((courseA, courseB) => {
      // On compare les dates converties en millisecondes pour faciliter le tri
      const dateA = new Date(courseA.lastAccessed!).getTime();
      const dateB = new Date(courseB.lastAccessed!).getTime();
      return dateB - dateA; // Ordre décroissant (plus récent en premier)
    });

    // Étape 3 : Retourner le premier cours (le plus récent)
    return sortedCourses[0];
  } else {
    // Si les cours ne sont pas encore chargés, on retourne undefined
    return undefined;
  }
});

const router = useRouter();
</script>

<template>
  <!-- En-tête -->
  <header class="header">
    <img src="../assets/LogoHEH.png" class="logo">
  </header>

  <!-- Contenu principal -->
  <Content>
    <span v-if="isFetching">Chargement des cours...</span>
    <span v-else-if="error">Erreur lors du chargement des cours.</span>
    <template v-else-if="courses">
      <!-- Badges de statistiques -->
      <div class="overview">
        <Badge variante="Total" :count="courses.length" />
        <Badge variante="Démarrés" :count="startedCourses.length" />
        <Badge variante="Terminés" :count="completedCourses.length" />
      </div>

      <!-- Section "Continuer à apprendre" -->
      <div class="continue-section" v-if="lastAccessedCourse">
        <h2>Continuer à apprendre</h2>
        <CourseCard :progress="lastAccessedCourse.progress" :title="lastAccessedCourse.title" />
      </div>
    </template>

    <!-- Bouton d'action principal -->
    <button class="cta-button" @click="router.push('/cours')">Parcourir tous les cours</button>
  </Content>
</template>

<style>
/* En-tête */
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

/* Vue d'ensemble des statistiques */
.overview {
  display: flex;
  gap: 16px;
  width: 100%;
}

/* Section "Continuer à apprendre" */
.continue-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.continue-section h2 {
  font-size: 24px;
  margin: 0;
}

/* Bouton d'appel à l'action (Call To Action) */
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