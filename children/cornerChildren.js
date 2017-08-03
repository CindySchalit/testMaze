'use strict'

// [ 0, 0 ]
function upperLeftCornerChildren(grid) {
  const upperLeftCorner = grid[0][0]
  const bottomNeighbor = grid[1][0]
  const rightNeighbor = grid[0][1]

  if (bottomNeighbor.value[2] !== '-') {
    upperLeftCorner.children.push(bottomNeighbor)
  }

  if (rightNeighbor.value[2] !== '-') {
    upperLeftCorner.children.push(rightNeighbor)
  }
}

function bottomLeftCornerChildren(grid) {
  const lastRow = grid.length - 1
  const bottomLeftCorner = grid[lastRow][0]
  const topNeighbor = grid[lastRow - 1][0]
  const rightNeighbor = grid[lastRow][1]

  if (topNeighbor.value[2] !== '-') {
    bottomLeftCorner.children.push(topNeighbor)
  }

  if (rightNeighbor.value[2] !== '-') {
    bottomLeftCorner.children.push(rightNeighbor)
  }
}

function upperRightCornerChildren(grid) {
  const lastColumn = grid[0].length - 1
  const upperRightCorner = grid[0][lastColumn]
  const leftNeighbor = grid[0][lastColumn - 1]
  const bottomNeighbor = grid[1][lastColumn]

  if (leftNeighbor.value[2] !== '-') {
    upperRightCorner.children.push(leftNeighbor)
  }

  if (bottomNeighbor.value[2] !== '-') {
    upperRightCorner.children.push(bottomNeighbor)
  }
}

function bottomRightCornerChildren(grid) {
  // NEED TO DRY lastRow and lastColumn, create a constructor/class for grid
  const lastRow = grid.length - 1
  const lastColumn = grid[0].length - 1

  const bottomRightCorner = grid[lastRow][lastColumn]
  const leftNeighbor = grid[lastRow][lastColumn - 1]
  const topNeighbor = grid[lastRow - 1][lastColumn]

  if (leftNeighbor.value[2] !== '-') {
    bottomRightCorner.children.push(leftNeighbor)
  }

  if (topNeighbor.value[2] !== '-') {
    bottomRightCorner.children.push(topNeighbor)
  }
}

module.exports = {
  upperLeftCornerChildren,
  bottomLeftCornerChildren,
  upperRightCornerChildren,
  bottomRightCornerChildren,
}