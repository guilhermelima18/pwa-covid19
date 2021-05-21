import React from 'react';
import styles from './style.module.scss';

export default function Button({ onClick, text }) {
  return (
    <button className={styles.button} onClick={onClick}>{text}</button>
  );
};