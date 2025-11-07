import { useCallback, useMemo } from 'react';
import { TabPanel } from './components/layout';
import { TaskList } from './components/business';
import { useTaskData } from './hooks';
import { Task } from './types';
import './App.css';

function App() {
  // 使用自定义 Hook 获取任务数据
  const taskData = useTaskData();

  const tabs = useMemo(() => [
    { key: 'in-progress', label: '进行中', count: taskData.inProgress.length },
    { key: 'paused', label: '暂停中', count: taskData.paused.length },
    { key: 'not-started', label: '未开始', count: taskData.notStarted.length },
    { key: 'history', label: '历史数据', count: taskData.history.length },
  ], [taskData]);

  // 处理任务操作按钮点击
  const handleTaskAction = useCallback((task: Task) => {
    console.log('[Task Action]', task.id, task.buttonType);
    
    // TODO: 后续替换为实际的跳转逻辑
    alert(`点击了任务: ${task.title}`);
    
    // 根据不同的 buttonType 可以做不同的处理
    // switch (task.buttonType) {
    //   case ButtonType.ENTER:
    //     // 进入直播间
    //     break;
    //   case ButtonType.CONTINUE:
    //     // 继续直播
    //     break;
    //   case ButtonType.START:
    //     // 开始直播
    //     break;
    // }
  }, []);

  const handleTaskMore = useCallback((task: Task) => {
    console.log('[Task More]', task.id);
    // TODO: 显示更多操作菜单（编辑、删除、分享等）
    alert(`更多操作: ${task.title}`);
  }, []);

  // 根据当前激活的 tab 渲染对应的内容
  const renderContent = useCallback((activeKey: string) => {
    const taskMap = {
      'in-progress': taskData.inProgress,
      'paused': taskData.paused,
      'not-started': taskData.notStarted,
      'history': taskData.history,
    };

    const currentTasks = taskMap[activeKey as keyof typeof taskMap];
    
    if (!currentTasks) {
      console.warn('Unknown tab key:', activeKey);
      return null;
    }

    // 历史数据使用不同的展示方式
    const isHistoryTab = activeKey === 'history';

    return (
      <TaskList
        tasks={currentTasks}
        onTaskAction={handleTaskAction}
        onTaskMore={handleTaskMore}
        isHistory={isHistoryTab}
      />
    );
  }, [taskData, handleTaskAction, handleTaskMore]);

  return (
    <div className="app">
      <main className="app-main">
        <TabPanel tabs={tabs} defaultActiveKey="in-progress">
          {renderContent}
        </TabPanel>
      </main>
    </div>
  );
}

export default App;

