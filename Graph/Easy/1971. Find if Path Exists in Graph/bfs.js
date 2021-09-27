//O(V+E)    => Using BFS
var validPath = function (n, edges, start, end) {
  if (start === end) {
    return true;
  }
  let map = new Map();
  for (let i = 0; i < edges.length; i++) {
    let node1 = edges[i][0];
    let node2 = edges[i][1];

    if (!map.has(node1)) {
      map.set(node1, []);
    }
    map.get(node1).push(node2);

    if (!map.has(node2)) {
      map.set(node2, []);
    }
    map.get(node2).push(node1);
  }

  let queue = [];
  queue.push(start);
  let visited = Array(n).fill(false);

  while (queue.length) {
    let node = queue.shift();
    visited[node] = true;
    let adjacentList = map.get(node) || [];
    if (adjacentList.includes(end)) {
      return true;
    }
    for (let i = 0; i < adjacentList.length; i++) {
      if (!visited[adjacentList[i]]) {
        queue.push(adjacentList[i]);
      }
    }
  }

  return false;
};
