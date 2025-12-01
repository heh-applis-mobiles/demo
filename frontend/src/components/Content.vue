<template>
  <main class="content">
    <slot></slot>
  </main>
</template>

<style>
.content {
  background-color: white;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  color: #101828;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  overflow-y: auto;
  min-height: 0;
}
</style>
