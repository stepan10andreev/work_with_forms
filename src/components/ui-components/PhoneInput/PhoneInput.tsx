'use client'
import React, { ChangeEventHandler, FC, useEffect } from 'react'
import InputMask, { Props } from 'react-input-mask';
import { IUIInputProps, UIInput } from '../UIInput/UIInput';
import styles from './PhoneInput.module.scss'
import { useAppDispatch, useAppSelector } from '@/components/Hooks/useApp';
import { updateUserViewFormData } from '@/store/userViewFormData';
import { getOnlyPhoneNumber } from '@/utils/getOnlyPhoneNumber';

interface IPhoneInput extends Pick<IUIInputProps, 'heading' | 'placeholderText' | 'name'> {
  mask: string;
}

export const PhoneInput: FC<IPhoneInput> = ({mask, heading, placeholderText, name}) => {
  const currentValue = useAppSelector((state) => state.userViewForm[name]);

  const dispatch = useAppDispatch();

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;
    // console.log(currentTarget.value)
    dispatch(updateUserViewFormData(currentTarget.name, currentTarget.value))
  }

  return (
    <label className={styles.label}>
        <h2 className={styles.heading}>{heading}</h2>
        <InputMask name={name}  className={styles.input} mask={mask} onChange={onChange} value={getOnlyPhoneNumber(currentValue)} placeholder={placeholderText}/>
      </label>
  )
}
