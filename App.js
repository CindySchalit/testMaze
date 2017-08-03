const upperLeftCornerChildren = require('./children/cornerChildren').upperLeftCornerChildren
const bottomLeftCornerChildren = require('./children/cornerChildren').bottomLeftCornerChildren
const upperRightCornerChildren = require('./children/cornerChildren').upperRightCornerChildren
const bottomRightCornerChildren = require('./children/cornerChildren').bottomRightCornerChildren
const testMaze = require('./testMaze').testMaze
const Vertex = require('./testMaze').Vertex
const A = require('./testMaze').A
const B = require('./testMaze').B
const C = require('./testMaze').C
const D = require('./testMaze').D
const E = require('./testMaze').E
const F = require('./testMaze').F
const G = require('./testMaze').G
const H = require('./testMaze').H
const I = require('./testMaze').I
const J = require('./testMaze').J
const K = require('./testMaze').K
const L = require('./testMaze').L
const M = require('./testMaze').M
const N = require('./testMaze').N
const O = require('./testMaze').O
const P = require('./testMaze').P
const topRowChildren = require('./children/topBottomRowsAndLeftRightColumnsChildren').topRowChildren
const bottomRowChildren = require('./children/topBottomRowsAndLeftRightColumnsChildren').bottomRowChildren
const leftColumnChildren = require('./children/topBottomRowsAndLeftRightColumnsChildren').leftColumnChildren
const rightColumnChildren = require('./children/topBottomRowsAndLeftRightColumnsChildren').rightColumnChildren
const middleSquareChildren = require('./children/middleSquareChildren').middleSquareChildren
const graphBFS = require('./breadthFirstSearch').graphBFS

// console.log(testMaze.map(row => {
//   return row.map(cell => cell.value[2])
// }))

upperLeftCornerChildren(testMaze)
bottomLeftCornerChildren(testMaze)
upperRightCornerChildren(testMaze)
bottomRightCornerChildren(testMaze)

// console.log(A.children.map(child => child.value[2]), 'B')
// console.log(M.children.map(child => child.value[2]), 'I, N')
// console.log(D.children.map(child => child.value[2]), 'H')
// console.log(P.children.map(child => child.value[2]), 'L')

topRowChildren(testMaze)
bottomRowChildren(testMaze)
leftColumnChildren(testMaze)
rightColumnChildren(testMaze)

// console.log(B.children), 'A & F')
// console.log(N.children, 'M & J')
// console.log(I.children, 'M & J')
// console.log(H.children, 'D, L & G')
// console.log(L.children, 'H & P')

middleSquareChildren(testMaze)

// console.log(F.children, ' * * * B, G & J')
// console.log(G.children, ' * * * F & H')
// console.log(J.children, ' * * * F, I & N')

console.log(graphBFS(testMaze, M, H), true)
console.log(graphBFS(testMaze, A, C), false)
console.log(graphBFS(testMaze, A, D), true)
console.log(graphBFS(testMaze, B, P), true)
console.log(graphBFS(testMaze, D, E), false)
