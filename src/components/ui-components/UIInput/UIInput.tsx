import React, { ChangeEventHandler, FC } from 'react'
import styles from './Input.module.scss'
import { useAppDispatch } from '@/components/Hooks/useApp';
import { updateUserViewFormData } from '@/store/userViewFormData';

interface IUIInputProps {
  type: string;
  heading?: string;
  placeholderText?: string;
  value: string;
  name: string;
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'div';
  onChange?: ChangeEventHandler;
  formName: string
}

export const UIInput: FC<IUIInputProps> = ({ type, heading, placeholderText, value, name, As ='h2', formName}) => {

  const dispatch = useAppDispatch();

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;
    console.log(currentTarget)
    switch (formName) {
      case 'userViewForm':
        dispatch(updateUserViewFormData(currentTarget.name, currentTarget.value))
    }
  }

  return (
    <label className={styles.label}>
      <As className={styles.heading}>{heading}</As>
      <input type={type} name={name} placeholder={placeholderText} value={value} className={styles.input} onChange={onChange}/>
    </label>
  )
}
