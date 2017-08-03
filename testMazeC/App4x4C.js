const upperLeftCornerChildren = require('../children/cornerChildren').upperLeftCornerChildren
const bottomLeftCornerChildren = require('../children/cornerChildren').bottomLeftCornerChildren
const upperRightCornerChildren = require('../children/cornerChildren').upperRightCornerChildren
const bottomRightCornerChildren = require('../children/cornerChildren').bottomRightCornerChildren
const testMazeC = require('./testMazeC').testMazeC
const Vertex = require('./testMazeC').Vertex
const A = require('./testMazeC').A
const B = require('./testMazeC').B
const C = require('./testMazeC').C
const D = require('./testMazeC').D
const E = require('./testMazeC').E
const F = require('./testMazeC').F
const G = require('./testMazeC').G
const H = require('./testMazeC').H
const I = require('./testMazeC').I
const J = require('./testMazeC').J
const K = require('./testMazeC').K
const L = require('./testMazeC').L
const M = require('./testMazeC').M
const N = require('./testMazeC').N
const O = require('./testMazeC').O
const P = require('./testMazeC').P
const topRowChildren = require('../children/topBottomRowsAndLeftRightColumnsChildren').topRowChildren
const bottomRowChildren = require('../children/topBottomRowsAndLeftRightColumnsChildren').bottomRowChildren
const leftColumnChildren = require('../children/topBottomRowsAndLeftRightColumnsChildren').leftColumnChildren
const rightColumnChildren = require('../children/topBottomRowsAndLeftRightColumnsChildren').rightColumnChildren
const middleSquareChildren = require('../children/middleSquareChildren').middleSquareChildren
const graphBFS = require('../breadthFirstSearch').graphBFS

console.log(testMazeC.map(row => {
  return row.map(cell => cell.value[2])
}))

upperLeftCornerChildren(testMazeC)
bottomLeftCornerChildren(testMazeC)
upperRightCornerChildren(testMazeC)
bottomRightCornerChildren(testMazeC)

topRowChildren(testMazeC)
bottomRowChildren(testMazeC)
leftColumnChildren(testMazeC)
rightColumnChildren(testMazeC)

middleSquareChildren(testMazeC)

console.log(graphBFS(testMazeC, P, H), false)
console.log(graphBFS(testMazeC, A, K), false)
console.log(graphBFS(testMazeC, D, I), false)
console.log(graphBFS(testMazeC, I, D), false)
console.log(graphBFS(testMazeC, M, C), false)

/* WALLS */
console.log(A.children)
console.log(B.children)
console.log(C.children)
console.log(D.children)
console.log(E.children)
console.log(F.children)
console.log(G.children)
console.log(H.children)
console.log(I.children)
console.log(J.children)
console.log(K.children)
console.log(L.children)
console.log(M.children)
console.log(N.children)
console.log(O.children)
console.log(P.children)
