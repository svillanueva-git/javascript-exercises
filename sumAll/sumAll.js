const sumAll = function(int1, int2) {
    let finalSum = 0;
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
        return 'ERROR';
    } else if ((int1 || int2) < 0) {
        return 'ERROR';
    } else {
        let begInt = (int1 < int2) ? int1 : int2;
        let endInt = (int1 > int2) ? int1 : int2;

        for (let i = begInt; i <= endInt ; i++) {
            finalSum += i;
        }
      }
    return finalSum;
}

module.exports = sumAll
