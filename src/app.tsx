import React from 'react';
import logo from './assets/images/logo.svg';
import s from './app.module.scss';
import { ReloadButton } from './components';

const App: React.FC = () => (
  <>
    <header className={ s.header }>
      <img src={ logo } alt="Match Tracker" />

      <ReloadButton />
    </header>

    <main>

    </main>
  </>
);

export default App;
