<template>
  <div class="demo-page">
    <header class="header">
      <h2>拖拽排序 Demo</h2>
      <p class="subtitle">拖拽任务卡片，改变它们的顺序。</p>
    </header>

    <section class="list">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="card"
        draggable="true"
        @dragstart="onDragStart(index)"
        @dragover.prevent
        @drop="onDrop(index)"
      >
        <div class="card-handle">↕</div>
        <div class="card-content">
          <h3 class="title">{{ item.title }}</h3>
          <p class="desc">{{ item.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface SortItem {
  id: number
  title: string
  description: string
}

const items = ref<SortItem[]>([
  { id: 1, title: '文件上传组件', description: '设计上传交互和校验逻辑。' },
  { id: 2, title: '图片懒加载', description: '优化长列表的加载性能。' },
  { id: 3, title: '表单校验', description: '封装常用表单校验规则。' },
  { id: 4, title: '拖拽排序', description: '实现平滑且直观的拖拽体验。' }
])

const draggingIndex = ref<number | null>(null)

const onDragStart = (index: number) => {
  draggingIndex.value = index
}

const onDrop = (targetIndex: number) => {
  if (draggingIndex.value === null || draggingIndex.value === targetIndex) return

  const updated = [...items.value]
  const [moved] = updated.splice(draggingIndex.value, 1)
  updated.splice(targetIndex, 0, moved)
  items.value = updated
  draggingIndex.value = null
}
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

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  cursor: grab;
}

.card-handle {
  font-size: 18px;
  color: var(--text-muted);
}

.card-content .title {
  font-size: 15px;
  font-weight: 600;
}

.card-content .desc {
  font-size: 13px;
  color: var(--text-muted);
}
</style>
*** End Patch"}} ***!

