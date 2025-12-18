export interface Article {
  id: string
  title: string
  date: string
  summary: string
  cover?: string
  content: string
}

export interface GalleryItem {
  id: string
  title: string
  cover: string
  photos: string[]
  description: string
}

export interface DemoEntry {
  slug: string
  title: string
  description: string
  tags: string[]
}

export const recentArticles: Article[] = [
  {
    id: '1',
    title: '搭建我的前端 Demo 站',
    date: '2024-01-01',
    summary: '记录如何用 Vue3 + Vite 搭建个人练习与展示站点。',
    cover: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    content: '这里是文章内容示例，你可以后续替换为 Markdown 或真实数据。'
  },
  {
    id: '2',
    title: '实现一个优雅的文件上传组件',
    date: '2024-02-10',
    summary: '从交互与体验角度设计文件上传组件。',
    cover: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    content: '文件上传组件的实现思路与代码示例。'
  }
]

export const allArticles: Article[] = recentArticles

export const galleryItems: GalleryItem[] = [
  {
    id: 'taishan-trip',
    title: '泰山之行',
    cover: 'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg',
    photos: [
      'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg',
      'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg',
      'https://images.pexels.com/photos/210307/pexels-photo-210307.jpeg'
    ],
    description: '一次难忘的泰山登顶之旅，用照片记录沿途的风景与心情。'
  }
]

export const demoEntries: DemoEntry[] = [
  {
    slug: 'file-upload',
    title: '文件上传',
    description: '常见文件上传表单，支持多文件与进度条展示。',
    tags: ['上传', '表单', '交互']
  },
  {
    slug: 'drag-sort',
    title: '拖拽排序',
    description: '拖拽列表项改变顺序，常用于待办、看板等场景。',
    tags: ['拖拽', '排序']
  },
  {
    slug: 'lazy-load',
    title: '图片懒加载',
    description: '长列表图片按需加载，提升页面性能。',
    tags: ['性能', '懒加载']
  }
]


