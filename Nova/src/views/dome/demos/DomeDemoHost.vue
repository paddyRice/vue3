<template>
  <div>
    <component :is="currentComponent" :key="currentKey" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import FileUploadDemo from './FileUploadDemo.vue'
import DragSortDemo from './DragSortDemo.vue'
import LazyLoadDemo from './LazyLoadDemo.vue'
import DomePlaceholder from './DomePlaceholder.vue'

const route = useRoute()

const currentKey = computed(() => (route.params.slug as string) || 'unknown')

const currentComponent = computed(() => {
  const slug = route.params.slug as string
  switch (slug) {
    case 'file-upload':
      return FileUploadDemo
    case 'drag-sort':
      return DragSortDemo
    case 'lazy-load':
      return LazyLoadDemo
    default:
      return DomePlaceholder
  }
})
</script>

