'use strict'

function middleSquareChildren(grid) {
  const middleSquare = []

  grid.forEach(row => {
    row.forEach(cell => {
      if (
        cell.value[0] // top row
        && cell.value[1] // left column
        && cell.value[0] !== grid.length - 1 // bottom row
        && cell.value[1] !== row.length - 1 // right column
        && cell.value[2] !== '-'
      ) {
        middleSquare.push(cell)
      }
    })
  })

  middleSquare.forEach(cell => {
    const row = cell.value[0]
    const column = cell.value[1]
    const topNeighbor = grid[row - 1][column]
    const leftNeighbor = grid[row][column - 1]
    const rightNeighbor = grid[row][column + 1]
    const bottomNeighbor = grid[row + 1][column]
    const neighbors = [topNeighbor, leftNeighbor, rightNeighbor, bottomNeighbor]

    neighbors.forEach(neighbor => {
      if (neighbor.value[2] !== '-') {
        cell.children.push(neighbor)
      }
    })
  })
}

module.exports = {
  middleSquareChildren,
}
