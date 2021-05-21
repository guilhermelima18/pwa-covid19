import React from 'react';
import './styles/global.css';

import styles from './styles/App.module.scss';
import Api from './api';
import Board from './components/Board/index';
import Panel from './components/Panel/index';

export default function App() {
  const [data, setData] = React.useState({});
  const [country, setCountry] = React.useState('brazil');
  const updateAt = new Date().toLocaleString();

  const getCovidData = React.useCallback((country) => {
    Api.getCountry(country)
      .then((data) => setData(data))
  }, []);

  React.useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country])

  const handleChange = ({ target }) => {
    const country = target.value;
    setCountry(country)
  };

  return (
    <div className={styles.container}>
      <Panel 
        updateAt={updateAt}
        onChange={handleChange}
        country={country}
        getCovidData={getCovidData}
        data={data}
      />
      <Board data={data} />
    </div>
  );
};