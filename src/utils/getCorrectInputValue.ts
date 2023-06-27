export const getCorrectInputValue = (fullName: string) => {
  let value =  fullName.trim()
                      .replace(/[^а-яё-\s]/gi, '')
                      .replace(/  +/g, ' ')
                      .replace(/-+/g, '-')
  if (value.startsWith('-')) {
    value = value.slice(1)
  }
  if (value.endsWith('-')) {
    value = value.slice(0, -1)
  }
  value = value.toLowerCase()[0].toUpperCase() + value.substring(1);
  value = value.replace(/ -+/g, '-');
  return value
}
