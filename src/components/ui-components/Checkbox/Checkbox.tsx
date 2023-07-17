import { FC, useState } from "react";
import styles from './Checkbox.module.scss';
import { IUIInputProps } from "../UIInput/UIInput";
import clsx from "clsx";

interface ICheckbox extends Pick<IUIInputProps, 'name' | 'type' | 'placeholderText'> {
  isChecked?: boolean;
  setIsChecked?: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
}

export const Checkbox: FC<ICheckbox> = ({ type, name, placeholderText, value}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked)
  };

  return (
    <label className={styles.label}>
      <input
        type={type}
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
