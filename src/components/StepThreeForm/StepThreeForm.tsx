'use client'
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import styles from './StepThreeForm.module.scss'
import { UIInput } from '../ui-components/UIInput/UIInput'
import { TextArea } from '../ui-components/TextArea/TextArea'
import { getTextWithoutSpaces } from '@/utils/getTextWithoutSpaces'

export const StepThreeForm = () => {
  const [lettersCount, setLettersCount] = useState(0);

  const handleSubmit: FormEventHandler = (event) => {

  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;
    setLettersCount(getTextWithoutSpaces(currentTarget.value).length)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextArea
        heading={'About'}
        placeholderText={'Введите свои пожелания'}
        rows={8}
        name={'wishes'}
        externalOnChange={handleChange}
        lettersCount={lettersCount}
        textLength={200}
      />
    </form>
  )
}
