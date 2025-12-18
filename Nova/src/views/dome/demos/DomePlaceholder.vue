<template>
  <div class="demo-detail">
    <header class="header">
      <h2>{{ title }}</h2>
      <p class="subtitle">这里将实现「{{ title }}」的具体 Demo 功能。</p>
    </header>

    <section class="placeholder">
      <el-empty description="功能 Demo 仍在开发中，后续会逐步补充具体实现。" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { demoEntries } from '@/data/mockContent'

const route = useRoute()

const title = computed(() => {
  const slug = route.params.slug as string
  const found = demoEntries.find((d) => d.slug === slug)
  return found?.title || '功能 Demo'
})
</script>

<style scoped>
.demo-detail {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header h2 {
  font-size: 22px;
  font-weight: 600;
}

.subtitle {
  margin-top: 4px;
  font-size: 14px;
  color: var(--text-muted);
}

.placeholder {
  margin-top: 12px;
}
</style>


