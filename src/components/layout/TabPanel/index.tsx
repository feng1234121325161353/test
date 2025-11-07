import React, { useState, useCallback, memo } from 'react';
import { TabItem } from '@/types';
import styles from './TabPanel.module.css';
import { classNames } from '@/utils';

interface TabPanelProps {
  tabs: TabItem[];
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
  children: (activeKey: string) => React.ReactNode;
}

/**
 * Tab 标签页组件
 * 支持受控和非受控两种模式
 */
export const TabPanel: React.FC<TabPanelProps> = memo(({
  tabs,
  defaultActiveKey,
  onChange,
  children,
}) => {
  const [activeKey, setActiveKey] = useState(
    defaultActiveKey || tabs[0]?.key || ''
  );

  const handleTabClick = useCallback((key: string) => {
    if (key === activeKey) return; // 避免重复点击
    
    setActiveKey(key);
    onChange?.(key);
  }, [activeKey, onChange]);

  // 边界情况：如果没有 tabs 数据
  if (!tabs || tabs.length === 0) {
    return null;
  }

  return (
    <div className={styles.tabPanel}>
      <div className={styles.tabHeader}>
        {tabs.map((tab) => {
          const isActive = activeKey === tab.key;
          
          return (
            <div
              key={tab.key}
              className={classNames(
                styles.tabItem,
                isActive && styles.active
              )}
              onClick={() => handleTabClick(tab.key)}
              role="tab"
              aria-selected={isActive}
            >
              {tab.label}
              {typeof tab.count === 'number' && (
                <span className={styles.tabCount}>{tab.count}</span>
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.tabContent}>
        {children(activeKey)}
      </div>
    </div>
  );
});

TabPanel.displayName = 'TabPanel';

