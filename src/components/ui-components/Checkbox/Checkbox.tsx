import { FC } from "react";
import styles from './Checkbox.module.scss';
import { IUIInputProps } from "../UIInput/UIInput";
import clsx from "clsx";

interface ICheckbox extends Pick<IUIInputProps, 'name' | 'type' | 'placeholderText'> {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Checkbox: FC<ICheckbox> = ({ type, name, placeholderText, isChecked, setIsChecked}) => {
  return (
    <label className={styles.label}>
      <input
        type={type}
        className={clsx(styles.checkbox, {
          [styles.checked]: isChecked,
        })}
      />
      {placeholderText}
    </label>
  )
}
