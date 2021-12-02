'use strict'

function sumLengths(arr) {
    return arr.reduce((sum, str) => sum += str.length, 0)
}

// PART 1
// ======

function unescape(str) {
    return str
        .replace(/^"(.*)"$/, '$1')
        .replace(/\\x([a-f0-9]{2})/g, (match, charCode) => {
            return String.fromCharCode(parseInt(charCode, 16))
        })
        .replace(/\\(.)/g, '$1')
}

const part1 = input => {
    const list = input.split(/\r\n/)
    return sumLengths(list) - sumLengths(list.map(unescape))
}

// PART 2
// ======

function escape(str) {
    return str
}

const part2 = input => {
    return input
}

module.exports = { part1, part2 }