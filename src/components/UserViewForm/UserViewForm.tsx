import React from 'react'
import { UIInput } from '../ui-components/Input/UIInput'

export const UserViewForm = () => {
  return (
    <form>
      <UIInput type={'text'} heading={'Имя и Фамилия'} placeholder={'Введите имя и фамилию'} value={''} iName={'fullName'} />
      <UIInput type={'number'} heading={'Номер телефона'} placeholder={'Введите телефон'} value={''} iName={'tel'} />
      <UIInput type={'email'} heading={'Email'} placeholder={'Введите Email'} value={''} iName={'mail'} />
    </form>
  )
}
