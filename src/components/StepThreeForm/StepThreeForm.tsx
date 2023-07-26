'use client'
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import styles from './StepThreeForm.module.scss'
import { TextArea } from '../ui-components/TextArea/TextArea'
import { getTextWithoutSpaces } from '@/utils/getTextWithoutSpaces'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '../Hooks/useApp'
import { updateStepThreeFormData } from '@/store/stepThreeForm'
import { Modal } from '../ui-components/Modal/Modal'
import { FormDataContentModal } from '../FormDataContentModal/FormDataContentModal'
import { IUserViewFormData } from '../UserViewForm/UserViewForm'
import { IStepOneFormData } from '../StepOneForm/StepOneForm'
import { IStepTwoFormData } from '../StepTwoForm/StepTwoForm'
import { isFoundEmptyValueInFormData } from '@/utils/validation/isEmptyInput'
import { IUserViewForm } from '@/store/userViewFormData'
import { IStepOneForm } from '@/store/stepOneFormData'
import { ErrorText } from '../ui-components/ErrorText/ErrorText'

export interface IStepThreeFormData {
  wishes: string;
}

export const StepThreeForm = () => {
  const [isFulfilled, setFulfilled] = useState(false);
  const [lettersCount, setLettersCount] = useState(0);
  const [userViewFormData, setUserViewFormData] = useState<null | IUserViewFormData>(null);
  const [stepOneFormData, setstepOneFormData] = useState<null | IStepOneFormData>(null);
  const [stepTwoFormData, setstepTwoFormData] = useState<null | IStepTwoFormData>(null);
  const [stepThreeFormData, setstepThreeFormData] = useState<null | IStepThreeFormData>(null);

  const router = useRouter();

  const dispatch = useAppDispatch();

  const userViewForm = useAppSelector((state) => state.userViewForm);
  const stepOneForm = useAppSelector((state) => state.stepOneForm);
  const stepTwoForm = useAppSelector((state) => state.stepTwoForm);
  const stepThreeForm = useAppSelector((state) => state.stepThreeForm);

  const previousFormIsCompleted = !isFoundEmptyValueInFormData<IUserViewForm>(userViewForm) &&
    !isFoundEmptyValueInFormData<IStepOneForm>(stepOneForm)

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    // const form = event.target as HTMLFormElement;
    // const formData = getFormData<IStepThreeFormData>(form)

    setUserViewFormData(userViewForm);
    setstepOneFormData(stepOneForm);
    setstepTwoFormData(stepTwoForm);
    setstepThreeFormData(stepThreeForm);

    setFulfilled(true);
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;
    setLettersCount(getTextWithoutSpaces(currentTarget.value).length);
    dispatch(updateStepThreeFormData('wishes', currentTarget.value));
  }

  const handleClickBack = () => {
    router.push('/step/2')
  }

  return (
    <>
      {previousFormIsCompleted ? (
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
            value={stepThreeForm.wishes}
          />

          <div className={styles.wrapper}>
            <UIButton text={'Назад'} type={'button'} onClick={handleClickBack} />

            <UIButton text={'Отправить'} type={'submit'} />
          </div>

          {isFulfilled && (
            <Modal onClose={() => setFulfilled(false)}>
              <div className={styles.succes}>
                <FormDataContentModal
                  userFormData={userViewFormData as IUserViewFormData}
                  formData1={stepOneFormData as IStepOneFormData}
                  formData2={stepTwoFormData as IStepTwoFormData}
                  formData3={stepThreeFormData as IStepThreeFormData}
                />
              </div>
            </Modal>
          )}

        </form>
      ) : (
        <ErrorText errorText='Этот шаг не доступен. Вы не заполнили предыдущую форму' />
      )}
    </>

  )
}
