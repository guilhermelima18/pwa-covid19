import React from 'react';
import './styles/global.css';

import styles from './styles/App.module.scss';
import Main from './containers/Main';

export default function App() {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  );
};