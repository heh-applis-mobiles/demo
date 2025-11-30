<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

defineProps<{
  title: string
  icon: IconDefinition
  current?: boolean
}>()
</script>

<template>
  <div class="nav-button">
    <FontAwesomeIcon :icon="icon" :class="['icon', current ? 'active-icon' : 'inactive-icon']" />
    <p :class="['label', current ? 'active' : 'inactive']">{{ title }}</p>
  </div>
</template>

<style scoped>
.nav-button {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  flex: 1;
  height: 48px;
}

.icon {
  font-size: 24px;
  width: 24px;
  height: 24px;
}

.icon.active-icon {
  color: #e41513;
}

.icon.inactive-icon {
  color: #4a5565;
}

.label {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-align: center;
  margin: 0;
}

.label.active {
  color: #e41513;
}

.label.inactive {
  color: #4a5565;
}
</style>
