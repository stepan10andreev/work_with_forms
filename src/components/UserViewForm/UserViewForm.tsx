import React from 'react'
import { UIInput } from '../ui-components/UIInput/UIInput'
import { UIButton } from '../ui-components/UIButton/UIButton'
import styles from './UserViewForm.module.scss'

export const UserViewForm = () => {
  return (
    <form className={styles.form}>
      <UIInput type={'text'} heading={'Имя и Фамилия'} placeholder={'Введите имя и фамилию'} value={''} iName={'fullName'} />
      <UIInput type={'number'} heading={'Номер телефона'} placeholder={'Введите телефон'} value={''} iName={'tel'} />
      <UIInput type={'email'} heading={'Email'} placeholder={'Введите Email'} value={''} iName={'mail'} />
      <UIButton text={'Начать'}/>
    </form>
  )
}
