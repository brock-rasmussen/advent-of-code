'use strict'

const ACTIONS = {
    '^': ({ x, y }) => ({ x, y: y + 1 }),
    '>': ({ x, y }) => ({ x: x + 1, y }),
    'v': ({ x, y }) => ({ x, y: y - 1 }),
    '<': ({ x, y }) => ({ x: x - 1, y }),
}

const visit = (visited, { x, y }) => {
    visited.add(`${x}${y}`)
}

// PART 1
// ======

const part1 = input => {
    const visited = new Set()
    let pos = { x: 0, y: 0 }
    visit(visited, pos);

    let directions = [...input]
    directions.forEach(direction => {
        pos = ACTIONS[direction](pos)
        visit(visited, pos)
    })

    return visited.size
}

// PART 2
// ======

const part2 = input => {
    const visited = new Set()
    let pos1 = { x: 0, y: 0 }
    let pos2 = { x: 0, y: 0 }
    visit(visited, pos1)

    let directions = [...input]
    for (let i = 0; i < directions.length; i += 2) {
        pos1 = ACTIONS[directions[i]](pos1)
        visit(visited, pos1)

        pos2 = ACTIONS[directions[i + 1]](pos2)
        visit(visited, pos2)
    }

    return visited.size
}

module.exports = { part1, part2 }