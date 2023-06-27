'use client'
import React, { FC } from 'react'
import InputMask, { Props } from 'react-input-mask';
import { IUIInputProps, UIInput } from '../UIInput/UIInput';
import styles from './PhoneInput.module.scss'

interface IPhoneInput extends Pick<IUIInputProps, 'heading' | 'placeholderText' | 'name'> {
  mask: string;
}

export const PhoneInput: FC<IPhoneInput> = ({mask, heading, placeholderText, name}) => {
  return (
    <InputMask mask={mask}>
      <label className={styles.label}>
        <h2 className={styles.heading}>{heading}</h2>
        <input className={styles.input} placeholder={placeholderText} name={name}/>
      </label>
    </InputMask>
  )
}
