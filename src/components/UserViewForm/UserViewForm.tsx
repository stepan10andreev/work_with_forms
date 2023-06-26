import React, { ChangeEventHandler } from 'react'
import { UIInput } from '../ui-components/UIInput/UIInput'
import { UIButton } from '../ui-components/UIButton/UIButton'
import styles from './UserViewForm.module.scss'


export const UserViewForm = () => {
  return (
    <form className={styles.form}>
      <UIInput
        type={'text'}
        heading={'Имя и Фамилия'}
        placeholderText={'Введите имя и фамилию'}
        name={'fullName'}
        formName={'userViewForm'}
      />
      <UIInput
        type={'number'}
        heading={'Номер телефона'}
        placeholderText={'Введите телефон'}
        name={'tel'}
        formName={'userViewForm'}
      />
      <UIInput
        type={'email'}
        heading={'Email'}
        placeholderText={'Введите Email'}
        name={'email'}
        formName={'userViewForm'}
      />
      <UIButton text={'Начать'}/>
    </form>
  )
}
