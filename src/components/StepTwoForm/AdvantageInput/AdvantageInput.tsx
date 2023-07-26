import { DeleteButtonIcon } from '@/components/ui-components/Icons/DeleteButtonIcon'
import { UIButton } from '@/components/ui-components/UIButton/UIButton'
import { IUIInputProps } from '@/components/ui-components/UIInput/UIInput'
import React, { ChangeEventHandler, FC, useState } from 'react'
import styles from './AdvantageInput.module.scss'
import { useAppDispatch, useAppSelector } from '@/components/Hooks/useApp'
import { deleteAdvantageInput, updateStepTwoFormData } from '@/store/stepTwoFormData'
import { validateOnlyCyrillicText } from '@/utils/validation/validateTextInput'
import { validateMaxLength } from '@/utils/validation/validateMaxLength'
import { ErrorText } from '@/components/ui-components/ErrorText/ErrorText'

interface IAdvantageInputProps extends Pick<IUIInputProps, 'externalOnChange'> {
  id: string;
  index: number;
}

export const ADVANTAGE_INPUT_MAX_LENGTH = 30;

export const AdvantageInput: FC<IAdvantageInputProps> = ({ id, index }) => {
  const [isMaxLength, setIsMaxLength] = useState(true);

  const indexOfValue = useAppSelector((state) => state.stepTwoForm.advantageInputElements.findIndex(input => input.id === id));
  const currentValue = useAppSelector((state) => state.stepTwoForm.advantages[indexOfValue]);

  const dispatch = useAppDispatch();

  const deleteInputOnCLick = () => {
    dispatch(deleteAdvantageInput(id))
  }

  const handleChangeAdvantages: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;

    currentTarget.value = validateOnlyCyrillicText(currentTarget.value)

    // // вариант с передачей индекса
    // dispatch(updateStepTwoFormData(currentTarget.name, currentTarget.value, undefined, undefined, index))

    // вариант с передачей id
    dispatch(updateStepTwoFormData(currentTarget.name, currentTarget.value, undefined, id))


    validateMaxLength(currentTarget.value, ADVANTAGE_INPUT_MAX_LENGTH) ? setIsMaxLength(true) : setIsMaxLength(false);
  }

  return (
    <div className={styles.advWrapper}>
      <label>
        <input
          type="text"
          placeholder='Введите преимущества'
          name='advantages'
          value={currentValue}
          onChange={handleChangeAdvantages}
          className={styles.input}
        />
      </label>

      <UIButton
        name={'deleteButton'}
        icon={<DeleteButtonIcon />}
        onClick={deleteInputOnCLick}
      />

      {!isMaxLength && (<ErrorText errorText={`Максимальная допустимая длина - ${ADVANTAGE_INPUT_MAX_LENGTH} символов`} />)}
    </div>
  )
}
