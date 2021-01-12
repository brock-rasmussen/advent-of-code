'use strict'

const DIMENSIONS_REGEX = /^(\d+)x(\d+)x(\d+)$/

const parseLine = (line) => {
    const [, l, w, h] = line.match(DIMENSIONS_REGEX)
    return [+l, +w, +h]
}

const sortNumbers = (arr) => arr.slice().sort((a, b) => a - b);

// PART 1
// ======

const part1 = input => {
    return input.split(/\r\n/).reduce((total, line) => {
        const [l, w, h] = sortNumbers(parseLine(line))
        return total += (3 * l * w) + (2 * w * h) + (2 * h * l)
    }, 0)
}

// PART 2
// ======

const part2 = input => {
    return input.split(/\r\n/).reduce((total, line) => {
        const [l, w, h] = sortNumbers(parseLine(line))
        return total += (l * w * h) + (2 * l) + (2 * w);
    }, 0)
}

module.exports = { part1, part2 }