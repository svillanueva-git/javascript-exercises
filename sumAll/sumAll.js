const sumAll = function(startInt, endInt) {
    let finalSum = 0;
    for (let i = startInt; i <= endInt ; i++) {
        finalSum += i;
    }
    return finalSum;
}

module.exports = sumAll
