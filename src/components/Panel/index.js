import React from 'react';
import COUNTRIES from '../../constants/countries';

import styles from './style.module.scss';

export default function Panel({ updateAt, onChange, data, country, getCovidData }) {

  return (
    <div className={styles.container}>
      <h2>COVID-19</h2>
      <h4>Painel Coronavírus</h4>
      <p>Atualizado em: {updateAt}</p>
      <div className={styles.selectCountry}>
        <select onChange={onChange} value={country}>
          {COUNTRIES.map((countries, index) => (
            <option key={`Country-${index}`} value={countries.value}>
              {countries.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};