import React, { FC } from 'react'
import { IUIInputProps } from '../UIInput/UIInput'
import styles from '../UIInput/Input.module.scss'

interface ITextAreaProps extends Pick<IUIInputProps, 'name' | 'placeholderText' | 'As' | 'heading' | 'externalOnChange'> {
  cols?: number;
  rows?: number;
  lettersCount?: number;
  maxLength?: number;
  textLength?: number;
}

export const TextArea: FC<ITextAreaProps> = ({ name, placeholderText, As, heading, externalOnChange, cols, rows, lettersCount, maxLength, textLength }) => {
  return (
    <label className={styles.label}>
      {As != null && <As className={styles.heading}>{heading}</As>}

      <textarea
        name={name}
        placeholder={placeholderText}
        cols={cols}
        rows={rows}
        onChange={externalOnChange}
        className={styles.input}
        maxLength={maxLength}
      >
      </textarea>
      {lettersCount != 0 && (<div className={styles.lettersCount}>Осталось {(textLength as number) - (lettersCount as number)} символов</div>)}

    </label>
  )
}
