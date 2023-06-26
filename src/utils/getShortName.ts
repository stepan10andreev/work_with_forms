export const getShortName = (name: string) => {
  const firstLetter =  name.trim()[0].toUpperCase();
  const fullName = name.trim().split(' ');
  if (fullName.length > 1) {
    const secondLetter =  fullName[1][0].toUpperCase();
    return firstLetter + secondLetter
  } else {
    return firstLetter
  }
}
