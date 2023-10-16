import { useState } from 'react';

import { Circle, CheckCircle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task({ onTaskComplete }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onTaskComplete(!isChecked);
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
        
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </label>

      <button title="Deletar tarefa">
        <Trash />
      </button>
    </div>
  );
}