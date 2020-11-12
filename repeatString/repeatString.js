const repeatString = function(entryString, repititions) {

  let finalString = '';

  if (repititions < 0) {
    return 'ERROR';
  } else

  for (let i = 0; i < repititions; i++) {
    finalString += entryString;
  }

  return finalString;

}   


module.exports = repeatString