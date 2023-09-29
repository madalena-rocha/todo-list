import { PlusCircle } from 'phosphor-react';
import styles from './Button.module.css'

export function Button() {
  return (
    <button className={styles.button}>
      Criar
      <PlusCircle />
    </button>
  );
}