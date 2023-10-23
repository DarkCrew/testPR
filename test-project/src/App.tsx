import React, { ReactElement } from 'react';

import MainPage from './pages/MainPage/MainPage';

import './App.css';
import './styles/normalize.css';
import './styles/index.scss';

const App = (): ReactElement => {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
};

export default App;
