'use strict'

const INSTRUCTION_REGEX = /^(acc|jmp|nop) ([\+-]\d+)$/

const ACTIONS = {
    acc(state, value) {
        state.accumulator += value
        state.pointer += 1
    },
    jmp(state, value) {
        state.pointer += value
    },
    nop(state, value) {
        state.pointer += 1
    },
}

const parseLine = line => {
    const [, command, value] = line.match(INSTRUCTION_REGEX)
    return [
        command,
        +value
    ]
}

function* program(instructions, executed = new Set(), accumulator = 0, pointer = 0) {
    const state = {
        executed: new Set(executed),
        accumulator,
        pointer
    }

    yield state

    while (!state.executed.has(state.pointer)) {
        if (state.pointer >= instructions.length) {
            break;
        }
        
        const [command, value] = instructions[state.pointer]
        state.executed.add(state.pointer)

        ACTIONS[command](state,value)

        yield state
    }

    return state
}

program.prototype.run = function() {
    let state = this.next()
    while (!state.done) {
        state = this.next()
    }
    return state.value
}

// PART 1
// ======

const part1 = input => {
    const instructions = input.split(/\r\n/).map(parseLine)
    return program(instructions).run().accumulator
}

// PART 2
// ======

const part2 = input => {
    const instructions = input.split(/\r\n/).map(parseLine)
    const Program = program(instructions)
    
    let state = Program.next()
    while (!state.done) {
        const {executed, accumulator, pointer} = state.value

        if (instructions[pointer][0] !== 'acc') {
            const _instructions = JSON.parse(JSON.stringify(instructions))
            _instructions[pointer][0] = _instructions[pointer][0] === 'jmp' ? 'nop' : 'jmp'

            const _Program = program(_instructions, new Set(executed), accumulator, pointer).run()

            if (_Program.pointer === _instructions.length) {
                return _Program.accumulator
            }
        }

        state = Program.next()
    }
}

module.exports = { part1, part2 }