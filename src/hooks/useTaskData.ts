import { useMemo } from 'react';
import {
  getInProgressTasks,
  getPausedTasks,
  getNotStartedTasks,
  getHistoryTasks,
} from '@/mock/data';
import { Task } from '@/types';

interface TaskDataResult {
  inProgress: Task[];
  paused: Task[];
  notStarted: Task[];
  history: Task[];
  total: number;
}

/**
 * 自定义 Hook：获取任务数据
 * 封装任务数据获取逻辑，方便复用和测试
 * 
 * @returns 各状态的任务数据
 * 
 * @example
 * const { inProgress, paused, total } = useTaskData();
 */
export const useTaskData = (): TaskDataResult => {
  const taskData = useMemo(() => {
    const inProgress = getInProgressTasks();
    const paused = getPausedTasks();
    const notStarted = getNotStartedTasks();
    const history = getHistoryTasks();

    return {
      inProgress,
      paused,
      notStarted,
      history,
      total: inProgress.length + paused.length + notStarted.length + history.length,
    };
  }, []); // 使用 mock 数据，实际项目中应该从接口获取

  return taskData;
};

