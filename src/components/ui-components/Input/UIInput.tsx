import React, { FC } from 'react'
import styles from './Input.module.scss'

interface IUIInputProps {
  type: string;
  heading?: string;
  placeholder?: string;
  value: string;
  iName: string;
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'div';
}

export const UIInput: FC<IUIInputProps> = ({ type, heading, placeholder, value, iName, As ='h2' }) => {
  return (
    <label className={styles.label}>
      <As className={styles.heading}>{heading}</As>
      <input type={type} name={iName} placeholder={placeholder} value={value} className={styles.input}/>
    </label>
  )
}
