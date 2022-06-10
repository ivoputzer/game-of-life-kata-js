export function load (grid) {
  return {
    next () {
      return grid.map((row, x) => {
        return row.map((cell, y) => {
          const count = countAliveNeighbors(grid, x, y)

          if (cell === 1 && count === 0) {
            return 0
          }

          if (cell === 1 && count === 1) {
            return 0
          }

          if (cell === 1 && count > 3) {
            return 0
          }

          if (cell === 0 && count === 3) {
            return 1
          }

          return cell
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
