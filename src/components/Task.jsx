import { useState } from 'react';

import { Circle, CheckCircle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task({ task, taskId, onTaskComplete, onTaskDelete }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onTaskComplete(!isChecked);
  };

  const handleDelete = () => {
    onTaskDelete(taskId, isChecked);
  };

  return (
    <div className={styles.task}>
      <label className={isChecked ? styles.completed : ''}>
        <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} />
        
        <div>
          {
            isChecked ? 
            <CheckCircle weight="fill" className={styles.checkCircle} /> : 
            <Circle weight="duotone" className={styles.circle} />
          }
        </div>
        
        {task}
      </label>

      <button title="Deletar tarefa" onClick={handleDelete}>
        <Trash />
      </button>
    </div>
  );
}