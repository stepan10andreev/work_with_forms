export const getFullNameWithCapitalLetters = (fullName: string): string => {
  const initialWords =  fullName.split(' ');

  const words = [];

  for (const initialWord of initialWords) {
    console.log(initialWords)
    let word = initialWord[0].toUpperCase() + initialWord.slice(1);
    words.push(word);
  }

  return words.join(' ');
}
