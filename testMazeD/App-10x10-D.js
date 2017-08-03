const testMazeD = require('./testMazeD').testMazeD
const Vertex = require('./testMazeD').Vertex

const upperLeftCornerChildren = require('../children/cornerChildren').upperLeftCornerChildren
const bottomLeftCornerChildren = require('../children/cornerChildren').bottomLeftCornerChildren
const upperRightCornerChildren = require('../children/cornerChildren').upperRightCornerChildren
const bottomRightCornerChildren = require('../children/cornerChildren').bottomRightCornerChildren

const topRowChildren = require('../children/topBottomRowsAndLeftRightColumnsChildren').topRowChildren
const bottomRowChildren = require('../children/topBottomRowsAndLeftRightColumnsChildren').bottomRowChildren
const leftColumnChildren = require('../children/topBottomRowsAndLeftRightColumnsChildren').leftColumnChildren
const rightColumnChildren = require('../children/topBottomRowsAndLeftRightColumnsChildren').rightColumnChildren

const middleSquareChildren = require('../children/middleSquareChildren').middleSquareChildren

const graphBFS = require('../breadthFirstSearch').graphBFS

console.log(testMazeD.map(row => {
  return row.map(cell => cell.value[2])
}))

// upperLeftCornerChildren(testMazeD)
// bottomLeftCornerChildren(testMazeD)
// upperRightCornerChildren(testMazeD)
// bottomRightCornerChildren(testMazeD)

// topRowChildren(testMazeD)
// bottomRowChildren(testMazeD)
// leftColumnChildren(testMazeD)
// rightColumnChildren(testMazeD)

// middleSquareChildren(testMazeD)

// console.log(graphBFS(testMazeD, start, end), bool)

/* WALLS */
// console.log(A.children)
