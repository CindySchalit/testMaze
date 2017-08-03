'use strict'

class Vertex {
  constructor(value) {
    this.value = value
    this.children = []
  }
}

const gridDimension = 10
let vertexList = []

for (let i = 0; i < gridDimension; i++) {
  for (let j = 0; j < gridDimension; j++) {
    let cell = new Vertex([i, j, `(${i}, ${j})`])
    vertexList.push(cell)
  }
}

// console.log(vertexList.map(vertex => vertex.value[2]))

let testMazeD = []

for (let i = 0; i < gridDimension; i++) {
  let row = []
  for (let j = 0; j < gridDimension; j++) {
    let cell = new Vertex([i, j, `(${i}, ${j})`])
    row.push(cell)
  }
  testMazeD.push(row)
}

const logGrid = (nestedArr) => {
  let grid = []
  for (let i = 0; i < nestedArr.length; i++) {
    let rowString = ''
    for (let j = 0; j < nestedArr.length; j++) {
      rowString = rowString.concat(`${nestedArr[i][j]} - `)
    }
    grid.push(rowString.slice(0, rowString.length - 3))
  }

  return grid
}

/* WALLS */
let row0col2 = testMazeD[0][2]
row0col2.value[2] = '******'
let row0col3 = testMazeD[0][3]
row0col3.value[2] = '******'
let row0col5 = testMazeD[0][5]
row0col5.value[2] = '******'
let row0col7 = testMazeD[0][7]
row0col7.value[2] = '******'

let row1col1 = testMazeD[1][1]
row1col1.value[2] = '******'
let row1col2 = testMazeD[1][2]
row1col2.value[2] = '******'
let row1col7 = testMazeD[1][7]
row1col7.value[2] = '******'
let row1col8 = testMazeD[1][8]
row1col8.value[2] = '******'

let row2col5 = testMazeD[2][5]
row2col5.value[2] = '******'

let row3col2 = testMazeD[3][2]
row3col2.value[2] = '******'
let row3col5 = testMazeD[3][5]
row3col5.value[2] = '******'
let row3col7 = testMazeD[3][7]
row3col7.value[2] = '******'
let row3col8 = testMazeD[3][8]
row3col8.value[2] = '******'

let row4col0 = testMazeD[4][0]
row4col0.value[2] = '******'
let row4col2 = testMazeD[4][2]
row4col2.value[2] = '******'
let row4col3 = testMazeD[4][3]
row4col3.value[2] = '******'
let row4col4 = testMazeD[4][4]
row4col4.value[2] = '******'
let row4col5 = testMazeD[4][5]
row4col5.value[2] = '******'
let row4col7 = testMazeD[4][7]
row4col7.value[2] = '******'

// 2, 3, 5, 6, 7, 9
let row5col2 = testMazeD[5][2]
row5col2.value[2] = '******'
let row5col3 = testMazeD[5][3]
row5col3.value[2] = '******'
let row5col5 = testMazeD[5][5]
row5col5.value[2] = '******'
let row5col6 = testMazeD[5][6]
row5col6.value[2] = '******'
let row5col7 = testMazeD[5][7]
row5col7.value[2] = '******'
let row5col9 = testMazeD[5][9]
row5col9.value[2] = '******'

// 2, 6, 7, 9
let row6col2 = testMazeD[6][2]
row6col2.value[2] = '******'
let row6col5 = testMazeD[6][5]
row6col5.value[2] = '******'
let row6col7 = testMazeD[6][7]
row6col7.value[2] = '******'
let row6col9 = testMazeD[6][9]
row6col9.value[2] = '******'

// 0, 5, 7
let row7col0 = testMazeD[7][0]
row7col0.value[2] = '******'
let row7col5 = testMazeD[7][5]
row7col5.value[2] = '******'
let row7col7 = testMazeD[7][7]
row7col7.value[2] = '******'

// 2, 3, 5, 9
let row8col2 = testMazeD[8][2]
row8col2.value[2] = '******'
let row8col3 = testMazeD[8][3]
row8col3.value[2] = '******'
let row8col5 = testMazeD[8][5]
row8col5.value[2] = '******'
let row8col9 = testMazeD[8][9]
row8col9.value[2] = '******'

// 2, 5, 7, 9
let row9col2 = testMazeD[9][2]
row9col2.value[2] = '******'
let row9col5 = testMazeD[9][5]
row9col5.value[2] = '******'
let row9col7 = testMazeD[9][7]
row9col7.value[2] = '******'
let row9col9 = testMazeD[9][9]
row9col9.value[2] = '******'

const valuesOnly = (maze) => {
  return maze
  .map(row => { return row
    .map(cell => cell.value[2])
  })
}

// console.log(logGrid(valuesOnly(testMazeD)))

module.exports = {
  testMazeD,
}
