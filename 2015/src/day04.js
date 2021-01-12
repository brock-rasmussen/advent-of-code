'use strict'

const crypto = require('crypto-js')

const hash = (str) => {
    return crypto.enc.Hex.stringify(crypto.MD5(str))
}

// PART 1
// ======

const part1 = input => {
    let i = -1
    while (true) {
        if (hash(`${input}${++i}`).startsWith('00000')) {
            return i
        }
    }
}

// PART 2
// ======

const part2 = input => {
    let i = -1
    while (true) {
        if (hash(`${input}${++i}`).startsWith('000000')) {
            return i
        }
    }
}

module.exports = { part1, part2 }