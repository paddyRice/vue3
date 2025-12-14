<template>
  <transition-group
    name="toast"
    tag="div"
    class="toast-container"
  >
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="['toast-item', `toast-${toast.type}`]"
      @click="removeToast(toast.id)"
    >
      <el-icon :class="['toast-icon', `toast-icon-${toast.type}`]">
        <component :is="getIcon(toast.type)" />
      </el-icon>
      <span class="toast-message">{{ toast.message }}</span>
    </div>
  </transition-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SuccessFilled, WarningFilled, InfoFilled, CircleCloseFilled } from '@element-plus/icons-vue'

interface ToastItem {
  id: number
  message: string
  type: 'success' | 'warning' | 'info' | 'error'
  timer?: number
}

const toasts = ref<ToastItem[]>([])
let toastId = 0

const getIcon = (type: string) => {
  const iconMap: Record<string, any> = {
    success: SuccessFilled,
    warning: WarningFilled,
    info: InfoFilled,
    error: CircleCloseFilled
  }
  return iconMap[type] || InfoFilled
}

const show = (message: string, type: 'success' | 'warning' | 'info' | 'error' = 'info') => {
  const id = ++toastId
  const toast: ToastItem = {
    id,
    message,
    type
  }

  toasts.value.push(toast)

  // 3秒后自动移除
  toast.timer = window.setTimeout(() => {
    removeToast(id)
  }, 3000)
}

const removeToast = (id: number) => {
  const index = toasts.value.findIndex(t => t.id === id)
  if (index > -1) {
    const toast = toasts.value[index]
    if (toast.timer) {
      clearTimeout(toast.timer)
    }
    toasts.value.splice(index, 1)
  }
}

// 暴露方法供外部调用
defineExpose({
  show
})
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  pointer-events: none;
}

.toast-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  margin-bottom: 10px;
  min-width: 300px;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: all;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: slideIn 0.3s ease;
}

.toast-item:hover {
  transform: translateX(-5px);
}

.toast-success {
  background: linear-gradient(135deg, #67c23a 0%, #85ce61 100%);
  color: white;
}

.toast-warning {
  background: linear-gradient(135deg, #e6a23c 0%, #ebb563 100%);
  color: white;
}

.toast-info {
  background: linear-gradient(135deg, #909399 0%, #b1b3b8 100%);
  color: white;
}

.toast-error {
  background: linear-gradient(135deg, #f56c6c 0%, #f78989 100%);
  color: white;
}

.toast-icon {
  font-size: 20px;
  margin-right: 10px;
  flex-shrink: 0;
}

.toast-message {
  flex: 1;
  font-size: 14px;
  line-height: 1.5;
  word-break: break-word;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .toast-container {
    top: 10px;
    right: 10px;
    left: 10px;
  }

  .toast-item {
    min-width: auto;
    max-width: 100%;
    padding: 10px 15px;
  }

  .toast-message {
    font-size: 13px;
  }
}
</style>