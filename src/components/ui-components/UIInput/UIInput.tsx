'use client'
import React, { ChangeEventHandler, FC, useState } from 'react'
import styles from './Input.module.scss'
import { useAppDispatch, useAppSelector } from '@/components/Hooks/useApp';
import { updateUserViewFormData } from '@/store/userViewFormData';
import { validateTextInput } from '@/utils/validation/validateTextInput';
import { isCyrillic } from '@/utils/validation/isCyrillic';

interface IUIInputProps {
  type: string;
  heading?: string;
  placeholderText?: string;
  name: string;
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'div';
  onChange?: ChangeEventHandler;
  formName: string
}

export const UIInput: FC<IUIInputProps> = ({ type, heading, placeholderText, name, As ='h2', formName}) => {
  const currentValue = useAppSelector((state) => state.userViewForm[name]);

  const dispatch = useAppDispatch();

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;
    const string = 'ывыы'
    console.log((/^[а-яё]+$/i).test(string)) // возвращает true если есть только русские буквы(а именно одна и более русских букв, дефисов или пробельных символов)


    // if (!isCyrillic(currentTarget.value)) {
    //   console.log('Введите только кирилицу')
    // }
    switch (currentTarget.type) {
      case 'text':
        currentTarget.value = validateTextInput(currentTarget.value);
    }
    switch (formName) {
      case 'userViewForm':
        dispatch(updateUserViewFormData(currentTarget.name, currentTarget.value))
    }
  }

  return (
    <label className={styles.label}>
      <As className={styles.heading}>{heading}</As>
      <input type={type} name={name} placeholder={placeholderText} value={currentValue} className={styles.input} onChange={onChange}/>
    </label>
  )
}
