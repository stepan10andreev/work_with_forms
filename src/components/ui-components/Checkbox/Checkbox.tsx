import { ChangeEventHandler, FC, useState } from "react";
import styles from './Checkbox.module.scss';
import { IUIInputProps } from "../UIInput/UIInput";
import clsx from "clsx";
import { useAppDispatch } from "@/components/Hooks/useApp";
import { EMethods, updateStepTwoFormData } from "@/store/stepTwoFormData";
import { createModuleResolutionCache } from "typescript";

export interface ICheckbox extends Pick<IUIInputProps, 'name' | 'placeholderText'> {
  value: string;
}

export const Checkbox: FC<ICheckbox> = ({ name, placeholderText, value}) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useAppDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setIsChecked(!isChecked)
    // isChecked по событию будет false, и станет true только после события - нужен для смены стилизации
    // для диспатча нам нужно актуальное состояние инпута поэтому используем event.currentTarget.checked
    event.currentTarget.checked ?
      dispatch(updateStepTwoFormData(name, value)) :
      dispatch(updateStepTwoFormData(name, value, EMethods.delete));
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
        // checked={true}
      />
      <span className={styles.text}>{placeholderText}</span>
    </label>
  )
}
