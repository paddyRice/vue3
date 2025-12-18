<template>
  <div class="dome-page">
    <header class="header">
      <h2>DOME 功能列表</h2>
      <p>这里会收集各种前端小功能 Demo，方便学习和回顾。</p>
    </header>

    <div class="demo-grid">
      <el-card
        v-for="demo in demos"
        :key="demo.slug"
        class="demo-card"
        shadow="hover"
        @click="goDemo(demo.slug)"
      >
        <h3 class="title">{{ demo.title }}</h3>
        <p class="desc">{{ demo.description }}</p>
        <div class="tags">
          <el-tag
            v-for="tag in demo.tags"
            :key="tag"
            size="small"
            type="info"
          >
            {{ tag }}
          </el-tag>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { demoEntries } from '@/data/mockContent'

const router = useRouter()
const demos = demoEntries

const goDemo = (slug: string) => {
  router.push({ name: 'DomeDetail', params: { slug } })
}
</script>

<style scoped>
.dome-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header h2 {
  font-size: 22px;
  font-weight: 600;
}

.header p {
  margin-top: 4px;
  font-size: 14px;
  color: var(--text-muted);
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.demo-card {
  cursor: pointer;
  min-height: 150px;
}

.title {
  font-size: 16px;
  font-weight: 600;
}

.desc {
  margin-top: 4px;
  font-size: 13px;
  color: var(--text-muted);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}
</style>


