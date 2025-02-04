'use strict';


function average() {
    const numbers = [ 1, NaN, 12, '123', 2, null, { a: 10 } ];

    let data;

    let resultSum = 0;
    let resultNumber = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (!isNaN(numbers[i]) && typeof numbers[i] === 'number') {
            resultSum += numbers[i];
            resultNumber++;
        }
    }

    data = resultSum / resultNumber;
    return data;
}
alert(`Середнє арифметичне є: ${average()}`);
console.log(average());

// твоя функція
// const numbers = [ 1, NaN, 12, '123', 2, null, { a: 10 } ];
// console.log(average(numbers)); // 5