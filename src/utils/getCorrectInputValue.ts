// возвращает строку с русскими буквами с 1 пробелом между словами и с 1 дефисом (если были введены)
export const getCorrectInputValue = (fullName: string) => {
  let value =  fullName.trim()
                      .replace(/[^а-яё-\s]/gi, '')
                      .replace(/  +/g, ' ')
                      .replace(/-+/g, '-')
  // строка равно '-' то затем строка станет пустой засчет метода slice, а затем метод toUpperCase() вызовет undefined
  // у пробела ' ' метод toUpperCase() ничего не вызовет и не вызовет ошибку
  if (value.length === 0 || value === '-') return '';


  if (value.startsWith('-')) {
    value = value.slice(1);
  }

  if (value.endsWith('-')) {
    value = value.slice(0, -1);
  }
  value = value.toLowerCase()[0].toUpperCase() + value.substring(1).toLowerCase();
  value = value.replace(/ -+/g, '-');
  value = value.replace(/- +/g, ' ');
  value = value.replace(/-+/g, '-');
  // эта проверка для случаев если введи дефисы и пробелы подряд ( по типу '----    ----') и после преобразований мы получим либо ' ' ИЛИ '-' и соотвественно возвращаем пустую строку
  if (value === ' ' || value === '-') return '';

  return value
}
