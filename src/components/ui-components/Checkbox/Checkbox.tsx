import { FC, useState } from "react";
import styles from './Checkbox.module.scss';
import { IUIInputProps } from "../UIInput/UIInput";
import clsx from "clsx";

export interface ICheckbox extends Pick<IUIInputProps, 'name' | 'placeholderText'> {
  value: string;
}

export const Checkbox: FC<ICheckbox> = ({ name, placeholderText, value}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked)
  };

  return (
    <label className={styles.label}>
      <input
        type='checkbox'
        name={name}
        value={value}
        onChange={handleChange}
        className={clsx(styles.checkbox, {
          [styles.checked]: isChecked,
        })}
      />
      <span className={styles.text}>{placeholderText}</span>
    </label>
  )
}
