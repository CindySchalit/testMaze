const upperLeftCornerChildren = require('../children/cornerChildren').upperLeftCornerChildren
const bottomLeftCornerChildren = require('../children/cornerChildren').bottomLeftCornerChildren
const upperRightCornerChildren = require('../children/cornerChildren').upperRightCornerChildren
const bottomRightCornerChildren = require('../children/cornerChildren').bottomRightCornerChildren
const testMazeB = require('./testMazeB').testMazeB
const Vertex = require('./testMazeB').Vertex
const A = require('./testMazeB').A
const B = require('./testMazeB').B
const C = require('./testMazeB').C
const D = require('./testMazeB').D
const E = require('./testMazeB').E
const F = require('./testMazeB').F
const G = require('./testMazeB').G
const H = require('./testMazeB').H
const I = require('./testMazeB').I
const J = require('./testMazeB').J
const K = require('./testMazeB').K
const L = require('./testMazeB').L
const M = require('./testMazeB').M
const N = require('./testMazeB').N
const O = require('./testMazeB').O
const P = require('./testMazeB').P
const topRowChildren = require('../children/topBottomRowsAndLeftRightColumnsChildren').topRowChildren
const bottomRowChildren = require('../children/topBottomRowsAndLeftRightColumnsChildren').bottomRowChildren
const leftColumnChildren = require('../children/topBottomRowsAndLeftRightColumnsChildren').leftColumnChildren
const rightColumnChildren = require('../children/topBottomRowsAndLeftRightColumnsChildren').rightColumnChildren
const middleSquareChildren = require('../children/middleSquareChildren').middleSquareChildren
const graphBFS = require('../breadthFirstSearch').graphBFS

// console.log(testMazeB.map(row => {
//   return row.map(cell => cell.value[2])
// }))

upperLeftCornerChildren(testMazeB)
bottomLeftCornerChildren(testMazeB)
upperRightCornerChildren(testMazeB)
bottomRightCornerChildren(testMazeB)

// console.log(A.children.map(child => child.value[2]), 'B')
// console.log(M.children, '[]')
// console.log(D.children.map(child => child.value[2]), 'C & H')
// console.log(L.children, '[]')

topRowChildren(testMazeB)
bottomRowChildren(testMazeB)
leftColumnChildren(testMazeB)
rightColumnChildren(testMazeB)

// /* TOP ROW */
// console.log(B.children.map(child => child.value[2]), 'A, C & F')
// console.log(C.children.map(child => child.value[2]), 'B & D')

// /* BOTTOM ROW */
// console.log(N.children.map(child => child.value[2]), 'O & J')
// console.log(O.children.map(child => child.value[2]), 'N & P')

// /* LEFT AND RIGHT COLUMNS */
// console.log(N.children.map(child => child.value[2]), 'O & J')
// console.log(O.children.map(child => child.value[2]), 'N & P')

middleSquareChildren(testMazeB)

// console.log(F.children.map(child => child.value[2]), 'B & J')
// console.log(J.children.map(child => child.value[2]), 'F, I & N')

console.log(graphBFS(testMazeB, P, H), true)
console.log(graphBFS(testMazeB, A, K), false)
console.log(graphBFS(testMazeB, D, I), true)
console.log(graphBFS(testMazeB, I, D), true)
console.log(graphBFS(testMazeB, M, C), false)

/* WALLS */
// console.log(E.children)
// console.log(G.children)
// console.log(K.children)
// console.log(L.children)
// console.log(M.children)
