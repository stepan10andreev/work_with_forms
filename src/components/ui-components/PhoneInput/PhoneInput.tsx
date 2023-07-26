'use client'
import React, { ChangeEventHandler, FC, useState } from 'react'
import InputMask from 'react-input-mask';
import { IUIInputProps } from '../UIInput/UIInput';
import styles from './PhoneInput.module.scss'
import { useAppDispatch, useAppSelector } from '@/components/Hooks/useApp';
import { updateUserViewFormData } from '@/store/userViewFormData';
import { getOnlyPhoneNumber } from '@/utils/getOnlyPhoneNumber';
import { validateMinPhoneLength } from '@/utils/validation/validateMinPhoneLength';
import { ErrorText } from '../ErrorText/ErrorText';

interface IPhoneInput extends Pick<IUIInputProps, 'heading' | 'placeholderText' | 'name'> {
  mask: string;
}

const minPhoneLength = 10;

export const PhoneInput: FC<IPhoneInput> = ({ mask, heading, placeholderText, name }) => {
  const [isMinPhoneLength, setMinPhoneLength] = useState(true);
  const currentValue = useAppSelector((state) => state.userViewForm[name]);

  const dispatch = useAppDispatch();

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;

    dispatch(updateUserViewFormData(currentTarget.name, currentTarget.value));
    validateMinPhoneLength(getOnlyPhoneNumber(currentTarget.value), minPhoneLength) && setMinPhoneLength(true);
  }

  const onBlur: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;

    validateMinPhoneLength(getOnlyPhoneNumber(currentTarget.value), minPhoneLength) ? setMinPhoneLength(true) : setMinPhoneLength(false);
  }

  return (
    <label className={styles.label}>
      <h2 className={styles.heading}>{heading}</h2>

      <InputMask
        name={name}
        className={styles.input}
        mask={mask} onBlur={onBlur}
        onChange={onChange}
        value={getOnlyPhoneNumber(currentValue)}
        placeholder={placeholderText}
      />

      {!isMinPhoneLength && (<ErrorText errorText={`Введите номер телефона полностью`} />)}
    </label>
  )
}
