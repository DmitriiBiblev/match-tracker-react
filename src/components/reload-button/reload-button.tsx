import React from 'react';
import loader from '../../assets/images/refresh.svg';
import s from './reload-button.module.scss';

interface Props {
  isLoading: boolean;
  onClick: () => void;
}

export const ReloadButton: React.FC<Props> = ({ isLoading, onClick }) => (
  <button disabled={ isLoading } className={ s.btn } onClick={ onClick }>
    Обновить

    <img
      className={ s.loader }
      src={ loader }
      alt="loader"
    />
  </button>
);