/**
 * 用户信息类型
 */
export interface User {
  id: string;
  name: string;
  avatar: string;
}

/**
 * 标签类型
 */
export interface Tag {
  id: string;
  label: string;
  color: TagColor;
}

/**
 * 标签颜色枚举
 */
export type TagColor = 'blue' | 'orange' | 'green' | 'red' | 'purple';

/**
 * 任务状态枚举
 */
export enum TaskStatus {
  IN_PROGRESS = 'in_progress',      // 进行中
  PAUSED = 'paused',                 // 暂停中
  PENDING = 'pending',               // 待开始
  NOT_STARTED = 'not_started',      // 未开始
  COMPLETED = 'completed'            // 已完成
}

/**
 * 按钮类型枚举
 */
export enum ButtonType {
  ENTER = 'enter',      // 进入直播
  CONTINUE = 'continue', // 继续直播
  START = 'start'        // 开始直播
}

/**
 * 任务信息类型
 */
export interface Task {
  id: string;
  title: string;
  subtitle?: string;
  tags: Tag[];
  creator: User;
  collaborators: User[];
  createTime: string;
  endTime: string;
  dateRange?: string;
  location: string;
  status: TaskStatus;
  buttonType: ButtonType;
}

/**
 * 标签页类型
 */
export interface TabItem {
  key: string;
  label: string;
  count?: number;
}

/**
 * 任务分组类型
 */
export interface TaskGroup {
  status: TaskStatus;
  label: string;
  tasks: Task[];
}

