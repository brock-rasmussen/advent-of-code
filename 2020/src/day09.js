'use strict'

const findInvalidNumber = (numbers, preamble) => {
    return numbers.slice(preamble).find((sum, i) => {
        let addends = numbers.slice(i, i + preamble)
        return !addends.filter(addend => {
            const difference = sum - addend
            return addends.includes(difference)
        }).length
    })
}

// PART 1
// ======

const part1 = input => {
    const numbers = input.split(/\r\n/).map(num => +num)
    return findInvalidNumber(numbers, 25)
}

// PART 2
// ======

const sum = (arr) => arr.reduce((total, int) => total + int, 0)

const part2 = input => {
    const numbers = input.split(/\r\n/).map(num => +num)
    const invalid = findInvalidNumber(numbers, 25)

    let range = [];
    for (let i = 0; i < numbers.length; i++) {
        range.push(numbers[i])

        while (sum(range) > invalid) {
            range.shift()
        }

        if (sum(range) === invalid) {
            break;
        }
    }

    return Math.min(...range) + Math.max(...range)
}

module.exports = { part1, part2 }