'use client'
import React, { ChangeEventHandler, FC, useEffect, useState } from 'react'
import styles from './Input.module.scss'
import { useAppDispatch, useAppSelector } from '@/components/Hooks/useApp';
import { updateUserViewFormData } from '@/store/userViewFormData';
import { validateTextInput } from '@/utils/validation/validateTextInput';
import { isCyrillic } from '@/utils/validation/isCyrillic';
import { ErrorText } from '../ErrorText/ErrorText';

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
  const [isCyrillicText, setIsCyrillicText] = useState(true);

  const currentValue = useAppSelector((state) => state.userViewForm[name]);
  useEffect(() => {
    console.log(isCyrillicText)
  })
  const dispatch = useAppDispatch();
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;

    switch (currentTarget.type) {
      case 'text':
        // currentTarget.value = validateTextInput(currentTarget.value);
        if (!isCyrillic(currentTarget.value)) {
          setIsCyrillicText(false)
        } else {
          setIsCyrillicText(true)
        }
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
      {!isCyrillicText && (<ErrorText errorText={'Введите только буквы кириллицы'}/>)}
    </label>
  )
}
