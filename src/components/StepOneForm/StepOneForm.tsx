'use client'
import React, { FormEventHandler } from 'react'
import { UIInput } from '../ui-components/UIInput/UIInput'
import styles from './StepOneForm.module.scss'
import { CustomSelect } from '../ui-components/CustomSelect/CustomSelect'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { useRouter } from 'next/navigation'

export const StepOneForm = () => {
  const router = useRouter();

  const handleClickBack = () => {
    router.push('/')
  }

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson)
    // if (validateMaxLength(formJson.fullName as string, 30) && isCyrillic(formJson.fullName as string) && isValidEmail(formJson.email as string)) {
    //   console.log(formJson)
    //   router.push('/step-1')
    // } else {
    //   console.log('Проверьте поля на корректность введенных данных')
    // }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <UIInput
        type={'text'}
        heading={'Nickname'}
        placeholderText={'Введите Nickname'}
        name={'nickname'}
        formName={'StepOneForm'}
      />

      <UIInput
        type={'text'}
        heading={'Name'}
        placeholderText={'Введите Name'}
        name={'name'}
        formName={'StepOneForm'}
      />

      <UIInput
        type={'text'}
        heading={'Surname'}
        placeholderText={'Введите Surname'}
        name={'surname'}
        formName={'StepOneForm'}
      />

      <CustomSelect
        heading={'Sex'}
        name={'sex'}
        formName={'StepOneForm'}
      />

      <div className={styles.wrapper}>
        <UIButton text={'Назад'} type={'button'} onClick={handleClickBack} />

        <UIButton text={'Далее'} type={'submit'} />
      </div>

    </form>
  )
}
