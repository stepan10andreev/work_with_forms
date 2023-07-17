import { DeleteButtonIcon } from '@/components/ui-components/Icons/DeleteButtonIcon'
import { UIButton } from '@/components/ui-components/UIButton/UIButton'
import { UIInput } from '@/components/ui-components/UIInput/UIInput'
import React, { FC } from 'react'
import styles from './AdvantageInput.module.scss'
import { useAppDispatch } from '@/components/Hooks/useApp'
import { deleteAdvantageInput } from '@/store/stepTwoFormData'

interface IAdvantageInput {
  id: string
}

export const AdvantageInput: FC<IAdvantageInput> = ({ id }) => {
  const dispatch = useAppDispatch();

  const deleteInputOnCLick = () => {
    dispatch(deleteAdvantageInput(id))
  }

  return (
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
          onClick={deleteInputOnCLick}
        />
      </div>
  )
}
