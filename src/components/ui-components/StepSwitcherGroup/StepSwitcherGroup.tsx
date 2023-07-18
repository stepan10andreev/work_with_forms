import React, { FC } from 'react'
import styles from './StepSwitcherGroup.module.scss'
import { UIButton } from '../UIButton/UIButton'

interface IStepSwitcherGroupProps {
  handleClickBack: () => void;
}
export const StepSwitcherGroup: FC<IStepSwitcherGroupProps> = ({ handleClickBack }) => {
  return (
    <div className={styles.wrapper}>
        <UIButton text={'Назад'} type={'button'} onClick={handleClickBack} />

        <UIButton text={'Далее'} type={'submit'} />
    </div>
  )
}
