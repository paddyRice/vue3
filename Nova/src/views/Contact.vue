<template>
  <div class="contact-container">
    <div class="page-header">
      <el-button class="back-button" circle @click="goBack()">
        <el-icon><ArrowLeft /></el-icon>
      </el-button>
      <h1>联系我们</h1>
      <p>我们期待与您合作</p>
    </div>
    
    <div class="container">
      <div class="contact-content">
        <div class="contact-info">
          <h2>联系方式</h2>
          <div class="info-item">
            <el-icon :size="24"><Message /></el-icon>
            <span>邮箱：contact@nova.com</span>
          </div>
          <div class="info-item">
            <el-icon :size="24"><Phone /></el-icon>
            <span>电话：400-123-4567</span>
          </div>
          <div class="info-item">
            <el-icon :size="24"><Location /></el-icon>
            <span>地址：北京市朝阳区</span>
          </div>
        </div>
        
        <div class="contact-form">
          <h2>留言给我们</h2>
          <el-form :model="form" label-width="80px">
            <el-form-item label="姓名">
              <el-input v-model="form.name" placeholder="请输入您的姓名" />
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="form.email" placeholder="请输入您的邮箱" />
            </el-form-item>
            <el-form-item label="主题">
              <el-input v-model="form.subject" placeholder="请输入主题" />
            </el-form-item>
            <el-form-item label="留言">
              <el-input
                v-model="form.message"
                type="textarea"
                :rows="5"
                placeholder="请输入您的留言内容"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSubmit">提交</el-button>
              <el-button @click="handleReset">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { Message, Phone, Location, ArrowLeft } from '@element-plus/icons-vue'
import { post } from '@/utils/request'
import { goBack } from '@/router'

const toast = inject<Function>('toast')

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    toast?.('请填写完整信息', 'warning')
    return
  }
  
  try {
    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast?.('提交成功！我们会尽快联系您', 'success')
    handleReset()
  } catch (error) {
    toast?.('提交失败，请稍后重试', 'error')
  }
}

const handleReset = () => {
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.contact-container {
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  margin-top: 40px;
}

.contact-info,
.contact-form {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.contact-info h2,
.contact-form h2 {
  font-size: 28px;
  margin-bottom: 30px;
  color: #333;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  font-size: 16px;
  color: #666;
}

.info-item .el-icon {
  color: #667eea;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 32px;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .contact-info,
  .contact-form {
    padding: 25px;
  }
}
</style>