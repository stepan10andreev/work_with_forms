'use client'
import React from 'react'
import { UIInput } from '../ui-components/UIInput/UIInput'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { AddButtonIcon } from '../ui-components/Icons/AddButtonIcon'
import styles from './StepTwoForm.module.scss'
import { DeleteButtonIcon } from '../ui-components/Icons/DeleteButtonIcon'
import { useAppDispatch, useAppSelector } from '../Hooks/useApp'
import { AdvantageInput } from './AdvantageInput/AdvantageInput'
import { addAdvantageInput } from '@/store/stepTwoFormData'
import { Checkbox } from '../ui-components/Checkbox/Checkbox'

export const StepTwoForm = () => {
  const advantageInputs = useAppSelector((state) => state.stepTwoForm.advantageInputElements);

  const dispatch = useAppDispatch();

  const addInputOnCLick = () => {
    dispatch(addAdvantageInput())
  }

  return (
    <form className={styles.form}>

      <h2 className={styles.title}>Advantages</h2>

      {advantageInputs.map(advantage => (
        <AdvantageInput key={advantage.id} id={advantage.id}/>
      ))}

      <UIButton
        type={'button'}
        name={'addButton'}
        icon={<AddButtonIcon />}
        onClick={addInputOnCLick}
      />

      <h2 className={styles.title}>Checkbox group</h2>

      <div className={styles.checkboxWrapper}>
        <Checkbox type={'checkbox'} placeholderText={'Вариант 1'} name={'Опции'} value={'Вариант 1'}/>
        <Checkbox type={'checkbox'} placeholderText={'Вариант 2'} name={'Опции'} value={'Вариант 2'} />
        <Checkbox type={'checkbox'} placeholderText={'Вариант 3'} name={'Опции'} value={'Вариант 3'} />
      </div>







    </form>
  )
}
