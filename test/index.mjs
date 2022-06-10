import { equal, deepEqual } from 'assert'
import { load, countAliveNeighbors } from '../index.mjs'

describe('game of life', () => {
  describe('.load', () => {
    it('should calculate the next generation of the game of life given any starting state', () => {
      const anInitialState = 'any starting state'
      const game = load(anInitialState)
      equal(typeof game.next, 'function')
    })

    it('should start with and return a two dimensional grid of cells', () => {
      const game = load([[0]])
      const grid = game.next()
      deepEqual(grid, [[0]])
    })
  })

  describe('.countAliveNeighbors', () => {
    it('should exists', () => {
      equal(typeof countAliveNeighbors, 'function')
    })

    it('should count alive top cells', () => {
      const grid = [
        [1],
        [1]
      ]
      const count = countAliveNeighbors(grid, 1, 0)
      equal(count, 1)
    })

    it('should count alive cells above position', () => {
      const grid = [
        [1, 1, 1],
        [0, 0, 0]
      ]
      const count = countAliveNeighbors(grid, 1, 1)
      equal(count, 3)
    })

    it('should count alive bottom cells', () => {
      const grid = [
        [0, 0, 0],
        [1, 1, 1]
      ]
      const count = countAliveNeighbors(grid, 0, 1)
      equal(count, 3)
    })

    it('should count alive cells on the left and on the right', () => {
      const grid = [
        [0, 0, 0],
        [1, 0, 1],
        [0, 0, 0]
      ]
      const count = countAliveNeighbors(grid, 1, 1)
      equal(count, 2)
    })
  })

  describe('a dead cell', () => {
    // 4. Any dead cell with exactly three live neighbours will come to life.
    it('resurrects if it has excatly three neighbors', () => {
      const game = load([
        [1, 1, 0],
        [0, 1, 0],
        [0, 0, 0]
      ])
      const grid = game.next()
      equal(grid[1][0], 1)
    })
  })

  describe('a living cell', () => {
    it('dies if it doesn\'t have any neighbors', () => {
      const game = load([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ])
      const grid = game.next()
      equal(grid[1][1], 0)
    })

    it('dies if it has only one neighbor', () => {
      const game = load([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ])
      const grid = game.next()
      equal(grid[1][1], 0)
    })

    it('dies if it has more than three neighbors', () => {
      const game = load([
        [1, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
      ])
      const grid = game.next()
      equal(grid[1][1], 0)
    })
  })

  // 2. Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding).
  // 3. Any live cell with two or three live neighbours lives, unchanged, to the next generation.

  // The code should allow for the board/world to be created with a valid initial state, or a randomly generated state.
})
