import React from 'react';
import COUNTRIES from '../../constants/countries';
import Button from '../Button/index';

import styles from './style.module.scss';

const navigatorHasShare = navigator.share;

export default function Panel({ updateAt, onChange, data, country, getCovidData }) {
  const { cases } = data;

  const textCovid19 = `País: ${country} - Total de casos: ${cases}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  };

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid-19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19.vercel.app/'
    })
  };

  const renderShareButton = (
    <>
      <Button onClick={shareInfo} text="Compartilhar" />
    </>
  );

  const renderCopyButton = (
    <>
      <Button onClick={copyInfo} text="Copiar" />
    </>
  );

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
      {navigatorHasShare ? renderShareButton : renderCopyButton}
    </div>
  );
};