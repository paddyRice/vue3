<template>
  <div class="demo-page">
    <header class="header">
      <h2>文件上传 Demo</h2>
      <p class="subtitle">选择文件后，查看文件信息并模拟上传进度。</p>
    </header>

    <section class="upload-area">
      <label class="upload-box">
        <input type="file" multiple @change="onFileChange" />
        <el-icon class="icon"><UploadFilled /></el-icon>
        <p>点击或拖拽文件到这里</p>
        <span class="tip">当前示例仅前端模拟，不会真的上传到服务器。</span>
      </label>
    </section>

    <section v-if="files.length" class="file-list">
      <el-card v-for="file in files" :key="file.id" class="file-card">
        <div class="file-header">
          <div>
            <div class="file-name">{{ file.raw.name }}</div>
            <div class="file-size">{{ formatSize(file.raw.size) }}</div>
          </div>
          <el-tag :type="file.status === 'done' ? 'success' : 'warning'" size="small">
            {{ file.status === 'done' ? '完成' : '上传中' }}
          </el-tag>
        </div>
        <el-progress :percentage="file.progress" :status="file.status === 'done' ? 'success' : 'active'" />
      </el-card>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'

interface UploadItem {
  id: number
  raw: File
  progress: number
  status: 'uploading' | 'done'
  timer?: number
}

const files = ref<UploadItem[]>([])
let uid = 0

const startSimulateUpload = (item: UploadItem) => {
  const timer = window.setInterval(() => {
    if (item.progress >= 100) {
      item.progress = 100
      item.status = 'done'
      window.clearInterval(item.timer)
      return
    }
    item.progress += 10 + Math.random() * 10
  }, 300)
  item.timer = timer
}

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const selected = target.files
  if (!selected?.length) return

  Array.from(selected).forEach((raw) => {
    const item: UploadItem = {
      id: ++uid,
      raw,
      progress: 0,
      status: 'uploading'
    }
    files.value.push(item)
    startSimulateUpload(item)
  })

  target.value = ''
}

const formatSize = (size: number) => {
  if (size < 1024) return `${size} B`
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`
  return `${(size / 1024 / 1024).toFixed(1)} MB`
}

onBeforeUnmount(() => {
  files.value.forEach((item) => {
    if (item.timer) {
      window.clearInterval(item.timer)
    }
  })
})
</script>

<style scoped>
.demo-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header h2 {
  font-size: 22px;
  font-weight: 600;
}

.subtitle {
  margin-top: 4px;
  font-size: 14px;
  color: var(--text-muted);
}

.upload-area {
  margin-top: 8px;
}

.upload-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 30px 20px;
  border-radius: 14px;
  border: 1px dashed var(--border-color);
  background: rgba(15, 23, 42, 0.2);
  cursor: pointer;
  color: var(--text-muted);
}

.upload-box input {
  display: none;
}

.upload-box .icon {
  font-size: 26px;
}

.upload-box p {
  font-size: 14px;
}

.upload-box .tip {
  font-size: 12px;
}

.file-list {
  display: grid;
  gap: 10px;
}

.file-card {
  background: var(--card-bg);
}

.file-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.file-name {
  font-size: 14px;
  font-weight: 500;
}

.file-size {
  font-size: 12px;
  color: var(--text-muted);
}
</style>