import { DeleteButtonIcon } from '@/components/ui-components/Icons/DeleteButtonIcon'
import { UIButton } from '@/components/ui-components/UIButton/UIButton'
import { IUIInputProps, UIInput } from '@/components/ui-components/UIInput/UIInput'
import React, { ChangeEventHandler, FC, useState } from 'react'
import styles from './AdvantageInput.module.scss'
import { useAppDispatch } from '@/components/Hooks/useApp'
import { deleteAdvantageInput, updateStepTwoFormData } from '@/store/stepTwoFormData'
import { validateOnlyCyrillicText } from '@/utils/validation/validateTextInput'
import { validateMaxLength } from '@/utils/validation/validateMaxLength'
import { ErrorText } from '@/components/ui-components/ErrorText/ErrorText'

interface IAdvantageInputProps extends Pick<IUIInputProps, 'externalOnChange'> {
  id: string;
  index: number;
}

export const ADVANTAGE_INPUT_MAX_LENGTH = 30

export const AdvantageInput: FC<IAdvantageInputProps> = ({ id, index}) => {
  const [isMaxLength, setIsMaxLength] = useState(true);
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

    validateMaxLength(currentTarget.value, ADVANTAGE_INPUT_MAX_LENGTH) ? setIsMaxLength(true) : setIsMaxLength(false);
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

      {!isMaxLength && (<ErrorText errorText={`Максимальная допустимая длина - ${ADVANTAGE_INPUT_MAX_LENGTH} символов`}/>)}
    </div>
  )
}
