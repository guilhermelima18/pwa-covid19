import React from 'react';
import styles from './style.module.scss';

export default function Card({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  const getValue = (value) => value ? value : <p>Loading...</p>

  return (
    <>
      <div className={styles.card} style={{ borderRight: '8px solid yellow' }} value={getValue(cases)}>
        <h2>Total de casos</h2>
        <p>{cases}</p>
      </div>
      <div className={styles.card} style={{ borderRight: '8px solid yellow' }} value={getValue(todayCases)}>
        <h2>Casos hoje</h2>
        <p>{todayCases}</p>
      </div>
      <div className={styles.card} style={{ borderRight: '8px solid green' }} value={getValue(recovered)}>
        <h2>Total de recuperados</h2>
        <p>{recovered}</p>
      </div>
      <div className={styles.card} style={{ borderRight: '8px solid red' }} value={getValue(deaths)}>
        <h2>Total de mortes</h2>
        <p>{deaths}</p>
      </div>
      <div className={styles.card} style={{ borderRight: '8px solid red' }} value={getValue(todayDeaths)}>
        <h2>Mortes hoje</h2>
        <p>{todayDeaths}</p>
      </div>
    </>
  );
};