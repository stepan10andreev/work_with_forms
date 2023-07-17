import React, { ChangeEventHandler, FC } from 'react'
import styles from './RadioButton.module.scss'
import { ICheckbox } from '../Checkbox/Checkbox'
import clsx from 'clsx'

type IRadioButton = ICheckbox

export const RadioButton: FC<IRadioButton> = ({ name, placeholderText, value}) => {

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value)
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
