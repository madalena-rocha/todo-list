import { useState } from 'react';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Info } from './components/Info';
import { Task } from './components/Task';

import styles from './App.module.css';
import './global.css';

function App() {
  const [completedTasks, setCompletedTasks] = useState(0);

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
        <NewTask />

        <main>
          <div className={styles.tasks}>
            <Info completedTasks={completedTasks} />

            <div className={styles.list}>
              <Task onTaskComplete={handleTaskComplete} />
              <Task onTaskComplete={handleTaskComplete} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
