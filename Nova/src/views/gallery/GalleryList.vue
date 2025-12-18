<template>
  <div class="gallery-page">
    <header class="section-header">
      <h2>图库</h2>
      <p>记录生活中的一些瞬间，比如爬泰山这样的旅程。</p>
    </header>

    <div class="gallery-grid">
      <el-card
        v-for="item in galleryItems"
        :key="item.id"
        class="gallery-card"
        shadow="hover"
        @click="goDetail(item.id)"
      >
        <div class="cover">
          <img :src="item.cover" :alt="item.title" />
        </div>
        <h3 class="title">{{ item.title }}</h3>
        <p class="desc">{{ item.description }}</p>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { galleryItems } from '@/data/mockContent'

const router = useRouter()

const goDetail = (id: string) => {
  router.push({ name: 'GalleryDetail', params: { id } })
}
</script>

<style scoped>
.gallery-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-header h2 {
  font-size: 22px;
  font-weight: 600;
}

.section-header p {
  margin-top: 4px;
  font-size: 14px;
  color: var(--text-muted);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.gallery-card {
  cursor: pointer;
}

.cover {
  width: 100%;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 8px;
}

.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  font-size: 16px;
  margin-bottom: 4px;
}

.desc {
  font-size: 13px;
  color: var(--text-muted);
}
</style>


