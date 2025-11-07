import React, { memo, useMemo } from 'react';
import { Task } from '@/types';
import { TaskCard, HistoryTaskCard } from '../TaskCard';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[];
  onTaskAction?: (task: Task) => void;
  onTaskMore?: (task: Task) => void;
  isHistory?: boolean;
}

/**
 * 任务列表组件
 * 负责渲染任务卡片列表，支持普通模式和历史模式
 */
export const TaskList: React.FC<TaskListProps> = memo(({
  tasks,
  onTaskAction,
  onTaskMore,
  isHistory = false,
}) => {
  // 缓存分组结果，避免每次渲染都重新计算
  const groupedTasks = useMemo(() => {
    if (!isHistory) return null;
    return groupTasksByDateRange(tasks);
  }, [tasks, isHistory]);

  // 空状态处理
  if (!tasks || tasks.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>📭</div>
        <div className={styles.emptyText}>暂无任务</div>
      </div>
    );
  }

  // 历史数据展示
  if (isHistory && groupedTasks) {
    return (
      <div className={styles.taskList}>
        {groupedTasks.map((group, index) => (
          <HistoryTaskCard
            key={`${group.title}-${index}`} // 用组合 key 避免重复
            title={group.title}
            dateRange={group.dateRange}
            tasks={group.tasks}
            onTaskClick={onTaskAction}
          />
        ))}
      </div>
    );
  }

  // 常规任务列表展示
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onButtonClick={onTaskAction}
          onMoreClick={onTaskMore}
        />
      ))}
    </div>
  );
});

TaskList.displayName = 'TaskList';

/**
 * 按日期范围分组任务
 * TODO: 后续可以优化为按周/月分组
 */
function groupTasksByDateRange(tasks: Task[]): Array<{
  title: string;
  dateRange: string;
  tasks: Task[];
}> {
  // 当前简化实现：每个任务单独成组
  // 实际项目中可能需要根据时间段合并相同日期范围的任务
  return tasks.map(task => ({
    title: task.title,
    dateRange: task.dateRange || `${task.createTime.split(' ')[0]} to ${task.endTime.split(' ')[0]}`,
    tasks: [task],
  }));
}

