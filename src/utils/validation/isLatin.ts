export const isLatin = (value: string) => {
  return (/^[a-z\s-]+$/i).test(value)
}
