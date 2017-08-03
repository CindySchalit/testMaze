const upperLeftCornerChildren = require('./cornerChildren').upperLeftCornerChildren
const bottomLeftCornerChildren = require('./cornerChildren').bottomLeftCornerChildren
const upperRightCornerChildren = require('./cornerChildren').upperRightCornerChildren
const bottomRightCornerChildren = require('./cornerChildren').bottomRightCornerChildren
const testGrid = require('./testGrid').testGrid
const Vertex = require('./testGrid').Vertex
const A = require('./testGrid').A
const B = require('./testGrid').B
const C = require('./testGrid').C
const D = require('./testGrid').D
const E = require('./testGrid').E
const F = require('./testGrid').F
const G = require('./testGrid').G
const H = require('./testGrid').H
const I = require('./testGrid').I
const J = require('./testGrid').J
const K = require('./testGrid').K
const L = require('./testGrid').L
const M = require('./testGrid').M
const N = require('./testGrid').N
const O = require('./testGrid').O
const P = require('./testGrid').P
const topRowChildren = require('./topBottomRowsAndLeftRightColumnsChildren').topRowChildren
const bottomRowChildren = require('./topBottomRowsAndLeftRightColumnsChildren').bottomRowChildren
const leftColumnChildren = require('./topBottomRowsAndLeftRightColumnsChildren').leftColumnChildren
const rightColumnChildren = require('./topBottomRowsAndLeftRightColumnsChildren').rightColumnChildren
const middleSquareChildren = require('./middleSquareChildren').middleSquareChildren
const graphBFS = require('./breadthFirstSearch').graphBFS

// console.log(testGrid.map(row => {
//   return row.map(cell => cell.value[2])
// }))

upperLeftCornerChildren(testGrid)
bottomLeftCornerChildren(testGrid)
upperRightCornerChildren(testGrid)
bottomRightCornerChildren(testGrid)

// console.log(A.children.map(child => child.value[2]), 'B')
// console.log(M.children.map(child => child.value[2]), 'I, N')
// console.log(D.children.map(child => child.value[2]), 'H')
// console.log(P.children.map(child => child.value[2]), 'L')

topRowChildren(testGrid)
bottomRowChildren(testGrid)
leftColumnChildren(testGrid)
rightColumnChildren(testGrid)

// console.log(B.children), 'A & F')
// console.log(N.children, 'M & J')
// console.log(I.children, 'M & J')
// console.log(H.children, 'D, L & G')
// console.log(L.children, 'H & P')

middleSquareChildren(testGrid)

// console.log(F.children, ' * * * B, G & J')
// console.log(G.children, ' * * * F & H')
// console.log(J.children, ' * * * F, I & N')

// console.log(graphBFS(testGrid, M, H), true)
// console.log(graphBFS(testGrid, A, C), false)
console.log(graphBFS(testGrid, A, D), true)
