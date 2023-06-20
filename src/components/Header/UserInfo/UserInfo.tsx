import React from 'react'
import styles from './User.module.scss'

export const UserInfo = () => {
  return (
    <div className={styles.user}>
      <div className={styles.icon}>
          ИИ
      </div>
      <h1 className={styles.userName}>
        Иванов Иван
      </h1>
    </div>
  )
}
