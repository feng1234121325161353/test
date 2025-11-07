# 任务管理系统

基于 React + TypeScript 开发的现代化任务管理系统。

## 技术栈

- React 18
- TypeScript 5.2+
- Vite 5
- CSS Modules
- Day.js

## 项目特点

- 🎨 **组件化设计**: 高度抽象的可复用组件，清晰的分层架构
- 📝 **TypeScript**: 完整的类型定义，提供更好的开发体验和代码提示
- 🏗️ **工程化**: 规范的项目结构和代码组织，易于维护和扩展
- 🎯 **最佳实践**: 遵循 React Hooks 最佳实践，使用 memo、useCallback、useMemo 优化性能
- 🔧 **自定义 Hooks**: 封装业务逻辑，提高代码复用性
- 🚀 **性能优化**: 使用 React.memo 避免不必要的重渲染

## 项目结构

```
src/
├── components/        # 组件目录
│   ├── base/         # 基础UI组件
│   │   ├── Avatar/   # 头像组件
│   │   ├── Tag/      # 标签组件
│   │   └── Button/   # 按钮组件
│   ├── business/     # 业务组件
│   │   ├── TaskCard/ # 任务卡片
│   │   └── TaskList/ # 任务列表
│   └── layout/       # 布局组件
│       └── TabPanel/ # 标签页组件
├── hooks/            # 自定义 Hooks
│   └── useTaskData.ts
├── types/            # TypeScript 类型定义
├── utils/            # 工具函数（防抖、节流等）
├── constants/        # 常量定义
├── mock/             # Mock 数据
└── styles/           # 全局样式
```

## 性能优化

- ✅ 使用 `React.memo` 包裹组件避免不必要的重渲染
- ✅ 使用 `useCallback` 缓存回调函数
- ✅ 使用 `useMemo` 缓存计算结果
- ✅ 自定义 Hook 封装数据获取逻辑
- ✅ 组件懒加载（可扩展）

## 启动项目

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 代码检查
npm run lint
```

## 组件说明

### 基础组件（Base Components）
- `Avatar`: 头像组件，支持单个和组头像，带悬停动画
- `Tag`: 标签组件，支持5种颜色主题
- `Button`: 按钮组件，支持多种状态和样式

### 业务组件（Business Components）
- `TaskCard`: 任务卡片组件，展示任务详情
- `HistoryTaskCard`: 历史任务卡片，特殊展示样式
- `TaskList`: 任务列表组件，支持空状态展示

### 布局组件（Layout Components）
- `TabPanel`: 标签页组件，支持 Render Props 模式

## 开发规范

- 组件使用 TypeScript 编写，明确类型定义
- 使用 CSS Modules 避免样式污染
- 组件添加 `displayName` 便于调试
- 使用 memo 包裹的组件需要注意依赖项
- 回调函数使用 useCallback 优化性能

## TODO

- [ ] 添加任务编辑功能
- [ ] 添加任务搜索和筛选
- [ ] 优化历史数据的分组逻辑
- [ ] 添加单元测试
- [ ] 添加页面加载状态

