import React, { FC } from 'react'
import styles from './UIButton.module.scss'
import clsx from 'clsx';

interface IUIButton {
  text: string;
}

export const UIButton: FC<IUIButton> = ({ text }) => {
  return (
    <button className={clsx(styles.button, {
      [styles.back]: text === 'Назад',
    })}>
      {text}
    </button>
  )
}
