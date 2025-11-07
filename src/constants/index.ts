import { TaskStatus, ButtonType } from '@/types';

/**
 * 任务状态标签映射
 */
export const TASK_STATUS_LABELS: Record<TaskStatus, string> = {
  [TaskStatus.IN_PROGRESS]: '进行中',
  [TaskStatus.PAUSED]: '暂停中',
  [TaskStatus.PENDING]: '待开始',
  [TaskStatus.NOT_STARTED]: '未开始',
  [TaskStatus.COMPLETED]: '已完成',
};

/**
 * 按钮文本映射
 */
export const BUTTON_TEXT_MAP: Record<ButtonType, string> = {
  [ButtonType.ENTER]: '进入直播',
  [ButtonType.CONTINUE]: '继续直播',
  [ButtonType.START]: '开始直播',
};

/**
 * 按钮样式类型映射
 */
export const BUTTON_STYLE_MAP: Record<ButtonType, 'primary' | 'default'> = {
  [ButtonType.ENTER]: 'primary',
  [ButtonType.CONTINUE]: 'default',
  [ButtonType.START]: 'default',
};

/**
 * 标签颜色映射
 */
export const TAG_COLOR_MAP = {
  blue: '#1890ff',
  orange: '#ff9800',
  green: '#52c41a',
  red: '#f5222d',
  purple: '#722ed1',
} as const;

