import React, { ChangeEventHandler, FC } from 'react'
import styles from './RadioButton.module.scss'
import { ICheckbox } from '../Checkbox/Checkbox'
import clsx from 'clsx'
import { useAppDispatch } from '@/components/Hooks/useApp'
import { updateStepTwoFormData } from '@/store/stepTwoFormData'

type IRadioButton = ICheckbox

export const RadioButton: FC<IRadioButton> = ({ name, placeholderText, value}) => {
  const dispatch = useAppDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(updateStepTwoFormData(name, value))
  }

  return (
    <label className={styles.label}>
      <input
        type='radio'
        name={name}
        value={value}
        onChange={handleChange}
        className={clsx(styles.radio, {
          [styles.checked]: false,
        })}
      />
      <span className={styles.text}>{placeholderText}</span>
    </label>
  )
}
