export const isCyrillic = (value: string) => {
  return (/^[а-яё\s-]+$/i).test(value)
}
