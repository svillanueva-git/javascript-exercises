
const number = Math.floor(Math.random() * 1000)


const repeatString = function(entryString, number) {

  let finalString = '';

  if (number < 0) {
    return 'ERROR';
  } else

  for (let i = 0; i < number; i++) {
    finalString += entryString;
  }

  return finalString;

}   


module.exports = repeatString