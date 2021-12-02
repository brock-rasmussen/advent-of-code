'use strict'

// PART 1
// ======

const part1 = input => {
    return input
        .split(/\r\n/)
        .map(num => +num)
        .reduce((increases, depth, index, array) => {
            let previousDepth = array[index - 1]

            if (previousDepth && depth > previousDepth) {
                increases++
            }

            return increases
        }, 0);
}

// PART 2
// ======

const part2 = input => {
    return input
        .split(/\r\n/)
        .map(num => +num)
        .reduce((windows, depth, index, array) => {
            if (array[index + 2]) {
                windows.push(depth + array[index + 1] + array[index + 2])
            }

            return windows
        }, [])
        .reduce((increases, window, index, array) => {
            let previousWindow = array[index - 1]

            if (previousWindow && window > previousWindow) {
                increases++
            }

            return increases
        }, 0);
}

module.exports = { part1, part2 }