import React, { FC } from 'react'
import styles from './UIButton.module.scss'
import clsx from 'clsx';

interface IUIButton {
  text: string;
  type?: 'button' | 'submit' | 'reset';
}

export const UIButton: FC<IUIButton> = ({ text, type }) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.back]: text === 'Назад',
      })}
      type={type}
    >
      {text}
    </button>
  )
}
