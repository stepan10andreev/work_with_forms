export const validateNicknameInput = (value: string) => {
  // ввод только букв (любого алфавита + цифр, специальные символы в том числе пробелы нельзя)
  return value.replace(/[^a-zа-яё0-9]/gi, '');
}
