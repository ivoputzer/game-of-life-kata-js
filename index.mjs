export function load (grid) {
  return {
    next () {
      return grid.map((row, x) => {
        return row.map((cell, y) => {
          const count = countAliveNeighbors(grid, x, y)
          return cell ? count === 2 || count === 3 : count === 3
        })
      })
    }
  }
}

export function countAliveNeighbors (grid, x, y) {
  return [
    grid[x - 1]?.[y - 1],
    grid[x - 1]?.[y],
    grid[x - 1]?.[y + 1],

    grid[x]?.[y - 1],
    grid[x]?.[y + 1],

    grid[x + 1]?.[y - 1],
    grid[x + 1]?.[y],
    grid[x + 1]?.[y + 1]

  ].filter(Boolean).length
}
