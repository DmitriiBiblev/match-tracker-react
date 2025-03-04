import React from 'react';
import { Team } from '../team';
import s from './match.module.scss';
import { Status } from '../status';

interface Props {
  match: any;
}

export const Match: React.FC<Props> = ({ match }) => {
  return (
    <div className={ s.match }>
      <Team name={ match.awayTeam.name } />

      <div className={ s.match__info }>
        { match.awayScore } : { match.homeScore }

        <Status status={ match.status } />
      </div>

      <Team name={ match.homeTeam.name } isReversed={ true } />
    </div>
  );
};