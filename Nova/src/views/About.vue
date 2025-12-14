<template>
  <div class="about-container">
    <div class="page-header">
      <el-button class="back-button" circle @click="goBack()">
        <el-icon><ArrowLeft /></el-icon>
      </el-button>
      <h1>关于我们</h1>
      <p>了解 Nova 的使命和愿景</p>
    </div>
    
    <div class="container">
      <div class="content-section">
        <h2>我们的使命</h2>
        <p>Nova 致力于为用户提供最优质的产品和服务体验，通过创新技术和人性化设计，让每一个用户都能享受到极致的数字化体验。</p>
      </div>
      
      <div class="content-section">
        <h2>技术栈</h2>
        <div class="tech-grid">
          <div class="tech-item">
            <el-icon :size="40"><ElementPlus /></el-icon>
            <span>Vue 3</span>
          </div>
          <div class="tech-item">
            <el-icon :size="40"><ElementPlus /></el-icon>
            <span>TypeScript</span>
          </div>
          <div class="tech-item">
            <el-icon :size="40"><ElementPlus /></el-icon>
            <span>Vite</span>
          </div>
          <div class="tech-item">
            <el-icon :size="40"><ElementPlus /></el-icon>
            <span>Element Plus</span>
          </div>
        </div>
      </div>
      
      <div class="content-section">
        <el-button type="primary" @click="navigateTo('Contact')">联系我们</el-button>
        <el-button @click="goBack()">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElementPlus, ArrowLeft } from '@element-plus/icons-vue'
import { navigateTo, goBack } from '@/router'
</script>

<style scoped>
.about-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding-top: 80px;
}

.page-header {
  position: relative;
  text-align: center;
  padding: 60px 20px 40px;
  background: white;
  margin-bottom: 40px;
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
}

.page-header h1 {
  font-size: 48px;
  margin-bottom: 15px;
  color: #333;
}

.page-header p {
  font-size: 18px;
  color: #666;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-section {
  background: white;
  padding: 40px;
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.content-section h2 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
}

.content-section p {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s;
}

.tech-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tech-item span {
  margin-top: 15px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.content-section:last-child {
  text-align: center;
}

.content-section:last-child .el-button {
  margin: 0 10px;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 32px;
  }
  
  .content-section {
    padding: 25px;
  }
  
  .content-section h2 {
    font-size: 24px;
  }
  
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>