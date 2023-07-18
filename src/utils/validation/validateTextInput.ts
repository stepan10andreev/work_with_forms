import { capitalizeFirstLetter } from "../capitalizeFirstLetter";

export const validateTextInput = (value: string) => {
  // только русские буквы
  // return value = value.replace(/[^а-яё-\s]/gi, '');
  // и русские и английские
  return value.replace(/[^a-zа-яё-\s]/gi, '');
};


export const validateOnlyCyrillicText = (value: string) => {
  // делаем первую букву заглавную
  let newValue = capitalizeFirstLetter(value);
  // if(newValue === undefined) return;
  // только русские буквы и 1 слово без пробелов и специальных символов
  return newValue.replace(/[^а-яё]/gi, '');
};

