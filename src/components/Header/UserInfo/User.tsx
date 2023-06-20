import React from 'react'
import styles from './User.module.scss'

export const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles.icon}>
          ИИ
      </div>
      <div className={styles.userName}>
        Иванов Иван
      </div>
    </div>
  )
}
