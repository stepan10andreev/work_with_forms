'use client'
import React, { FC, useState } from 'react'
import Select, { OnChangeValue } from 'react-select'
import styles from './CustomSelect.module.scss'
import { IUIInputProps } from '../UIInput/UIInput'
import { IOptions } from './customSelect.interface'
import { useAppDispatch, useAppSelector } from '@/components/Hooks/useApp'
import { updateStepOneFormData } from '@/store/stepOneFormData'

type ICustomSelect = Pick<IUIInputProps, 'As' | 'heading' | 'name' | 'formName'>

const options: IOptions[] = [
  { value: 'man', label: 'man' },
  { value: 'woman', label: 'woman' },
]

export const CustomSelect: FC<ICustomSelect> = ({ As ='h2', heading, name, formName}) => {
  // const [selectValue, setSelectValue] = useState('');
  const currentValue = useAppSelector((state) => state[formName][name]);

  const dispatch = useAppDispatch();

  const onChange = (newValue: OnChangeValue<IOptions, boolean>) => {
    // setSelectValue((newValue as IOptions).value)
    dispatch(updateStepOneFormData(name, (newValue as IOptions).value))
  }

  const getValue = () => {
    return currentValue ? options.find(option => option.value === currentValue) : [];
  }

  return (
    <label className={styles.label}>
      {As != null && <As className={styles.heading}>{heading}</As>}
      <Select
        options={options}
        name={name}
        value={getValue()}
        form={formName}
        onChange={onChange}
      />
    </label>
  )
}
