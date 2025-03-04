import React from 'react';
import loader from '../../assets/images/refresh.svg';
import s from './reload-button.module.scss';

interface Props {
  onClick: () => void;
}

export const ReloadButton: React.FC<Props> = ({ onClick }) => (
  <button disabled={ false } className={ s.btn } onClick={ onClick }>
    Обновить

    <img
      className={ s.loader }
      src={ loader }
      alt="loader"
    />
  </button>
);