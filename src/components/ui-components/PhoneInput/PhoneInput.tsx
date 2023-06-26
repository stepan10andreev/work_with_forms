'use client'
import React, { FC } from 'react'
import InputMask, { Props } from 'react-input-mask';
import { UIInput } from '../UIInput/UIInput';
import styles from './PhoneInput.module.scss'

interface IPhoneInput {
  mask: string;
  heading: string;
}

export const PhoneInput: FC<IPhoneInput> = ({mask, heading}) => {
  return (
    <InputMask mask={mask}>
      <label className={styles.label}>
        <h2 className={styles.heading}>{heading}</h2>
        <input className={styles.input} />
      </label>
    </InputMask>
  )
}
