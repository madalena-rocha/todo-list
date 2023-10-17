import { useState } from 'react';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Info } from './components/Info';
import { Task } from './components/Task';

import styles from './App.module.css';
import './global.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);

  const handleTaskCreate = (newTask) => {
    setTasks([...tasks, newTask]);
  };  

  const handleTaskComplete = (isComplete) => {
    if (isComplete) {
      setCompletedTasks(completedTasks + 1);
    } else {
      setCompletedTasks(completedTasks - 1);
    }
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTask onTaskCreate={handleTaskCreate} />

        <main>
          <div className={styles.tasks}>
            <Info completedTasks={completedTasks} />

            <div className={styles.list}>
              {tasks.map((task) => (
                <Task key={task.id} task={task.text} onTaskComplete={handleTaskComplete} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
