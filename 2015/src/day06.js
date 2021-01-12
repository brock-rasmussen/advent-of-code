'use strict'

const INSTRUCTION_REGEX = /^(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)$/

class Grid {
    constructor(height, width, defaultValue) {
        this.cells = new Array(width).fill(null).map(() => new Array(height).fill(defaultValue));
    }

    get sum() {
        return this.cells.reduce((total, row) => {
            return total += row.reduce((subtotal, cell) => subtotal += cell, 0)
        }, 0)
    }

    map({x1, y1, x2, y2}, fn) {
        for (let x = x1; x <= x2; x++) {
            for (let y = y1; y <= y2; y++) {
                this.cells[x][y] = fn(this.cells[x][y]);
            }
        }
    }
}

const parseLine = (line) => {
    const [, command, x1, y1, x2, y2] = line.match(INSTRUCTION_REGEX)
    return {
        command,
        x1: +x1,
        y1: +y1,
        x2: +x2,
        y2: +y2
    }
}

// PART 1
// ======

const part1 = input => {
    const ACTIONS = {
        'turn on': (grid, coordinates) => {
            grid.map(coordinates, () => 1)
        },
        'turn off': (grid, coordinates) => {
            grid.map(coordinates, () => 0)
        },
        'toggle': (grid, coordinates) => {
            grid.map(coordinates, val => val ? 0 : 1)
        }
    }

    const grid = new Grid(1000, 1000, 0);

    input.split(/\r\n/).forEach(line => {
        const command = parseLine(line)
        ACTIONS[command.command](grid, command)
    })

    return grid.sum
}

// PART 2
// ======

const part2 = input => {
    const ACTIONS = {
        'turn on': (grid, coordinates) => {
            grid.map(coordinates, val => val + 1)
        },
        'turn off': (grid, coordinates) => {
            grid.map(coordinates, val => Math.max(val - 1, 0))
        },
        'toggle': (grid, coordinates) => {
            grid.map(coordinates, val => val + 2)
        }
    }

    const grid = new Grid(1000, 1000, 0);

    input.split(/\r\n/).forEach(line => {
        const command = parseLine(line)
        ACTIONS[command.command](grid, command)
    })

    return grid.sum
}

module.exports = { part1, part2 }