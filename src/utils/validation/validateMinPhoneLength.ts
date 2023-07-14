export const validateMinPhoneLength = (value: string, minLength: number) => {
  const result = value.length < minLength ? false : true;
  return result
}
