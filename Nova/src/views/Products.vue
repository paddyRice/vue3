<template>
  <div class="products-container">
    <div class="page-header">
      <el-button class="back-button" circle @click="goBack()">
        <el-icon><ArrowLeft /></el-icon>
      </el-button>
      <h1>产品中心</h1>
      <p>探索我们的产品与服务</p>
    </div>
    
    <div class="container">
      <div class="filter-section">
        <el-input
          v-model="searchKeyword"
          placeholder="搜索产品..."
          clearable
          style="max-width: 400px;"
        >
          <template #prefix>
            <el-icon><Search /></el-icon>
          </template>
        </el-input>
      </div>
      
      <div class="products-grid">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="product-card"
          @click="handleProductClick(product)"
        >
          <div class="product-image">
            <div class="placeholder-image">{{ product.name.charAt(0) }}</div>
          </div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <div class="product-footer">
              <span class="product-price">¥{{ product.price }}</span>
              <el-button type="primary" size="small">查看详情</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import { Search, ArrowLeft } from '@element-plus/icons-vue'
import { navigateToPath, goBack } from '@/router'

const toast = inject<Function>('toast')
const searchKeyword = ref('')

interface Product {
  id: number
  name: string
  description: string
  price: number
}

const products: Product[] = [
  {
    id: 1,
    name: '产品A',
    description: '高性能、可靠稳定的解决方案',
    price: 999
  },
  {
    id: 2,
    name: '产品B',
    description: '创新的设计和卓越的用户体验',
    price: 1299
  },
  {
    id: 3,
    name: '产品C',
    description: '强大的功能和灵活的配置选项',
    price: 1599
  },
  {
    id: 4,
    name: '产品D',
    description: '专业级的解决方案，适合企业使用',
    price: 2999
  }
]

const filteredProducts = computed(() => {
  if (!searchKeyword.value) return products
  return products.filter(p =>
    p.name.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
    p.description.toLowerCase().includes(searchKeyword.value.toLowerCase())
  )
})

const handleProductClick = (product: Product) => {
  navigateToPath(`/products/${product.id}`, { name: product.name })
  toast?.('正在查看：' + product.name, 'info')
}
</script>

<style scoped>
.products-container {
  min-height: 100vh;
  background: #f5f7fa;
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
}

.filter-section {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-image {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  color: white;
}

.product-info {
  padding: 20px;
}

.product-info h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}

.product-info p {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 24px;
  font-weight: bold;
  color: #f56c6c;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 32px;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-section {
    justify-content: stretch;
  }
  
  .filter-section .el-input {
    max-width: 100% !important;
  }
}
</style>