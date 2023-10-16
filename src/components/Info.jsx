import styles from './Info.module.css';

export function Info({ completedTasks }) {
  return (
    <div className={styles.info}>
      <div className={styles.created}>
        <strong>Tarefas criadas</strong>
        <span>0</span>
      </div>

      <div className={styles.done}>
        <strong>Concluídas</strong>
        <span>{ completedTasks } de 5</span>
      </div>
    </div>
  );
}