import React from 'react';

import styles from './style.module.scss';
import Card from '../Card/index';

export default function Board({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <Card data={data} />
      </div>
    </div>
  );
};