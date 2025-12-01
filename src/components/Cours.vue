<script setup lang="ts">
import Content from './Content.vue';
import CourseCard from './CourseCard.vue';

</script>

<template>
  <header class="smallHeader">
    <img src="../assets/SmallLogoHEH.svg" alt="Logo HEH" />
    <span>Liste des cours</span>
  </header>

  <Content>
    <CourseCard :progress="0" title="Introduction à la programmation" />
  </Content>
</template>

<style>
.smallHeader {
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 16px;
}
</style>
