import React, { ChangeEventHandler, FC } from 'react'
import styles from './RadioButton.module.scss'
import { ICheckbox } from '../Checkbox/Checkbox'
import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from '@/components/Hooks/useApp'
import { updateStepTwoFormData } from '@/store/stepTwoFormData'

type IRadioButton = ICheckbox

export const RadioButton: FC<IRadioButton> = ({ name, placeholderText, value}) => {
  const currentValue = useAppSelector((state) => state.stepTwoForm.radioOption);

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
          [styles.checked]: currentValue.includes(value),
        })}
      />
      <span className={styles.text}>{placeholderText}</span>
    </label>
  )
}
