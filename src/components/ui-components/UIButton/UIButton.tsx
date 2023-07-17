import React, { FC } from 'react'
import styles from './UIButton.module.scss'
import clsx from 'clsx';

interface IUIButton {
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  name?: string;
  onClick?: () => void;
  icon?: React.JSX.Element
}

export const UIButton: FC<IUIButton> = ({ text, type, name, onClick, icon }) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.back]: text === 'Назад',
        [styles.add]: name === 'addButton',
        [styles.delete]: name === 'deleteButton',
      })}
      type={type}
      name={name}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  )
}
