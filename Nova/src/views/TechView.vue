<template>
  <div class="tech-page">
    <header class="header">
      <h2>技术栈</h2>
      <p>这个项目主要用来练习和展示这些前端技术。</p>
    </header>

    <div class="tech-grid">
      <el-card
        v-for="tech in techList"
        :key="tech.name"
        class="tech-card"
        shadow="hover"
      >
        <div class="tech-header">
          <h3 class="tech-name">{{ tech.name }}</h3>
          <el-tag size="small" type="info">{{ tech.level }}</el-tag>
        </div>
        <p class="tech-desc">{{ tech.description }}</p>
        <ul class="tech-usage">
          <li v-for="(usage, index) in tech.usage" :key="index">
            {{ usage }}
          </li>
        </ul>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TechItem {
  name: string
  level: string
  description: string
  usage: string[]
}

const techList: TechItem[] = [
  {
    name: 'Vue 3',
    level: '核心',
    description: '整站的基础框架，使用组合式 API 组织逻辑。',
    usage: ['页面路由与组件组织', '组合式 API 管理状态和逻辑']
  },
  {
    name: 'TypeScript',
    level: '常用',
    description: '为项目增加类型约束，让组件和数据结构更清晰。',
    usage: ['组件 props 和数据类型声明', '工具函数与数据模型定义']
  },
  {
    name: 'Vue Router',
    level: '核心',
    description: '负责页面路由切换，管理首页、文章、图库、Demo 等页面。',
    usage: ['配置多级路由与参数', '在导航栏中高亮当前路由']
  },
  {
    name: 'Pinia',
    level: '预留',
    description: '全局状态管理，目前主要预留未来扩展登录、主题等状态使用。',
    usage: ['可用于保存用户偏好', '跨页面共享数据']
  },
  {
    name: 'Element Plus',
    level: 'UI',
    description: '提供按钮、输入框、卡片等基础组件，快速构建界面。',
    usage: ['导航栏输入框与开关', '首页与列表中的卡片和标签']
  }
]
</script>

<style scoped>
.tech-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header h2 {
  font-size: 22px;
  font-weight: 600;
}

.header p {
  margin-top: 4px;
  font-size: 14px;
  color: var(--text-muted);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.tech-card {
  min-height: 160px;
}

.tech-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.tech-name {
  font-size: 16px;
  font-weight: 600;
}

.tech-desc {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 6px;
}

.tech-usage {
  padding-left: 18px;
  font-size: 13px;
  color: var(--text-color);
}

.tech-usage li + li {
  margin-top: 2px;
}
</style>


