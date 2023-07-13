import React from 'react'
import { UIInput } from '../ui-components/UIInput/UIInput'
import styles from './StepOneForm.module.scss'

export const StepOneForm = () => {
  return (
    <form className={styles.form}>
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

    </form>
  )
}
