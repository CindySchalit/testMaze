'use strict'

function topRowChildren(grid) {
  const topRow = grid[0]

  topRow.forEach( (cell, index) => {
    if (
      index !== 0
      && index !== topRow.length - 1
      && !cell.value[2].includes('*')
    ) {
      const row = cell.value[0]
      const column = cell.value[1]
      const leftNeighbor = grid[row][column - 1]
      const rightNeighbor = grid[row][column + 1]
      const bottomNeighbor = grid[row + 1][column]
      const neighbors = [leftNeighbor, rightNeighbor, bottomNeighbor]

      neighbors.forEach(neighbor => {
        if(!neighbor.value[2].includes('*')) {
          cell.children.push(neighbor)
        }
      })
    }
  })
}

function bottomRowChildren(grid) {
  const bottomRow = grid[grid.length - 1]

  bottomRow.forEach( (cell, index) => {
    if (
      index !== 0
      && index !== bottomRow.length - 1
      && !cell.value[2].includes('*')
    ) {
      const row = cell.value[0]
      const column = cell.value[1]
      const leftNeighbor = grid[row][column - 1]
      const rightNeighbor = grid[row][column + 1]
      const topNeighbor = grid[row - 1][column]
      const neighbors = [leftNeighbor, rightNeighbor, topNeighbor]

      neighbors.forEach(neighbor => {
        if(!neighbor.value[2].includes('*')) {
          cell.children.push(neighbor)
        }
      })
    }
  })
}

function leftColumnChildren(grid) {
  let leftColumn = []
  grid.forEach(row => {
    leftColumn.push(row[0])
  })

  leftColumn.forEach(cell => {
    if (
      cell.value[0] !== 0
      && cell.value[0] !== leftColumn.length - 1
      && !cell.value[2].includes('*')
    ) {
      const row = cell.value[0]
      const column = cell.value[1]
      const topNeighbor = grid[row - 1][column]
      const bottomNeighbor = grid[row + 1][column]
      const rightNeighbor = grid[row][column + 1]
      const neighbors = [topNeighbor, bottomNeighbor, rightNeighbor]

      neighbors.forEach(neighbor => {
        if(!neighbor.value[2].includes('*')) {
          cell.children.push(neighbor)
        }
      })
    }
  })
}

function rightColumnChildren(grid) {
  let rightColumn = []
  grid.forEach(row => {
    rightColumn.push(row[row.length - 1])
  })

  rightColumn.forEach(cell => {
    if (
      cell.value[0] !== 0
      && cell.value[0] !== rightColumn.length - 1
      && !cell.value[2].includes('*')
    ) {
      const row = cell.value[0]
      const column = cell.value[1]
      const topNeighbor = grid[row - 1][column]
      const bottomNeighbor = grid[row + 1][column]
      const leftNeighbor = grid[row][column - 1]
      const neighbors = [topNeighbor, bottomNeighbor, leftNeighbor]

      neighbors.forEach(neighbor => {
        if(!neighbor.value[2].includes('*')) {
          cell.children.push(neighbor)
        }
      })
    }
  })
}

module.exports = {
  topRowChildren,
  bottomRowChildren,
  leftColumnChildren,
  rightColumnChildren,
}
