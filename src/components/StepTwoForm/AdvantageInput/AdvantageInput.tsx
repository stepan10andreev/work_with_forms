import { DeleteButtonIcon } from '@/components/ui-components/Icons/DeleteButtonIcon'
import { UIButton } from '@/components/ui-components/UIButton/UIButton'
import { IUIInputProps, UIInput } from '@/components/ui-components/UIInput/UIInput'
import React, { ChangeEventHandler, FC } from 'react'
import styles from './AdvantageInput.module.scss'
import { useAppDispatch } from '@/components/Hooks/useApp'
import { deleteAdvantageInput, updateStepTwoFormData } from '@/store/stepTwoFormData'
import { validateOnlyCyrillicText } from '@/utils/validation/validateTextInput'

interface IAdvantageInputProps extends Pick<IUIInputProps, 'externalOnChange'> {
  id: string;
  index: number;
}

export const AdvantageInput: FC<IAdvantageInputProps> = ({ id, externalOnChange, index}) => {
  const dispatch = useAppDispatch();

  const deleteInputOnCLick = () => {
    dispatch(deleteAdvantageInput(id))
  }

  const handleChangeAdvantages: ChangeEventHandler<HTMLInputElement>  = (event) => {
    const currentTarget = event.currentTarget;
    // // вариант с передачей индекса
    // dispatch(updateStepTwoFormData(currentTarget.name, currentTarget.value, undefined, undefined, index))
    // вариант с передачей id
    dispatch(updateStepTwoFormData(currentTarget.name, currentTarget.value, undefined, id))

    currentTarget.value = validateOnlyCyrillicText(currentTarget.value)
  }

  return (
    <div className={styles.advWrapper}>
        <UIInput
          As={null}
          type={'text'}
          placeholderText={'Введите преимущества'}
          name={'advantages'}
          formName={'stepOneForm'}
          externalOnChange={handleChangeAdvantages}
        />

        <UIButton
          name={'deleteButton'}
          icon={<DeleteButtonIcon />}
          onClick={deleteInputOnCLick}
        />
      </div>
  )
}
