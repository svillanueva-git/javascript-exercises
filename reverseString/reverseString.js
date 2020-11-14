


const reverseString = function(string) {

let finalString = "";

let arrayString = string.split("");

  for (let i = 0; i < arrayString.length;) {
      let lastElement = arrayString.pop();
      finalString += lastElement;
  }

return finalString;

}

module.exports = reverseString