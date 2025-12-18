<template>
  <div id="app" class="app-root">
    <header class="site-header">
      <div class="nav-container">
        <div class="nav-left">
          <div class="nav-logo" @click="goHome">
            <h1>Nova Demos</h1>
          </div>
          <nav class="nav-menu" :class="{ active: menuOpen }">
            <button
              v-for="item in navItems"
              :key="item.name"
              class="nav-item"
              :class="{ active: $route.name === item.name }"
              @click="go(item.name)"
            >
              {{ item.label }}
            </button>
          </nav>
        </div>
        <div class="nav-right">
          <el-input
            v-model="keyword"
            placeholder="搜索 Demo / 文章..."
            size="small"
            class="nav-search"
            clearable
          />
          <div class="theme-toggle">
            <el-icon><Sunny /></el-icon>
            <el-switch
              v-model="isDark"
              inline-prompt
              :active-text="'夜'"
              :inactive-text="'昼'"
            />
            <el-icon><Moon /></el-icon>
          </div>
          <button class="nav-toggle" @click="toggleMenu">
            <el-icon><Menu /></el-icon>
          </button>
        </div>
      </div>
    </header>

    <main class="site-main">
      <router-view />
    </main>

    <Toast ref="toastRef" />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Toast from './components/Toast.vue'
import { Menu, Sunny, Moon } from '@element-plus/icons-vue'
import { useTheme } from './composables/useTheme'

const router = useRouter()
const route = useRoute()

const { theme, setTheme } = useTheme()

const toastRef = ref<InstanceType<typeof Toast> | null>(null)
const menuOpen = ref(false)
const keyword = ref('')

const isDark = computed({
  get() {
    return theme.value === 'dark'
  },
  set(value: boolean) {
    setTheme(value ? 'dark' : 'light')
  }
})

const navItems = [
  { name: 'Home', label: '首页' },
  { name: 'Articles', label: '文章' },
  { name: 'Gallery', label: '图库' },
  { name: 'Tech', label: '技术' },
  { name: 'Dome', label: 'DOME' },
  { name: 'About', label: '关于' }
]

const go = (name: string) => {
  if (route.name === name) return
  router.push({ name })
  menuOpen.value = false
}

const goHome = () => {
  go('Home')
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

// 提供全局 toast 方法
const showToast = (message: string, type: 'success' | 'warning' | 'info' | 'error' = 'info') => {
  if (toastRef.value) {
    toastRef.value.show(message, type)
  }
}

provide('toast', showToast)
</script>

<style>
.app-root {
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(14px);
  background: var(--header-bg);
  border-bottom: 1px solid var(--border-color);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-logo {
  cursor: pointer;
}

.nav-logo h1 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
}

.nav-menu {
  display: flex;
  gap: 8px;
}

.nav-item {
  border: none;
  padding: 6px 14px;
  border-radius: 999px;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  font-size: 14px;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.1s ease;
}

.nav-item:hover {
  background: var(--pill-hover-bg);
  color: var(--text-color);
  transform: translateY(-1px);
}

.nav-item.active {
  background: var(--pill-active-bg);
  color: var(--pill-active-text);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-search {
  width: 220px;
}

.theme-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-muted);
}

.nav-toggle {
  display: none;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--text-color);
}

.site-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 40px;
}

@media (max-width: 900px) {
  .nav-menu {
    position: fixed;
    inset: 56px 16px auto 16px;
    background: var(--header-bg);
    border-radius: 12px;
    padding: 12px;
    flex-direction: column;
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.15);
    transform: translateY(-16px);
    opacity: 0;
    pointer-events: none;
    transition:
      opacity 0.16s ease,
      transform 0.16s ease;
  }

  .nav-menu.active {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .nav-right {
    gap: 8px;
  }

  .nav-search {
    max-width: 150px;
  }

  .nav-toggle {
    display: inline-flex;
  }
}
</style>