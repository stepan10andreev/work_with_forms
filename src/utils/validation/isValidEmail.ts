export const isValidEmail = (email: string) => {
  const regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  return regexp.test(email)
}
