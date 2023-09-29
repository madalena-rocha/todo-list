import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Info } from './components/Info';

import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTask />
        <Info />
      </div>
    </div>
  )
}

export default App
