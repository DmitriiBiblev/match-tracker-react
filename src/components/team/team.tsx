import React from 'react';
import teamAvatar from '../../assets/images/illustrations_role.svg';
import cn from 'classnames';
import s from './team.module.scss';

interface Props {
  name: string;
  isReversed?: boolean;
}

export const Team: React.FC<Props> = ({ name, isReversed }) => (
  <div className={ cn(s.team, { [s.reversed]: isReversed }) }>
    <img src={ teamAvatar } alt={ teamAvatar } />

    { name }
  </div>
);