<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-text">
        <p class="hero-badge">前端 · Vue3 · Demo 集合站</p>
        <h2 class="hero-title">你好，我是<span class="highlight"> Nova </span></h2>
        <p class="hero-subtitle">
          这里是我的前端练习与展示空间，收集常见功能 Demo、技术总结和一些旅行照片。
        </p>
        <div class="hero-actions">
          <el-button type="primary" size="large" @click="go('Dome')"> 进入 DOME 功能区 </el-button>
          <el-button size="large" @click="go('Articles')"> 最近文章 </el-button>
        </div>
        <div class="hero-meta">
          <span>常用技术：Vue3 · TypeScript · Vite · Element Plus</span>
        </div>
      </div>
      <div class="hero-photo">
        <div class="photo-card">
          <div class="photo-avatar">
            <img
              src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg"
              alt="个人写真"
            />
          </div>
          <h3 class="photo-name">Nova</h3>
          <p class="photo-desc">喜欢折腾新技术的前端工程师。</p>
          <div class="photo-tags">
            <el-tag size="small" effect="dark">前端</el-tag>
            <el-tag size="small" type="success">Vue3</el-tag>
            <el-tag size="small" type="info">TypeScript</el-tag>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <h3>Demo 快速入口</h3>
        <p>一些常见前端小功能，方便随时回顾和复用。</p>
      </div>
      <div class="demo-grid">
        <el-card
          v-for="demo in demoEntries"
          :key="demo.slug"
          class="demo-card"
          shadow="hover"
          @click="goDemo(demo.slug)"
        >
          <h4 class="demo-title">{{ demo.title }}</h4>
          <p class="demo-desc">{{ demo.description }}</p>
          <div class="demo-tags">
            <el-tag v-for="tag in demo.tags" :key="tag" size="small" type="info">{{ tag }}</el-tag>
          </div>
        </el-card>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <h3>最近文章</h3>
        <p>记录一些做 Demo 和项目时的思考。</p>
      </div>
      <div class="article-list">
        <el-card
          v-for="article in recentArticles"
          :key="article.id"
          class="article-card"
          shadow="hover"
          @click="goArticle(article.id)"
        >
          <div class="article-content">
            <div class="article-main">
              <h4 class="article-title">{{ article.title }}</h4>
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
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { demoEntries, recentArticles } from '@/data/mockContent'

const router = useRouter()

const go = (name: string) => {
  router.push({ name })
}

const goDemo = (slug: string) => {
  router.push({ name: 'DomeDetail', params: { slug } })
}

const goArticle = (id: string) => {
  router.push({ name: 'ArticleDetail', params: { id } })
}
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  gap: 32px;
  align-items: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero-badge {
  font-size: 13px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.hero-title {
  font-size: 34px;
  font-weight: 700;
}

.hero-title .highlight {
  color: #6366f1;
}

.hero-subtitle {
  color: var(--text-muted);
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.hero-meta {
  margin-top: 4px;
  font-size: 13px;
  color: var(--text-muted);
}

.hero-photo {
  display: flex;
  justify-content: flex-end;
}

.photo-card {
  width: 260px;
  padding: 20px 18px;
  border-radius: 18px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.35);
}

.photo-avatar {
  width: 96px;
  height: 96px;
  border-radius: 999px;
  overflow: hidden;
  border: 2px solid rgba(250, 250, 250, 0.9);
}

.photo-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-name {
  font-size: 18px;
  font-weight: 600;
}

.photo-desc {
  font-size: 14px;
  color: var(--text-muted);
}

.photo-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-header h3 {
  font-size: 20px;
  font-weight: 600;
}

.section-header p {
  font-size: 14px;
  color: var(--text-muted);
  margin-top: 4px;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.demo-card {
  cursor: pointer;
  transition: transform 0.15s ease;
}

.demo-card:hover {
  transform: translateY(-4px);
}

.demo-title {
  font-size: 16px;
  margin-bottom: 4px;
}

.demo-desc {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.demo-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
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
  font-size: 16px;
  font-weight: 600;
}

.article-summary {
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 4px;
}

.article-meta {
  margin-top: 6px;
  font-size: 12px;
  color: var(--text-muted);
}

.article-cover {
  width: 120px;
  height: 72px;
  border-radius: 10px;
  overflow: hidden;
}

.article-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
  }

  .hero-photo {
    justify-content: flex-start;
  }

  .hero-actions {
    flex-wrap: wrap;
  }

  .article-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .article-cover {
    width: 100%;
    height: 140px;
  }
}
</style>


