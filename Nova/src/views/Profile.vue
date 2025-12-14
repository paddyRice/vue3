<template>
  <div class="profile-container">
    <div class="page-header">
      <el-button class="back-button" circle @click="goBack()">
        <el-icon><ArrowLeft /></el-icon>
      </el-button>
      <h1>个人中心</h1>
    </div>
    
    <div class="container">
      <div class="profile-content">
        <div class="profile-card">
          <div class="avatar-section">
            <el-avatar :size="100" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <h2>用户名</h2>
            <p>user@nova.com</p>
          </div>
          
          <el-divider />
          
          <div class="profile-info">
            <div class="info-row">
              <span class="label">昵称：</span>
              <span class="value">{{ userInfo.nickname }}</span>
            </div>
            <div class="info-row">
              <span class="label">注册时间：</span>
              <span class="value">{{ userInfo.registerTime }}</span>
            </div>
            <div class="info-row">
              <span class="label">会员等级：</span>
              <span class="value">{{ userInfo.level }}</span>
            </div>
          </div>
          
          <el-divider />
          
          <div class="profile-actions">
            <el-button type="primary">编辑资料</el-button>
            <el-button @click="navigateTo('Home')">返回首页</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowLeft } from '@element-plus/icons-vue'
import { navigateTo, goBack } from '@/router'

const userInfo = ref({
  nickname: 'Nova用户',
  registerTime: '2024-01-01',
  level: 'VIP会员'
})
</script>

<style scoped>
.profile-container {
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
  color: #333;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px 40px;
}

.profile-content {
  margin-top: 40px;
}

.profile-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.avatar-section {
  text-align: center;
  padding: 20px 0;
}

.avatar-section h2 {
  margin-top: 20px;
  margin-bottom: 10px;
  color: #333;
}

.avatar-section p {
  color: #666;
  font-size: 14px;
}

.profile-info {
  padding: 20px 0;
}

.info-row {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
}

.info-row:last-child {
  border-bottom: none;
}

.label {
  width: 120px;
  color: #666;
  font-weight: 500;
}

.value {
  flex: 1;
  color: #333;
}

.profile-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 20px;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 32px;
  }
  
  .profile-card {
    padding: 25px;
  }
  
  .info-row {
    flex-direction: column;
    gap: 5px;
  }
  
  .label {
    width: auto;
  }
  
  .profile-actions {
    flex-direction: column;
  }
  
  .profile-actions .el-button {
    width: 100%;
  }
}
</style>