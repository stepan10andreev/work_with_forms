'use client'
import React, { FC, useState } from 'react'
import Select, { OnChangeValue } from 'react-select'
import styles from './CustomSelect.module.scss'
import { IUIInputProps } from '../UIInput/UIInput'
import { IOptions } from './customSelect.interface'

type ICustomSelect = Pick<IUIInputProps, 'As' | 'heading' | 'name' | 'formName'>

const options: IOptions[] = [
  { value: 'man', label: 'man' },
  { value: 'woman', label: 'woman' },
]

export const CustomSelect: FC<ICustomSelect> = ({ As ='h2', heading, name, formName}) => {
  const [selectValue, setSelectValue] = useState('');

  const onChange = (newValue: OnChangeValue<IOptions, boolean>) => {
    // console.log(newValue)
    setSelectValue((newValue as IOptions).value)
  }

  return (
    <label className={styles.label}>
      <As className={styles.heading}>{heading}</As>
      <Select
        options={options}
        name={name}
        form={formName}
        onChange={onChange}
      />
    </label>
  )
}
