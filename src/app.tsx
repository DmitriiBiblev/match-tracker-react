import React from 'react';
import logo from './assets/images/logo.svg';
import s from './app.module.scss';
import { Match, ReloadButton } from './components';
import { matches } from './mocks';

export const App: React.FC = () => {
  return (
    <>
      <header className={ s.header }>
        <img src={ logo } alt="Match Tracker" />

        <ReloadButton />
      </header>

      <main className={s.list}>
        {
          matches.data.matches.map((match) => (
            <Match match={ match } key={ match.time } />
          ))
        }
      </main>
    </>
  );
};
