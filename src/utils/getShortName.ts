import { getCorrectInputValue } from "./getCorrectInputValue";

export const getShortName = (name: string) => {
  // if (name.startsWith(' ')) return 'XX';
  if (name.trim().length === 0) return 'XX';

  const firstLetter =  name.trim()[0].toUpperCase();

  const fullName = getCorrectInputValue(name).trim().split(' ');

  if (fullName.length > 1) {
    const secondLetter =  fullName[1][0].toUpperCase();
    return firstLetter + secondLetter
  } else {
    return firstLetter
  }
}
