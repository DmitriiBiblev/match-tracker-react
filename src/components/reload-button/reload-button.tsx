import React from 'react';
import loader from '../../assets/images/refresh.svg';
import s from './reload-button.module.scss';

export const ReloadButton: React.FC = () => {
  return (
    <button disabled={ true } className={ s.btn }>
      Обновить

      <img
        className={ s.loader }
        src={ loader }
        alt="loader"
      />
    </button>
  );
};