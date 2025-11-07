import { Task, TaskStatus, ButtonType } from '@/types';

/**
 * Mock 用户数据
 * 使用 pravatar.cc 提供的随机头像服务
 */
const mockUsers = [
  { id: '1', name: '张三', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', name: '李四', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: '3', name: '王五', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', name: '赵六', avatar: 'https://i.pravatar.cc/150?img=4' },
  { id: '5', name: '钱七', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: '6', name: '孙八', avatar: 'https://i.pravatar.cc/150?img=6' },
];

/**
 * Mock 任务数据
 * 用于展示和开发
 */
export const mockTasks: Task[] = [
  // 进行中的任务
  {
    id: '1',
    title: 'NGR国庆访谈',
    subtitle: 'Product',
    tags: [
      { id: 't1', label: '天然', color: 'blue' },
      { id: 't2', label: '生羊饲喂咐', color: 'orange' },
    ],
    creator: mockUsers[0],
    collaborators: [mockUsers[1], mockUsers[2], mockUsers[3]],
    createTime: '2024-02-11 10:00:00',
    endTime: '2024-02-11 10:00:00',
    location: '端手游牧放园注址-DI-0445',
    status: TaskStatus.IN_PROGRESS,
    buttonType: ButtonType.ENTER,
  },
  {
    id: '2',
    title: 'NGR国庆访谈',
    subtitle: 'Day5 AM',
    tags: [
      { id: 't3', label: '天然', color: 'blue' },
      { id: 't4', label: '生羊饲喂咐', color: 'orange' },
    ],
    creator: mockUsers[1],
    collaborators: [mockUsers[2], mockUsers[3], mockUsers[4]],
    createTime: '2024-02-11 10:00:00',
    endTime: '2024-02-11 10:00:00',
    location: '端手游牧放园注址-DI-0445',
    status: TaskStatus.IN_PROGRESS,
    buttonType: ButtonType.CONTINUE,
  },
  // 暂停中的任务
  {
    id: '3',
    title: 'NGR国庆访谈',
    subtitle: 'Day5 AM',
    tags: [
      { id: 't5', label: '天然', color: 'blue' },
      { id: 't6', label: '生羊饲喂咐', color: 'orange' },
    ],
    creator: mockUsers[2],
    collaborators: [mockUsers[0], mockUsers[3], mockUsers[4]],
    createTime: '2024-02-11 10:00:00',
    endTime: '2024-02-11 10:00:00',
    location: '端手游牧放园注址-DI-0445',
    status: TaskStatus.PAUSED,
    buttonType: ButtonType.CONTINUE,
  },
  // 未开始的任务
  {
    id: '9',
    title: 'NGR国庆访谈',
    subtitle: 'Day5 AM',
    tags: [
      { id: 't17', label: '天然', color: 'blue' },
      { id: 't18', label: '生羊饲喂咐', color: 'orange' },
    ],
    creator: mockUsers[2],
    collaborators: [mockUsers[0], mockUsers[3], mockUsers[4], mockUsers[5]],
    createTime: '2024-02-11 10:00:00',
    endTime: '2024-02-11 10:00:00',
    location: '端手游牧放园注址-DI-0445',
    status: TaskStatus.NOT_STARTED,
    buttonType: ButtonType.START,
  },
  // 历史数据
  {
    id: '4',
    title: 'NGR国庆访谈',
    subtitle: '',
    tags: [
      { id: 't7', label: '天然', color: 'blue' },
      { id: 't8', label: '生羊饲喂咐', color: 'orange' },
    ],
    creator: mockUsers[0],
    collaborators: [mockUsers[1], mockUsers[2]],
    createTime: '2024-08-19 10:00:00',
    endTime: '2024-08-17 10:00:00',
    dateRange: '2024-08-19 to 2024-08-17',
    location: '端手游牧放园注址-DI-0445',
    status: TaskStatus.COMPLETED,
    buttonType: ButtonType.ENTER,
  },
  {
    id: '5',
    title: 'NGR国庆访谈/NGR国庆访谈/NGR国庆访谈/NGR...',
    subtitle: '',
    tags: [
      { id: 't9', label: '天然', color: 'blue' },
      { id: 't10', label: '生羊饲喂咐', color: 'orange' },
    ],
    creator: mockUsers[1],
    collaborators: [mockUsers[2], mockUsers[3]],
    createTime: '2024-08-11 10:00:00',
    endTime: '2024-08-10 10:00:00',
    dateRange: '2024-08-11 to 2024-08-10',
    location: '端手游牧放园注址-DI-0445',
    status: TaskStatus.COMPLETED,
    buttonType: ButtonType.ENTER,
  },
  {
    id: '6',
    title: 'NGR国庆访谈',
    subtitle: '',
    tags: [
      { id: 't11', label: '天然', color: 'blue' },
      { id: 't12', label: '生羊饲喂咐', color: 'orange' },
    ],
    creator: mockUsers[2],
    collaborators: [mockUsers[0], mockUsers[1]],
    createTime: '2024-08-11 10:00:00',
    endTime: '2024-08-14 10:00:00',
    dateRange: '2024-08-11 to 2024-08-14',
    location: '端手游牧放园注址-DI-0445',
    status: TaskStatus.COMPLETED,
    buttonType: ButtonType.ENTER,
  },
  {
    id: '7',
    title: 'NGR国庆访谈',
    subtitle: '',
    tags: [
      { id: 't13', label: '天然', color: 'blue' },
      { id: 't14', label: '生羊饲喂咐', color: 'orange' },
    ],
    creator: mockUsers[3],
    collaborators: [mockUsers[4], mockUsers[5]],
    createTime: '2024-08-08 10:00:00',
    endTime: '2024-08-10 10:00:00',
    dateRange: '2024-08-08 to 2024-08-10',
    location: '端手游牧放园注址-DI-0445',
    status: TaskStatus.COMPLETED,
    buttonType: ButtonType.ENTER,
  },
  {
    id: '8',
    title: 'NGR国庆访谈',
    subtitle: '',
    tags: [
      { id: 't15', label: '天然', color: 'blue' },
      { id: 't16', label: '生羊饲喂咐', color: 'orange' },
    ],
    creator: mockUsers[4],
    collaborators: [mockUsers[0], mockUsers[1], mockUsers[2]],
    createTime: '2024-08-08 10:00:00',
    endTime: '2024-08-10 10:00:00',
    dateRange: '2024-08-08 to 2024-08-10',
    location: '端手游牧放园注址-DI-0445',
    status: TaskStatus.COMPLETED,
    buttonType: ButtonType.ENTER,
  },
];

/**
 * 根据状态获取任务列表
 */
export const getTasksByStatus = (status: TaskStatus): Task[] => {
  return mockTasks.filter((task) => task.status === status);
};

/**
 * 获取所有进行中的任务（只包含真正在进行中的任务）
 */
export const getInProgressTasks = (): Task[] => {
  return getTasksByStatus(TaskStatus.IN_PROGRESS);
};

/**
 * 获取所有暂停中的任务
 */
export const getPausedTasks = (): Task[] => {
  return getTasksByStatus(TaskStatus.PAUSED);
};

/**
 * 获取所有未开始的任务
 */
export const getNotStartedTasks = (): Task[] => {
  return getTasksByStatus(TaskStatus.NOT_STARTED);
};

/**
 * 获取所有历史任务
 */
export const getHistoryTasks = (): Task[] => {
  return getTasksByStatus(TaskStatus.COMPLETED);
};

