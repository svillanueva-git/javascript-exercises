const repeatString = function(entryString, repititions) {

  let finalString = '';

  for (let i = 0; i < repititions; i++) {
    finalString += entryString;
  }

  return finalString;

}   


module.exports = repeatString