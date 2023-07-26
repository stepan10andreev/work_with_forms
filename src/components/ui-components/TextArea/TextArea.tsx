import React, { FC } from 'react'
import { IUIInputProps } from '../UIInput/UIInput'
import styles from '../UIInput/Input.module.scss'

interface ITextAreaProps extends Pick<IUIInputProps, 'name' | 'placeholderText' | 'As' | 'heading' | 'externalOnChange'> {
  cols?: number;
  rows?: number;
  lettersCount?: number;
  maxLength?: number;
  textLength?: number;
  value: string;
}

export const TextArea: FC<ITextAreaProps> = ({ name, placeholderText, As, heading, externalOnChange, cols, rows, lettersCount, maxLength, textLength, value }) => {
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
        value={value}
      >
      </textarea>

      {lettersCount != 0 && (<div className={styles.lettersCount}>Осталось {(textLength as number) - (lettersCount as number)} символов</div>)}

    </label>
  )
}
