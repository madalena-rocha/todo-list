import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTask />
      </div>
    </div>
  )
}

export default App
