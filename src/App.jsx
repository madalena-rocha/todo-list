import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Info } from './components/Info';
import { Empty } from './components/Empty';

import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTask />

        <div className={styles.tasks}>
          <Info />
          <Empty />
        </div>
      </div>
    </div>
  )
}

export default App
