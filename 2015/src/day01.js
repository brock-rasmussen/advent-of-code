'use strict'

const ACTIONS = {
    '(': floor => floor + 1,
    ')': floor => floor - 1,
}

// PART 1
// ======

const part1 = input => {
    return [...input].reduce((floor, instruction) => {
        return ACTIONS[instruction](floor)
    }, 0)
}

// PART 2
// ======

const part2 = input => {
    let floor = 0;
    return [...input].findIndex(instruction => {
        floor = ACTIONS[instruction](floor)
        return floor < 0
    }) + 1
}

module.exports = { part1, part2 }