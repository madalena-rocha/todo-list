import { Empty } from './Empty';

import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>

        <div className={styles.done}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </div>

      <Empty />
    </div>
  );
}