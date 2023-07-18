'use client'
import React from 'react'
import styles from './Stepper.module.scss'
import { InactiveStepIcon } from '@/components/ui-components/Icons/InactiveStepIcon'
import { ActiveStepIcon } from '@/components/ui-components/Icons/ActiveStepIcon'
import { useParams, usePathname } from 'next/navigation'
import { DoneStepIcon } from '@/components/ui-components/Icons/DoneStepIcon'
import clsx from 'clsx'

export const Stepper = () => {
  const pathname = usePathname();
  const stepOne = pathname === '/step/1';
  const stepTwo = pathname === '/step/2';
  const stepThree = pathname === '/step/3';
  return (
    <ul className={styles.stepper}>
      <li className={clsx(styles.step, {
        [styles.done]: !stepOne,
      })}>
        {stepOne ? <ActiveStepIcon /> : <DoneStepIcon />}

        <p className={styles.desc}>1</p>
      </li>
      <li className={clsx(styles.step, {
        [styles.done]: stepThree,
      })}>
        {stepOne ? <InactiveStepIcon /> :
          stepTwo ? <ActiveStepIcon /> :
          <DoneStepIcon />}

        <p className={styles.desc}>2</p>
      </li>
      <li className={styles.step}>
        {stepThree ? <ActiveStepIcon />  : <InactiveStepIcon />}

        <p className={styles.desc}>3</p>
      </li>
    </ul>
  )
}
