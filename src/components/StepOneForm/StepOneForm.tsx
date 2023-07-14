'use client'
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { UIInput } from '../ui-components/UIInput/UIInput'
import styles from './StepOneForm.module.scss'
import { CustomSelect } from '../ui-components/CustomSelect/CustomSelect'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { useRouter } from 'next/navigation'
import { validateMaxLength } from '@/utils/validation/validateMaxLength'
import { isEmptyInput, isFoundEmptyValue } from '@/utils/validation/isEmptyInput'
import { ErrorText } from '../ui-components/ErrorText/ErrorText'
import { useAppDispatch } from '../Hooks/useApp'
import { updateUserViewFormData } from '@/store/userViewFormData'
import { updateStepOneFormData } from '@/store/stepOneFormData'
import { validateNicknameInput } from '@/utils/validation/validateNicknameInput'
import { validateOnlyCyrillicText } from '@/utils/validation/validateTextInput'

interface IFormJson {
  name: string;
  nickname: string;
  surname: string;
  sex: string;
}

const NICKNAME_MAX_LENGTH = 10
const NAME_MAX_LENGTH = 20
const SURNAME_MAX_LENGTH = 20

export const StepOneForm = () => {
  const [isEmptyValue, setIsEmptyValue] = useState(false);
  const [isNicknameMaxLength, setIsNicknameMaxLength] = useState(true);
  const [isNameMaxLength, setIsNameMaxLength] = useState(true);
  const [isSurnameMaxLength, setIsSurnameMaxLength] = useState(true);

  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleClickBack = () => {
    router.push('/')
  }

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const formData = new FormData(form) as unknown as Iterable<[IFormJson, FormDataEntryValue]>;
    const formJson: IFormJson = Object.fromEntries(formData);

    const ALL_INPUTS_IS_VALID = !isFoundEmptyValue(Object.values(formJson)) &&
                                validateMaxLength(formJson.nickname, NICKNAME_MAX_LENGTH) &&
                                validateMaxLength(formJson.name, NAME_MAX_LENGTH) &&
                                validateMaxLength(formJson.surname, SURNAME_MAX_LENGTH)

    if (ALL_INPUTS_IS_VALID) {
      setIsEmptyValue(false);
      setIsNicknameMaxLength(true);
      setIsNameMaxLength(true);
      setIsSurnameMaxLength(true);

      console.log(formJson)
      router.push('/step-2')
    } else {
      // здесь если нужно - логика рендера ошибок для каждого инпута по событию Submit (не по событию инпута)
      if (isFoundEmptyValue(Object.values(formJson))) {
        setIsEmptyValue(true)
      }

      if (!validateMaxLength(formJson.nickname, NICKNAME_MAX_LENGTH)) {
        setIsNicknameMaxLength(false)
      }

      if (!validateMaxLength(formJson.name, NAME_MAX_LENGTH)) {
        setIsNameMaxLength(false)
      }

      if (!validateMaxLength(formJson.surname, SURNAME_MAX_LENGTH)) {
        setIsSurnameMaxLength(false)
      }
    }
  };

  // функция события onChange - которая передается в UIInput
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;
    console.log('sadsa')
    switch (currentTarget.name) {
      case 'nickname':
        currentTarget.value = validateNicknameInput(currentTarget.value);
        if (validateMaxLength(currentTarget.value, NICKNAME_MAX_LENGTH)) setIsNicknameMaxLength(true)
        break;
      case 'name':
        currentTarget.value = validateOnlyCyrillicText(currentTarget.value);
        if (validateMaxLength(currentTarget.value, NAME_MAX_LENGTH)) setIsNameMaxLength(true)
        break;
      case 'surname':
        currentTarget.value = validateOnlyCyrillicText(currentTarget.value);
        if (validateMaxLength(currentTarget.value, SURNAME_MAX_LENGTH)) setIsSurnameMaxLength(true)
        break;
    }

    if (currentTarget.value.length > 0) setIsEmptyValue(false);

    // условие если все инпуты валидны по всем условиям только тогда диспатч!!!
    dispatch(updateStepOneFormData(currentTarget.name, currentTarget.value));
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <UIInput
        type={'text'}
        heading={'Nickname'}
        placeholderText={'Введите Nickname'}
        name={'nickname'}
        formName={'stepOneForm'}
        externalOnChange={handleChange}
      />

      <UIInput
        type={'text'}
        heading={'Name'}
        placeholderText={'Введите Name'}
        name={'name'}
        formName={'stepOneForm'}
        externalOnChange={handleChange}
      />

      <UIInput
        type={'text'}
        heading={'Surname'}
        placeholderText={'Введите Surname'}
        name={'surname'}
        formName={'stepOneForm'}
        externalOnChange={handleChange}
      />

      <CustomSelect
        heading={'Sex'}
        name={'sex'}
        formName={'stepOneForm'}
      />

      {isEmptyValue && (<ErrorText errorText={'Заполните все поля ввода'}/>)}
      {!isNicknameMaxLength && (<ErrorText errorText={`Максимальная допустимая длина поля NickName - ${NICKNAME_MAX_LENGTH} символов`}/>)}
      {!isNameMaxLength && (<ErrorText errorText={`Максимальная допустимая длина поля Name  - ${NICKNAME_MAX_LENGTH} символов`}/>)}
      {!isSurnameMaxLength && (<ErrorText errorText={`Максимальная допустимая длина поля Surname - ${NICKNAME_MAX_LENGTH} символов`}/>)}

      <div className={styles.wrapper}>
        <UIButton text={'Назад'} type={'button'} onClick={handleClickBack} />

        <UIButton text={'Далее'} type={'submit'} />
      </div>

    </form>
  )
}
