<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <!-- <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo" @click="navigateTo('Home')">
          <h1>Nova</h1>
        </div>
        <ul class="nav-menu" :class="{ active: menuOpen }">
          <li @click="navigateTo('Home')" :class="{ active: $route.name === 'Home' }">首页</li>
          <li @click="navigateTo('Products')" :class="{ active: $route.name === 'Products' }">产品</li>
          <li @click="navigateTo('About')" :class="{ active: $route.name === 'About' }">关于</li>
          <li @click="navigateTo('Contact')" :class="{ active: $route.name === 'Contact' }">联系</li>
        </ul>
        <div class="nav-toggle" @click="toggleMenu">
          <el-icon><Menu /></el-icon>
        </div>
      </div>
    </nav> -->

    <!-- 主视觉区域 -->
    <section class="hero-section">
      <div class="hero-content">
        <h2 class="hero-title">欢迎来到 Nova</h2>
        <p class="hero-subtitle">探索无限可能，开启全新体验</p>
        <div class="hero-buttons">
          <el-button type="primary" size="large" @click="navigateTo('Products')">
            了解更多
          </el-button>
          <el-button size="large" @click="navigateTo('Contact')">
            联系我们
          </el-button>
        </div>
      </div>
      <div class="hero-image">
        <div class="gradient-box"></div>
      </div>
    </section>

    <!-- 特性区域 -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">核心特性</h2>
        <div class="features-grid">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card"
            @click="handleFeatureClick(feature)"
          >
            <div class="feature-icon">
              <el-icon :size="48">
                <component :is="feature.icon" />
              </el-icon>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="content-section">
      <div class="container">
        <div class="content-grid">
          <div class="content-item">
            <h3>创新设计</h3>
            <p>采用最新的设计理念，打造现代化的用户界面体验</p>
          </div>
          <div class="content-item">
            <h3>高性能</h3>
            <p>基于 Vue3 和 Vite 构建，提供极致的性能体验</p>
          </div>
          <div class="content-item">
            <h3>响应式布局</h3>
            <p>完美适配 PC 端和移动端，随时随地享受优质体验</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Nova. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, Lightning, Setting, DataAnalysis } from '@element-plus/icons-vue'
import { navigateTo } from '@/router'

const route = useRoute()
const menuOpen = ref(false)
const toast = inject<Function>('toast')

const features = [
  {
    icon: Lightning,
    title: '极速体验',
    description: '快速加载，流畅交互'
  },
  {
    icon: Setting,
    title: '易于配置',
    description: '灵活的配置选项'
  },
  {
    icon: DataAnalysis,
    title: '数据分析',
    description: '全面的数据统计'
  }
]

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const handleFeatureClick = (feature: any) => {
  toast?.('点击了：' + feature.title, 'info')
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

/* 导航栏 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  cursor: pointer;
}

.nav-logo h1 {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.3s;
  position: relative;
}

.nav-menu li:hover,
.nav-menu li.active {
  background: rgba(255, 255, 255, 0.2);
}

.nav-toggle {
  display: none;
  cursor: pointer;
  font-size: 24px;
}

/* 主视觉区域 */
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 80px;
  gap: 60px;
}

.hero-content {
  flex: 1;
}

.hero-title {
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 20px;
  margin-bottom: 40px;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.hero-image {
  flex: 1;
  position: relative;
}

.gradient-box {
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

/* 特性区域 */
.features-section {
  padding: 80px 20px;
  background: rgba(255, 255, 255, 0.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 40px;
  margin-bottom: 60px;
  font-weight: 700;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 40px 30px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.feature-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.15);
}

.feature-icon {
  margin-bottom: 20px;
  color: #fff;
}

.feature-title {
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 600;
}

.feature-desc {
  font-size: 16px;
  opacity: 0.9;
  line-height: 1.6;
}

/* 内容区域 */
.content-section {
  padding: 80px 20px;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.content-item {
  text-align: center;
}

.content-item h3 {
  font-size: 28px;
  margin-bottom: 15px;
  font-weight: 600;
}

.content-item p {
  font-size: 16px;
  opacity: 0.9;
  line-height: 1.8;
}

/* 页脚 */
.footer {
  padding: 40px 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(102, 126, 234, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 20px;
    gap: 10px;
    transform: translateX(-100%);
    transition: transform 0.3s;
  }

  .nav-menu.active {
    transform: translateX(0);
  }

  .nav-toggle {
    display: block;
  }

  .hero-section {
    flex-direction: column;
    padding: 100px 20px 60px;
    text-align: center;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .hero-buttons {
    justify-content: center;
    flex-wrap: wrap;
  }

  .gradient-box {
    height: 250px;
  }

  .section-title {
    font-size: 32px;
    margin-bottom: 40px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>