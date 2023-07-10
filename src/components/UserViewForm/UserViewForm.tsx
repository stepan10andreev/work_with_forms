'use client'
import React, { FormEventHandler } from 'react'
import { UIInput } from '../ui-components/UIInput/UIInput'
import { UIButton } from '../ui-components/UIButton/UIButton'
import styles from './UserViewForm.module.scss'
import { PhoneInput } from '../ui-components/PhoneInput/PhoneInput';
import { validateMaxLength } from '@/utils/validation/validateMaxLength'
import { isCyrillic } from '@/utils/validation/isCyrillic'
import { isValidEmail } from '@/utils/validation/isValidEmail'
import { useRouter } from 'next/navigation'

export const UserViewForm = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    if (validateMaxLength(formJson.fullName as string, 30) && isCyrillic(formJson.fullName as string) && isValidEmail(formJson.email as string)) {
      console.log(formJson)
      router.push('/step-1')
    } else {
      console.log('Проверьте поля на корректность введенных данных')
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <UIInput
        type={'text'}
        heading={'Имя и Фамилия'}
        placeholderText={'Введите имя и фамилию'}
        name={'fullName'}
        formName={'userViewForm'}
      />

      <PhoneInput mask={"(+7) 999 999-99-99"} heading={'Номер телефона'} placeholderText={'Введите телефон'} name={'tel'} />

      <UIInput
        type={'email'}
        heading={'Email'}
        placeholderText={'Введите Email'}
        name={'email'}
        formName={'userViewForm'}
      />

      <UIButton text={'Начать'} type={'submit'}/>
    </form>
  )
}
