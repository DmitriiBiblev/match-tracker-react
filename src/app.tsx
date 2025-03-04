import React, { useState } from 'react';
import logo from './assets/images/logo.svg';
import s from './app.module.scss';
import { Alert, Match, ReloadButton } from './components';
import { matches } from './mocks';

export const App: React.FC = () => {
  const [showError, setShowError] = useState(false);

  return (
    <>
      <header className={ s.header }>
        <img src={ logo } alt="Match Tracker" />

        <Alert showError={ showError } />

        <ReloadButton onClick={ () => setShowError(value => !value) } />
      </header>

      <main className={ s.list }>
        {
          matches.data.matches.map((match) => (
            <Match match={ match } key={ match.time } />
          ))
        }
      </main>
    </>
  );
};
