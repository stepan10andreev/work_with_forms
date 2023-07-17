import React from 'react'
import { UIInput } from '../ui-components/UIInput/UIInput'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { AddButtonIcon } from '../ui-components/Icons/AddButtonIcon'
import styles from './StepTwoForm.module.scss'
import { DeleteButtonIcon } from '../ui-components/Icons/DeleteButtonIcon'

export const StepTwoForm = () => {


  return (
    <form className={styles.form}>

      <h2 className={styles.title}>Advantages</h2>
      <div className={styles.advWrapper}>
        <UIInput
          As={null}
          type={'text'}
          placeholderText={'Введите преимущества'}
          name={'advantages'}
          formName={'stepOneForm'}
        />

        <UIButton
          name={'deleteButton'}
          icon={<DeleteButtonIcon />}
        />
      </div>

      <UIButton
        type={'button'}
        name={'addButton'}
        icon={<AddButtonIcon />}
      />


    </form>
  )
}
