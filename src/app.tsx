import React from 'react';
import logo from './assets/images/logo.svg';
import s from './app.module.scss';
import { Alert, Match, ReloadButton } from './components';
import { useMatches } from './hooks';

export const App: React.FC = () => {
  const { matches, isLoading, isError, loadMatches } = useMatches();

  return (
    <>
      <header className={ s.header }>
        <img src={ logo } alt="Match Tracker" />

        <Alert showError={ isError } />

        <ReloadButton isLoading={ isLoading } onClick={ loadMatches } />
      </header>

      <main className={ s.list }>
        {
          matches?.map((match) => (
            <Match match={ match } key={ match.time } />
          ))
        }
      </main>
    </>
  );
};
