const removeFromArray = function(originalArray) {

    for (let i = 1; i < arguments.length; i++ ) {
        let indexOfElement = originalArray.indexOf(arguments[i]);
        if (indexOfElement === -1) {
            continue;
        } else {
        originalArray.splice(indexOfElement, 1);
          }
    }

    return originalArray;
}

module.exports = removeFromArray





