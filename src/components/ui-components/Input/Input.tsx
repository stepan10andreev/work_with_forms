import React, { FC } from 'react'

interface IInputProps {
  type: string;
  heading: string;
  placeholder: string;
  value: string;
  iName: string;
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'div';
}

export const Input: FC<IInputProps> = ({ type, heading, placeholder, value, iName, As ='h2' }) => {
  return (
    <label>
      <As>{heading}</As>
      <input type={type} name={iName} placeholder={placeholder} value={value}/>
    </label>
  )
}
