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

upperLeftCornerChildren(testMazeD)
bottomLeftCornerChildren(testMazeD)
upperRightCornerChildren(testMazeD)
bottomRightCornerChildren(testMazeD)

topRowChildren(testMazeD)
bottomRowChildren(testMazeD)
leftColumnChildren(testMazeD)
rightColumnChildren(testMazeD)

middleSquareChildren(testMazeD)

const row8col0 = testMazeD[8][0]
const row4col9 = testMazeD[4][9]
console.log(graphBFS(testMazeD, row8col0, row4col9), true)

const row5col4 = testMazeD[5][4]
const row9col6 = testMazeD[9][6]
console.log(graphBFS(testMazeD, row5col4, row9col6), true)

const row0col8 = testMazeD[0][8]
const row9col3 = testMazeD[9][3]
console.log(graphBFS(testMazeD, row0col8, row9col3), true)

const row4col0 = testMazeD[4][0]
const row6col6 = testMazeD[6][6]
console.log(graphBFS(testMazeD, row4col0, row6col6), false)

const row9col9 = testMazeD[9][9]
console.log(graphBFS(testMazeD, row5col4, row9col9), false)

/* WALLS */
console.log(testMazeD[4][7].children)
console.log(testMazeD[1][2].children)
console.log(testMazeD[9][7].children)
console.log(testMazeD[3][5].children)
console.log(testMazeD[4][0].children)
