import { useState } from 'react';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Info } from './components/Info';
import { Task } from './components/Task';

import styles from './App.module.css';
import './global.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  const handleTaskCreate = (newTask) => {
    setTasks([...tasks, newTask]);
    setTotalTasks(totalTasks + 1);
  };  

  const handleTaskComplete = (isComplete) => {
    if (isComplete) {
      setCompletedTasks(completedTasks + 1);
    } else {
      setCompletedTasks(completedTasks - 1);
    }
  }

  const handleTaskDelete = (taskId, isComplete) => {
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

        <main>
          <div className={styles.tasks}>
            <Info totalTasks={totalTasks} completedTasks={completedTasks} />

            <div className={styles.list}>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task.text}
                  taskId={task.id}
                  onTaskComplete={handleTaskComplete}
                  onTaskDelete={handleTaskDelete}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
