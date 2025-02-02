'use strict';

const divisionNumber = getDivisionNumber('Введіть числові значення:');

function getDivisionNumber(someNumber) {

    let data;
    let result = prompt(someNumber);
    result = result.split(',');

    let resultSum = 0;
    let resultNumber = 0;

    for (let i = 0; i < result.length; i++) {

        let number = Number(result[i]);

        if (!isNaN(number)) {
            resultSum += number;
            resultNumber++;
        }
    }
    data = resultSum / resultNumber;
    return data;
}
alert(`Середнє арифметичне є: ${divisionNumber}`);