const upperLeftCornerChildren = require('./children/cornerChildren').upperLeftCornerChildren
const bottomLeftCornerChildren = require('./children/cornerChildren').bottomLeftCornerChildren
const upperRightCornerChildren = require('./children/cornerChildren').upperRightCornerChildren
const bottomRightCornerChildren = require('./children/cornerChildren').bottomRightCornerChildren
const testMazeA = require('./testMazeA').testMazeA
const Vertex = require('./testMazeA').Vertex
const A = require('./testMazeA').A
const B = require('./testMazeA').B
const C = require('./testMazeA').C
const D = require('./testMazeA').D
const E = require('./testMazeA').E
const F = require('./testMazeA').F
const G = require('./testMazeA').G
const H = require('./testMazeA').H
const I = require('./testMazeA').I
const J = require('./testMazeA').J
const K = require('./testMazeA').K
const L = require('./testMazeA').L
const M = require('./testMazeA').M
const N = require('./testMazeA').N
const O = require('./testMazeA').O
const P = require('./testMazeA').P
const topRowChildren = require('./children/topBottomRowsAndLeftRightColumnsChildren').topRowChildren
const bottomRowChildren = require('./children/topBottomRowsAndLeftRightColumnsChildren').bottomRowChildren
const leftColumnChildren = require('./children/topBottomRowsAndLeftRightColumnsChildren').leftColumnChildren
const rightColumnChildren = require('./children/topBottomRowsAndLeftRightColumnsChildren').rightColumnChildren
const middleSquareChildren = require('./children/middleSquareChildren').middleSquareChildren
const graphBFS = require('./breadthFirstSearch').graphBFS

// console.log(testMazeA.map(row => {
//   return row.map(cell => cell.value[2])
// }))

upperLeftCornerChildren(testMazeA)
bottomLeftCornerChildren(testMazeA)
upperRightCornerChildren(testMazeA)
bottomRightCornerChildren(testMazeA)

// console.log(A.children.map(child => child.value[2]), 'B')
// console.log(M.children.map(child => child.value[2]), 'I, N')
// console.log(D.children.map(child => child.value[2]), 'H')
// console.log(P.children.map(child => child.value[2]), 'L')

topRowChildren(testMazeA)
bottomRowChildren(testMazeA)
leftColumnChildren(testMazeA)
rightColumnChildren(testMazeA)

// console.log(B.children), 'A & F')
// console.log(N.children, 'M & J')
// console.log(I.children, 'M & J')
// console.log(H.children, 'D, L & G')
// console.log(L.children, 'H & P')

middleSquareChildren(testMazeA)

// console.log(F.children, ' * * * B, G & J')
// console.log(G.children, ' * * * F & H')
// console.log(J.children, ' * * * F, I & N')

console.log(graphBFS(testMazeA, M, H), true)
console.log(graphBFS(testMazeA, A, C), false)
console.log(graphBFS(testMazeA, A, D), true)
console.log(graphBFS(testMazeA, B, P), true)
console.log(graphBFS(testMazeA, D, E), false)

/* WALLS */
// console.log(C.children)
// console.log(E.children)
// console.log(K.children)
// console.log(O.children)
