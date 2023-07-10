import React from 'react'
import styles from './Stepper.module.scss'
import { InactiveStepIcon } from '@/components/ui-components/Icons/InactiveStepIcon'
import { ActiveStepIcon } from '@/components/ui-components/Icons/ActiveStepIcon'

export const Stepper = () => {
  return (
    <ul className={styles.stepper}>
      <li className={styles.step}>
        <ActiveStepIcon />
        <p className={styles.desc}>1</p>
      </li>
      <li className={styles.step}>
        <InactiveStepIcon />
        <p className={styles.desc}>2</p>
      </li>
      <li className={styles.step}>
        <InactiveStepIcon />
        <p className={styles.desc}>3</p>
      </li>
    </ul>
  )
}
