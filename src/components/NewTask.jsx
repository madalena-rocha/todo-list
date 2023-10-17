import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';

export function NewTask({ onTaskCreate }) {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  }

  const handleCreate = () => {
    if (newTask.trim() !== "") {
      const newTaskObject = {
        id: uuidv4(),
        text: newTask,
      };
  
      onTaskCreate(newTaskObject);
      setNewTask("");
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleCreate();
    }
  }

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