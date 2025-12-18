<template>
  <div v-if="item" class="gallery-detail">
    <header class="header">
      <h1 class="title">{{ item.title }}</h1>
      <p class="desc">{{ item.description }}</p>
    </header>

    <div class="photos">
      <div v-for="(photo, index) in item.photos" :key="index" class="photo">
        <img :src="photo" :alt="item.title + ' 照片 ' + (index + 1)" />
      </div>
    </div>
  </div>
  <div v-else class="empty">未找到对应图库。</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { galleryItems } from '@/data/mockContent'

const route = useRoute()

const item = computed(() => {
  const id = route.params.id as string
  return galleryItems.find((g) => g.id === id)
})
</script>

<style scoped>
.gallery-detail {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header .title {
  font-size: 24px;
  font-weight: 600;
}

.header .desc {
  margin-top: 6px;
  font-size: 14px;
  color: var(--text-muted);
}

.photos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.photo {
  border-radius: 12px;
  overflow: hidden;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.empty {
  color: var(--text-muted);
}
</style>


