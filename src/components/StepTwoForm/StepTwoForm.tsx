'use client'
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { UIInput } from '../ui-components/UIInput/UIInput'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { AddButtonIcon } from '../ui-components/Icons/AddButtonIcon'
import styles from './StepTwoForm.module.scss'
import { DeleteButtonIcon } from '../ui-components/Icons/DeleteButtonIcon'
import { useAppDispatch, useAppSelector } from '../Hooks/useApp'
import { ADVANTAGE_INPUT_MAX_LENGTH, AdvantageInput } from './AdvantageInput/AdvantageInput'
import { addAdvantageInput, updateStepTwoFormData } from '@/store/stepTwoFormData'
import { Checkbox } from '../ui-components/Checkbox/Checkbox'
import { RadioButton } from '../ui-components/RadioButton/RadioButton'
import { validateMaxLength } from '@/utils/validation/validateMaxLength'
import { useRouter } from 'next/navigation'
import { ErrorText } from '../ui-components/ErrorText/ErrorText'

export const StepTwoForm = () => {
  const [isAdvantageMaxLength, setIsAdvantageMaxLength] = useState(true);

  const advantageInputs = useAppSelector((state) => state.stepTwoForm.advantageInputElements);
  const stepTwoFormData = useAppSelector((state) => state.stepTwoForm);

  const router = useRouter();

  const dispatch = useAppDispatch();

  const addInputOnCLick = () => {
    dispatch(addAdvantageInput())
  }

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    // const formData = new FormData(form);
    // const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson)

    // создаем обьект data путем удаления массива элементов инпутов из stepTwoFormData
    const { advantageInputElements, ...data } = stepTwoFormData;
    for (const advantage of data.advantages) {
      if (!validateMaxLength(advantage, ADVANTAGE_INPUT_MAX_LENGTH)) {
        // можно ошибку не выводить так как она выводится уже у самого advantageInput
        setIsAdvantageMaxLength(false)
        return;
      }
    }
    setIsAdvantageMaxLength(true)
    console.log(data)
    router.push('/step/3');
  }

  const goBack = () => {
    router.push('/step/1');
  }


  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <h2 className={styles.title}>Advantages</h2>

      {advantageInputs.map((advantage, index)=> (
        <AdvantageInput key={advantage.id} id={advantage.id} index={index}/>
      ))}

      {!isAdvantageMaxLength && (<ErrorText errorText={`Превышена допустимая длина полей ввода`}/>)}

      <UIButton
        type={'button'}
        name={'addButton'}
        icon={<AddButtonIcon />}
        onClick={addInputOnCLick}
      />

      <h2 className={styles.title}>Checkbox group</h2>


      <div className={styles.checkboxWrapper}>

        <Checkbox placeholderText={'Вариант 1'} name={'checkboxOptions'} value={'Вариант 1'}/>
        <Checkbox placeholderText={'Вариант 2'} name={'checkboxOptions'} value={'Вариант 2'} />
        <Checkbox placeholderText={'Вариант 3'} name={'checkboxOptions'} value={'Вариант 3'} />
      </div>


      <h2 className={styles.title}>Radio group</h2>

      <div className={styles.radioWrapper}>
        <RadioButton placeholderText={'Вариант 1'} name={'radioOption'} value={'Вариант 1'}/>
        <RadioButton placeholderText={'Вариант 2'} name={'radioOption'} value={'Вариант 2'} />
        <RadioButton placeholderText={'Вариант 3'} name={'radioOption'} value={'Вариант 3'}/>
      </div>

      <div className={styles.wrapper}>
        <UIButton text={'Назад'} type={'button'} onClick={goBack} />

        <UIButton text={'Далее'} type={'submit'} />
      </div>

    </form>
  )
}
