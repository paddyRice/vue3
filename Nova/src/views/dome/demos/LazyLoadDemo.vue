<template>
  <div class="demo-page">
    <header class="header">
      <h2>图片懒加载 Demo</h2>
      <p class="subtitle">滚动页面，只有出现在视口附近的图片才会真正加载。</p>
    </header>

    <section class="image-list">
      <div
        v-for="(img, index) in images"
        :key="img.id"
        class="image-wrapper"
      >
        <div class="placeholder" :class="{ loaded: img.loaded }">
          <img
            :ref="(el) => setImgRef(el, index)"
            :data-src="img.src"
            alt="懒加载示例图片"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

interface LazyImage {
  id: number
  src: string
  loaded: boolean
}

const images = ref<LazyImage[]>(
  Array.from({ length: 12 }).map((_, index) => ({
    id: index + 1,
    src: `https://images.pexels.com/photos/${1000000 + index}/pexels-photo-${1000000 + index}.jpeg`,
    loaded: false
  }))
)

const imgRefs = ref<(HTMLImageElement | null)[]>([])
let observer: IntersectionObserver | null = null

const setImgRef = (el: HTMLImageElement | null, index: number) => {
  imgRefs.value[index] = el
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          const src = img.dataset.src
          if (src && !img.src) {
            img.src = src
          }
          const idx = imgRefs.value.indexOf(img)
          if (idx !== -1) {
            images.value[idx].loaded = true
          }
          observer?.unobserve(img)
        }
      })
    },
    {
      rootMargin: '0px 0px 100px 0px',
      threshold: 0.1
    }
  )

  imgRefs.value.forEach((imgEl) => {
    if (imgEl) {
      observer?.observe(imgEl)
    }
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
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

.image-list {
  margin-top: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}

.image-wrapper {
  border-radius: 12px;
  overflow: hidden;
}

.placeholder {
  position: relative;
  padding-top: 60%;
  background: linear-gradient(90deg, #1f2937 0%, #111827 50%, #1f2937 100%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
}

.placeholder.loaded {
  animation: none;
  background: transparent;
}

.placeholder img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
*** End Patch
}"}]} />

