export const validateTextInput = (value: string) => {
  // только русские буквы
  // return value = value.replace(/[^а-яё-\s]/gi, '');
  // и русские и английские
  return value.replace(/[^a-zа-яё-\s]/gi, '');
};


export const validateOnlyCyrillicText = (value: string) => {
  // только русские буквы
  // return value = value.replace(/[^а-яё-\s]/gi, '');
  // и русские и английские
  return value.replace(/[^а-яё]/gi, '');
};

