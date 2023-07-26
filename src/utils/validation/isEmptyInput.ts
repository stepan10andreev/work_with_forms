export const isEmptyInput = (value: string) => {
  const result = value.length > 0 ? false : true;
  return result
}


export const isFoundEmptyValue = (values: string[]) => {
  if (values.length === 0) return false;
  for (const value of values) {
    if (isEmptyInput(value)) {
      return true;
    }
  }
  return false;
}

export const isFoundEmptyValueInFormData = <T extends object>(FormData: T) => {
  for (const value of Object.values(FormData)) {
    if (isEmptyInput(value)) {
      return true;
    }
  }
  return false;
}
