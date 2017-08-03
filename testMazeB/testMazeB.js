'use strict'

class Vertex {
  constructor(value) {
    this.value = value
    this.children = []
  }
}

let A = new Vertex([ 0, 0, 'A'])
let B = new Vertex([ 0, 1, 'B'])
let C = new Vertex([ 0, 2, 'C'])
let D = new Vertex([ 0, 3, 'D'])
let E = new Vertex([ 1, 0, '*'])
let F = new Vertex([ 1, 1, 'F'])
let G = new Vertex([ 1, 2, '*'])
let H = new Vertex([ 1, 3, 'H'])
let I = new Vertex([ 2, 0, 'I'])
let J = new Vertex([ 2, 1, 'J'])
let K = new Vertex([ 2, 2, '*'])
let L = new Vertex([ 2, 3, '*'])
let M = new Vertex([ 3, 0, '*'])
let N = new Vertex([ 3, 1, 'N'])
let O = new Vertex([ 3, 2, 'O'])
let P = new Vertex([ 3, 3, 'P'])

let vertexList = [
  A, // 0
  B, // 1
  C, // 2
  D, // 3
  E, // 4
  F, // 5
  G, // 6
  H, // 7
  I, // 8
  J, // 9
  K, // 10
  L, // 11
  M, // 12
  N, // 13
  O, // 14
  P  // 15
]

let gridDimension = Math.sqrt(vertexList.length)
let testMazeB = []
for(let i = 0; i < gridDimension; i++) {
  testMazeB.push([])
}

vertexList.forEach(vertex => {
  let x = vertex.value[0]
  let y = vertex.value[1]
  testMazeB[x][y] = vertex
})

module.exports = {
  Vertex,
  testMazeB,
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
}
