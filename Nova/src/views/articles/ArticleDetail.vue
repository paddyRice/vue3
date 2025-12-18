<template>
  <div class="article-detail" v-if="article">
    <header class="header">
      <h1 class="title">{{ article.title }}</h1>
      <div class="meta">
        <span class="date">{{ article.date }}</span>
      </div>
    </header>

    <div v-if="article.cover" class="cover">
      <img :src="article.cover" :alt="article.title" />
    </div>

    <article class="content">
      <p>{{ article.content }}</p>
    </article>
  </div>
  <div v-else class="empty">未找到对应文章。</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { allArticles } from '@/data/mockContent'

const route = useRoute()

const article = computed(() => {
  const id = route.params.id as string
  return allArticles.find((a) => a.id === id)
})
</script>

<style scoped>
.article-detail {
  max-width: 760px;
}

.header {
  margin-bottom: 16px;
}

.title {
  font-size: 26px;
  font-weight: 700;
}

.meta {
  margin-top: 6px;
  font-size: 13px;
  color: var(--text-muted);
}

.cover {
  margin: 20px 0;
  border-radius: 12px;
  overflow: hidden;
}

.cover img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.content {
  font-size: 15px;
  line-height: 1.9;
  color: var(--text-color);
}

.empty {
  color: var(--text-muted);
}
</style>


