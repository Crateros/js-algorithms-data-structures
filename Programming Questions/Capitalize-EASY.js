// Capitalize the first and last word in a string and
// return that string

const capitalyze = string => {
  const stringArray = string.split(' ');
  let word = stringArray[0].split('');
  word[0] = word[0].toUpperCase();
  word = word.join('');
  stringArray[0] = word;

  word = stringArray[stringArray.length - 1].split('');
  word[0] = word[0].toUpperCase();
  word = word.join('');
  stringArray[stringArray.length - 1] = word;

  console.log(stringArray);
  const searchRegExp = /,/g;

  result = stringArray.toString().replace(searchRegExp, ' ');

  return result;
};

console.log(capitalyze('hello josh how are you'));
