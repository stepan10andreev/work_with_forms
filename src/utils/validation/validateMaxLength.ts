export const validateMaxLength = (value: string, maxLength: number) => {
  const result = value.length > maxLength ? false : true;
  return result
}
