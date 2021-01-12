'use strict'

const checkConditions = (conditions) => {
    return (val) => conditions.every(condition => condition(val))
}

// PART 1
// ======

const part1 = input => {
    const isNice = checkConditions([
        val => val.replace(/[^aeiou]/g, '').length >= 3,
        val => /(.)\1/.test(val),
        val => !/(ab|cd|pq|xy)/.test(val),
    ])
    return input.split(/\r\n/).filter(isNice).length
}

// PART 2
// ======

const part2 = input => {
    const isNice = checkConditions([
        val => /(..).*\1/.test(val),
        val => /(.).\1/.test(val),
    ])
    return input.split(/\r\n/).filter(isNice).length
}

module.exports = { part1, part2 }