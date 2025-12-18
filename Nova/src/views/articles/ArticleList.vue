<template>
  <div class="articles-page">
    <header class="section-header">
      <h2>文章列表</h2>
      <p>记录一些在做 Demo 和项目时的思考与总结。</p>
    </header>

    <div class="article-list">
      <el-card
        v-for="article in articles"
        :key="article.id"
        class="article-card"
        shadow="hover"
        @click="goDetail(article.id)"
      >
        <div class="article-content">
          <div class="article-main">
            <h3 class="article-title">{{ article.title }}</h3>
            <p class="article-summary">{{ article.summary }}</p>
            <div class="article-meta">
              <span>{{ article.date }}</span>
            </div>
          </div>
          <div v-if="article.cover" class="article-cover">
            <img :src="article.cover" :alt="article.title" />
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { allArticles } from '@/data/mockContent'

const router = useRouter()
const articles = allArticles

const goDetail = (id: string) => {
  router.push({ name: 'ArticleDetail', params: { id } })
}
</script>

<style scoped>
.articles-page {
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

.article-list {
  display: grid;
  gap: 12px;
}

.article-card {
  cursor: pointer;
}

.article-content {
  display: flex;
  gap: 16px;
  align-items: center;
}

.article-main {
  flex: 1;
}

.article-title {
  font-size: 17px;
  font-weight: 600;
}

.article-summary {
  margin-top: 4px;
  font-size: 14px;
  color: var(--text-muted);
}

.article-meta {
  margin-top: 6px;
  font-size: 12px;
  color: var(--text-muted);
}

.article-cover {
  width: 140px;
  height: 84px;
  border-radius: 10px;
  overflow: hidden;
}

.article-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .article-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .article-cover {
    width: 100%;
    height: 160px;
  }
}
</style>


