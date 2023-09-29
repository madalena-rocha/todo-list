import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <input 
        type="text" 
        className={styles.input} 
        placeholder="Adicione uma nova tarefa" 
      />

      <button className={styles.button}>
        Criar
        <PlusCircle />
      </button>
    </div>
  );
}