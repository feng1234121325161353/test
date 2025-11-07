import React, { memo, useCallback } from 'react';
import { Task } from '@/types';
import { Avatar, AvatarGroup, TagGroup, Button, IconButton } from '@/components/base';
import { BUTTON_TEXT_MAP, BUTTON_STYLE_MAP } from '@/constants';
import { formatDateTime } from '@/utils';
import styles from './TaskCard.module.css';

interface TaskCardProps {
  task: Task;
  onButtonClick?: (task: Task) => void;
  onMoreClick?: (task: Task) => void;
}

/**
 * 任务卡片组件
 * 用于展示单个任务的详细信息
 */
export const TaskCard: React.FC<TaskCardProps> = memo(({
  task,
  onButtonClick,
  onMoreClick,
}) => {
  const handleButtonClick = useCallback(() => {
    onButtonClick?.(task);
  }, [task, onButtonClick]);

  const handleMoreClick = useCallback(() => {
    onMoreClick?.(task);
  }, [task, onMoreClick]);
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardLeft}>
          {/* 标题和标签区域 */}
          <div className={styles.titleSection}>
            <TagGroup tags={task.tags} />
          </div>
          
          <h3 className={styles.title}>
            {task.title}
            {task.subtitle && (
              <>
                <span style={{ margin: '0 8px', color: '#d9d9d9' }}>»</span>
                <span className={styles.subtitle}>{task.subtitle}</span>
              </>
            )}
          </h3>

          {/* 用户信息区域 */}
          <div className={styles.userSection}>
            <div className={styles.userGroup}>
              <span className={styles.userLabel}>创建者</span>
              <Avatar user={task.creator} size="small" />
            </div>
            <div className={styles.userGroup}>
              <span className={styles.userLabel}>协作者</span>
              <AvatarGroup users={task.collaborators} maxCount={4} />
            </div>
          </div>

          {/* 时间信息区域 */}
          <div className={styles.timeSection}>
            <div className={styles.timeItem}>
              <span>⏰</span>
              <span>{formatDateTime(task.createTime, 'YYYY-MM-DD HH:mm:ss')}</span>
            </div>
            <div className={styles.timeItem}>
              <span>⏱</span>
              <span>{formatDateTime(task.endTime, 'YYYY-MM-DD HH:mm:ss')}</span>
            </div>
          </div>

          {/* 地点信息 */}
          <div className={styles.location}>
            <span>📍</span>
            <span>{task.location}</span>
          </div>
        </div>

        <div className={styles.cardRight}>
          <Button
            type={BUTTON_STYLE_MAP[task.buttonType]}
            onClick={handleButtonClick}
          >
            {BUTTON_TEXT_MAP[task.buttonType]}
          </Button>
          <IconButton
            icon={<span className={styles.moreButton}>⋮</span>}
            onClick={handleMoreClick}
            title="更多操作"
          />
        </div>
      </div>
    </div>
  );
});

TaskCard.displayName = 'TaskCard';

interface HistoryTaskCardProps {
  title: string;
  dateRange: string;
  tasks: Task[];
  onTaskClick?: (task: Task) => void;
}

/**
 * 历史任务卡片组件
 * 用于展示历史任务列表，与常规任务卡片样式不同
 */
export const HistoryTaskCard: React.FC<HistoryTaskCardProps> = memo(({
  title,
  dateRange,
  tasks,
  onTaskClick,
}) => {
  const handleTaskClick = useCallback((task: Task) => {
    onTaskClick?.(task);
  }, [onTaskClick]);
  return (
    <div className={`${styles.card} ${styles.historyCard}`}>
      <div className={styles.cardHeader}>
        <div>
          <h3 className={styles.historyTitle}>{title}</h3>
          <div className={styles.historyDateRange}>{dateRange}</div>
        </div>
      </div>

      <ul className={styles.historyList}>
        {tasks.map((task) => (
          <li 
            key={task.id} 
            className={styles.historyItem}
            onClick={() => handleTaskClick(task)}
          >
            <div className={styles.historyItemLeft}>
              <span className={styles.historyItemTitle}>{task.title}</span>
            </div>
            <div className={styles.historyItemRight}>
              <div className={styles.timeItem}>
                <span>⏰</span>
                <span className={styles.historyItemTime}>
                  {formatDateTime(task.createTime, 'YYYY-MM-DD HH:mm:ss')}
                </span>
              </div>
              <div className={styles.timeItem}>
                <span>⏱</span>
                <span className={styles.historyItemTime}>
                  {formatDateTime(task.endTime, 'YYYY-MM-DD HH:mm:ss')}
                </span>
              </div>
              <span className={styles.historyItemLocation}>{task.location}</span>
              <AvatarGroup users={[task.creator]} size="small" />
              <span className={styles.expandIcon}>📋</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

HistoryTaskCard.displayName = 'HistoryTaskCard';

