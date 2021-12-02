'use strict'

const INSTRUCTION_REGEX = /^(forward|down|up) (\d+)$/

const parseLine = (line) => {
    const [, command, movement] = line.match(INSTRUCTION_REGEX)
    return {
        command,
        movement: +movement
    }
}

// PART 1
// ======

const part1 = input => {
    const position = {
        x: 0,
        y: 0,
    }

    const ACTIONS = {
        'forward': (position, movement) => {
            position.x += movement
        },
        'down': (position, movement) => {
            position.y += movement
        },
        'up': (position, movement) => {
            position.y -= movement
        },
    }

    input
        .split(/\r\n/)
        .forEach(line => {
            const { command, movement } = parseLine(line)
            ACTIONS[command](position, movement)
        })

    return position.x * position.y
}

// PART 2
// ======

const part2 = input => {
    const position = {
        aim: 0,
        x: 0,
        y: 0,
    }

    const ACTIONS = {
        'forward': (position, movement) => {
            position.x += movement
            position.y += position.aim * movement
        },
        'down': (position, movement) => {
            position.aim += movement
        },
        'up': (position, movement) => {
            position.aim -= movement
        },
    }

    input
        .split(/\r\n/)
        .forEach(line => {
            const { command, movement } = parseLine(line)
            ACTIONS[command](position, movement)
        })

    return position.x * position.y
}

module.exports = { part1, part2 }