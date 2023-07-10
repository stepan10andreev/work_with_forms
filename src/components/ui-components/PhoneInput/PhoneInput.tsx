'use client'
import React, { ChangeEventHandler, FC } from 'react'
import InputMask, { Props } from 'react-input-mask';
import { IUIInputProps, UIInput } from '../UIInput/UIInput';
import styles from './PhoneInput.module.scss'
import { useAppDispatch } from '@/components/Hooks/useApp';
import { updateUserViewFormData } from '@/store/userViewFormData';

interface IPhoneInput extends Pick<IUIInputProps, 'heading' | 'placeholderText' | 'name'> {
  mask: string;
}

export const PhoneInput: FC<IPhoneInput> = ({mask, heading, placeholderText, name}) => {
  const dispatch = useAppDispatch();

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;
    console.log(currentTarget.value)
    dispatch(updateUserViewFormData(currentTarget.name, currentTarget.value))
  }


  return (
    <InputMask mask={mask} onChange={onChange}>
      <label className={styles.label}>
        <h2 className={styles.heading}>{heading}</h2>
        <input className={styles.input} placeholder={placeholderText} name={name} />
      </label>
    </InputMask>
  )
}
