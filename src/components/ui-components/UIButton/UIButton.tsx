import React, { FC } from 'react'
import styles from './UIButton.module.scss'
import clsx from 'clsx';

interface IUIButton {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const UIButton: FC<IUIButton> = ({ text, type, onClick }) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.back]: text === 'Назад',
      })}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
