# Nova

一个基于 Vue3 + Vite + TypeScript 的现代化前端项目。

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **TypeScript** - JavaScript 的超集
- **Vue Router** - Vue.js 官方路由管理器
- **Pinia** - Vue 的状态管理库
- **Element Plus** - 基于 Vue 3 的组件库
- **Axios** - 基于 Promise 的 HTTP 客户端

## 功能特性

- ✅ 响应式设计（兼容 PC 端和移动端）
- ✅ 封装好的 axios 请求方法
- ✅ 路由跳转封装方法（支持携带参数）
- ✅ 公共气泡弹框组件（Toast）
- ✅ 多个二级页面示例

## 项目结构

```
Nova/
├── src/
│   ├── components/      # 公共组件
│   │   └── Toast.vue   # 气泡弹框组件
│   ├── router/         # 路由配置
│   │   └── index.ts    # 路由定义和跳转方法
│   ├── store/          # 状态管理
│   │   └── index.ts    # Pinia store
│   ├── utils/          # 工具函数
│   │   └── request.ts  # axios 请求封装
│   ├── views/          # 页面组件
│   │   ├── Home.vue    # 首页
│   │   ├── About.vue   # 关于页面
│   │   ├── Products.vue # 产品页面
│   │   ├── Contact.vue  # 联系页面
│   │   └── Profile.vue  # 个人中心
│   ├── App.vue         # 根组件
│   └── main.ts         # 入口文件
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 使用说明

### 路由跳转

```typescript
import { navigateTo, navigateToPath, goBack } from '@/router'

// 使用路由名称跳转（携带参数）
navigateTo('Products', { id: '123' }, { category: 'electronics' })

// 使用路径跳转
navigateToPath('/products', { category: 'electronics' })

// 返回上一页
goBack()
```

### 请求方法

```typescript
import { get, post, put, del } from '@/utils/request'

// GET 请求
const data = await get('/api/users', { page: 1 })

// POST 请求
const result = await post('/api/users', { name: 'John', email: 'john@example.com' })
```

### Toast 提示

```typescript
// 在组件中使用
import { inject } from 'vue'

const toast = inject<Function>('toast')

// 显示提示
toast?.('操作成功', 'success')
toast?.('请求失败', 'error')
toast?.('警告信息', 'warning')
toast?.('提示信息', 'info')
```

## 页面说明

- **首页 (/)**: 参考了现代化设计，包含导航栏、主视觉区域、特性展示等
- **产品页 (/products)**: 产品列表展示，支持搜索功能
- **关于页 (/about)**: 关于我们信息展示
- **联系页 (/contact)**: 联系方式展示和留言表单
- **个人中心 (/profile)**: 用户信息展示

## 注意事项

- 所有请求方法已封装，包含请求和响应拦截器
- Toast 组件已全局注册，可通过 inject 在任何组件中使用
- 路由跳转方法已封装，支持路径参数和查询参数
- 项目采用响应式设计，自动适配 PC 和移动端

## License

MIT