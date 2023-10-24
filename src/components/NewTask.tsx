import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';

import { Task } from '../App';

interface NewTaskProps {
  onTaskCreate: (newTask: Task) => void;
}

export function NewTask({ onTaskCreate }: NewTaskProps) {
  const [newTask, setNewTask] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleCreate = () => {
    if (newTask.trim() !== "") {
      const newTaskObject = {
        id: uuidv4(),
        text: newTask,
      };

      onTaskCreate(newTaskObject);
      setNewTask("");
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleCreate();
    }
  };

  return (
    <div className={styles.newTask}>
      <input 
        type="text" 
        className={styles.input} 
        placeholder="Adicione uma nova tarefa" 
        value={newTask} 
        onChange={handleInputChange} 
        onKeyDown={handleKeyDown} 
      />

      <button className={styles.button} onClick={handleCreate}>
        Criar
        <PlusCircle />
      </button>
    </div>
  );
}