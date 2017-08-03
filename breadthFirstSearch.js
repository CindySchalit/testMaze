'use strict'

function graphBFS(graph, start, end) {
  if(start === end) {
    return true
  }

  // line the vertices up and examine them
  let queue = []
  let visited = []

  queue.push(start)

  while(queue.length) {
    let current = queue.shift()

    // if we have NOT already visited the current vertex
    if (!visited.includes(current)) {
      if (current === end) {
        return true
      }

      current.children.forEach(child => queue.push(child))
      visited.push(current)
    }
  }

  return false
}

module.exports = {
  graphBFS,
}
