import React from 'react';
import alert from '../../assets/images/alert-triangle.svg';
import s from './alert.module.scss';

export const Alert: React.FC = () => {
  return (
    <div className={ s.alert }>
      <img src={ alert } alt="" />

      Ошибка: не удалось загрузить информацию
    </div>
  );
};