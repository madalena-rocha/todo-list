import { useState } from 'react';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Info } from './components/Info';
import { Empty } from './components/Empty';
import { Task } from './components/Task';

import styles from './App.module.css';
import './global.css';

export interface Task {
  id: string;
  text: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [totalTasks, setTotalTasks] = useState<number>(0);
  const [completedTasks, setCompletedTasks] = useState<number>(0);

  const handleTaskCreate = (newTask: Task) => {
    setTasks([...tasks, newTask]);
    setTotalTasks(totalTasks + 1);
  };

  const handleTaskComplete = (isComplete: boolean) => {
    if (isComplete) {
      setCompletedTasks(completedTasks + 1);
    } else {
      setCompletedTasks(completedTasks - 1);
    }
  };

  const handleTaskDelete = (taskId: string, isComplete: boolean) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setTotalTasks(totalTasks - 1);

    if (isComplete) {
      setCompletedTasks(completedTasks - 1);
    }
  };

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTask onTaskCreate={handleTaskCreate} />

        <main className={styles.tasks}>
          <Info totalTasks={totalTasks} completedTasks={completedTasks} />

          <div className={styles.list}>
            {tasks.length === 0 ? (
              <Empty />
            ) : (
              tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task.text}
                  taskId={task.id}
                  onTaskComplete={handleTaskComplete}
                  onTaskDelete={handleTaskDelete}
                />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
