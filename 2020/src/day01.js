'use strict'

// PART 1
// ======

const part1 = input => {
    const numbers = input.split(/\r\n/).map(num => +num)
    for (let i = 0; i < numbers.length; i++) {
        let difference = 2020 - numbers[i];
        if (numbers.includes(difference)) {
            return numbers[i] * difference;
        }
    }
}

// PART 2
// ======

const part2 = input => {
    const numbers = input.split(/\r\n/).map(num => +num)
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let difference = 2020 - numbers[i] - numbers[j];
            if (numbers.includes(difference)) {
                return numbers[i] * numbers[j] * difference;
            }
        }
    }
}

module.exports = { part1, part2 }