export const getFullNameWithCapitalLetters = (fullName: string): string => {
  const initialWords = fullName.includes('-') ? fullName.split('-') : fullName.split(' ');

  const words = [];

  for (const initialWord of initialWords) {
    let word = initialWord[0].toUpperCase() + initialWord.slice(1);
    words.push(word);
  }

  return fullName.includes('-') ? words.join('-') : words.join(' ')
}
