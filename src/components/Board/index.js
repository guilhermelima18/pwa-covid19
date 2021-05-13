import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.scss';

export default function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCase } = data;

  const getValue = (value) => value ? value : <p>Loading...</p>

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.card} value={getValue(cases)}></div>
      </div>
    </div>
  );
};