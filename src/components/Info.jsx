import styles from './Info.module.css';

export function Info({ totalTasks, completedTasks }) {
  return (
    <div className={styles.info}>
      <div className={styles.created}>
        <strong>Tarefas criadas</strong>
        <span>{totalTasks}</span>
      </div>

      <div className={styles.done}>
        <strong>Concluídas</strong>
        <span>{completedTasks} de {totalTasks}</span>
      </div>
    </div>
  );
}