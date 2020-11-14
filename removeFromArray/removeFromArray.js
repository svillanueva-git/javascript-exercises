const removeFromArray = function(array, arrayElement) {

    let arrayPosition = array.indexOf(arrayElement);
    array.splice(arrayPosition, 1);
    return array;
}

module.exports = removeFromArray
