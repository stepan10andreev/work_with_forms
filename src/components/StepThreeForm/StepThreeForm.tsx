'use client'
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import styles from './StepThreeForm.module.scss'
import { UIInput } from '../ui-components/UIInput/UIInput'
import { TextArea } from '../ui-components/TextArea/TextArea'
import { getTextWithoutSpaces } from '@/utils/getTextWithoutSpaces'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '../Hooks/useApp'
import { updateStepThreeFormData } from '@/store/stepThreeForm'
import { getFormData } from '@/utils/formData/getFormData'


interface IFormData {
  wishes: string;
}

export const StepThreeForm = () => {
  const [lettersCount, setLettersCount] = useState(0);
  const router = useRouter();

  const dispatch = useAppDispatch();


  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = getFormData<IFormData>(form)
    formData.wishes
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;
    setLettersCount(getTextWithoutSpaces(currentTarget.value).length);
    dispatch(updateStepThreeFormData('about', currentTarget.value));
  }

  const handleClickBack = () => {
    router.push('/step/2')
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
        maxLength={200}
      />

      <div className={styles.wrapper}>
        <UIButton text={'Назад'} type={'button'} onClick={handleClickBack} />

        <UIButton text={'Отправить'} type={'submit'} />
      </div>

    </form>
  )
}
