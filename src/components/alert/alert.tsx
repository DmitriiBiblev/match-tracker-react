import { AnimatePresence, motion, MotionProps, TargetAndTransition } from 'framer-motion';
import React from 'react';
import alert from '../../assets/images/alert-triangle.svg';
import s from './alert.module.scss';

const initialStyles: TargetAndTransition = { opacity: 0, x: 5 };

const fadeInOutAnimation: MotionProps = {
  initial: initialStyles,
  animate: { opacity: 1, x: 0 },
  exit: initialStyles,
  transition: { duration: .3, ease: "easeOut" }
};

interface Props {
  showError: boolean;
}

export const Alert: React.FC<Props> = ({ showError }) => (
  <AnimatePresence>
    {
      showError &&
        <motion.div className={ s.alert } { ...fadeInOutAnimation }>
            <img src={ alert } alt="" />

            Ошибка: не удалось загрузить информацию
        </motion.div>
    }
  </AnimatePresence>
);