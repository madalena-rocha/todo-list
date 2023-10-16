import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Info } from './components/Info';
import { Task } from './components/Task';

import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTask />

        <main>
          <div className={styles.tasks}>
            <Info />

            <div className={styles.list}>
              <Task />
              <Task />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
