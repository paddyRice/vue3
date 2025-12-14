<template>
  <div id="app">
    <router-view />
    <Toast ref="toastRef" />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import Toast from './components/Toast.vue'

const toastRef = ref<InstanceType<typeof Toast> | null>(null)

// 提供全局 toast 方法
const showToast = (message: string, type: 'success' | 'warning' | 'info' | 'error' = 'info') => {
  if (toastRef.value) {
    toastRef.value.show(message, type)
  }
}

provide('toast', showToast)
</script>

<style>
#app {
  min-height: 100vh;
}
</style>