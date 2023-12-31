'use client'
import React, { ChangeEventHandler, FC, useState } from 'react'
import styles from './Input.module.scss'
import { useAppDispatch, useAppSelector } from '@/components/Hooks/useApp';
import { capitalizeLettersOfFullName, updateUserViewFormData } from '@/store/userViewFormData';
import { validateTextInput } from '@/utils/validation/validateTextInput';
import { isCyrillic } from '@/utils/validation/isCyrillic';
import { ErrorText } from '../ErrorText/ErrorText';
import { isValidEmail } from '@/utils/validation/isValidEmail';
import { getCorrectInputValue } from '@/utils/getCorrectInputValue';
import { validateMaxLength } from '@/utils/validation/validateMaxLength';

export interface IUIInputProps {
  type: string;
  heading?: string;
  placeholderText?: string;
  name: string;
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'div' | null;
  externalOnChange?: ChangeEventHandler;
  formName: string;
}

const maxLength = 30;

export const UIInput: FC<IUIInputProps> = ({ type, heading, placeholderText, name, As = 'h2', formName, externalOnChange }) => {
  const [isCyrillicText, setIsCyrillicText] = useState(true);
  const [isCorrectEmail, setIsCorrectEmail] = useState(true);
  const [isMaxLength, setIsMaxLength] = useState(true);

  // какое название формы передано - то значение и находится
  const currentValue = useAppSelector((state) => state[formName][name]);

  const dispatch = useAppDispatch();

  // обработчики событий только для UыerViewForm, остальные формы передают свой обработчик
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;

    switch (currentTarget.name) {
      case 'fullName':
        currentTarget.value = validateTextInput(currentTarget.value);

        if (!isCyrillic(currentTarget.value) && (currentTarget.value.length > 0)) {
          setIsCyrillicText(false)
        } else {
          setIsCyrillicText(true)
        }

        validateMaxLength(currentTarget.value, maxLength) ? setIsMaxLength(true) : setIsMaxLength(false);

        break;
      case 'email':
        if (isValidEmail(currentTarget.value)) {
          setIsCorrectEmail(true)
        }

        break;
    }

    switch (formName) {
      case 'userViewForm':
        dispatch(updateUserViewFormData(currentTarget.name, currentTarget.value))
    }
  }

  const handleBlur: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;

    switch (currentTarget.name) {
      case 'fullName':
        currentTarget.value = getCorrectInputValue(currentTarget.value);

        dispatch(updateUserViewFormData(currentTarget.name, currentTarget.value));

        if (currentTarget.value.length > 0) {
          dispatch(capitalizeLettersOfFullName());
        }

        isCyrillic(currentTarget.value) && setIsCyrillicText(true);

        break;
      case 'email':
        if (!isValidEmail(currentTarget.value) && (currentTarget.value.length > 0)) {
          setIsCorrectEmail(false)
        } else {
          setIsCorrectEmail(true)
        }

        break;
    }
  }

  return (
    <label className={styles.label}>
      {As != null && <As className={styles.heading}>{heading}</As>}
      <input
        type={type}
        name={name}
        placeholder={placeholderText}
        value={currentValue}
        className={styles.input}
        onChange={externalOnChange ? externalOnChange : onChange}
        onBlur={handleBlur}
      />

      {!isCyrillicText && (<ErrorText errorText={'Введите только буквы кириллицы'} />)}
      {!isCorrectEmail && (<ErrorText errorText={'Неправильный формат email'} />)}
      {!isMaxLength && (<ErrorText errorText={`Максимальная допустимая длина - ${maxLength} символов`} />)}
    </label>
  )
}


