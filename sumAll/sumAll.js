const sumAll = function(int1, int2) {

    let begInt = (int1 < int2) ? int1 : int2;
    let endInt = (int1 > int2) ? int1 : int2;
    let finalSum = 0;

    for (let i = begInt; i <= endInt ; i++) {
        finalSum += i;
    }
    return finalSum;
}

module.exports = sumAll
