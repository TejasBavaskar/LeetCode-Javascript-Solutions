//O(n^2)
var minimumCost = function (n, connections) {
  let graphMap = new Map();
  for (let i = 0; i < connections.length; i++) {
    let start = connections[i][0];
    let end = connections[i][1];
    let weight = connections[i][2];

    if (!graphMap.has(start)) {
      graphMap.set(start, []);
    }
    graphMap.get(start).push([end, weight]);

    if (!graphMap.has(end)) {
      graphMap.set(end, []);
    }
    graphMap.get(end).push([start, weight]);
  }

  let key = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  let parent = Array(n + 1).fill(-1);
  let mst = Array(n + 1).fill(false);

  key[1] = 0;

  for (let i = 1; i <= n; i++) {                //n
    let currentNode = -1;
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 1; j <= n; j++) {              //n
      if (mst[j] === false && key[j] < min) {
        min = key[j];
        currentNode = j;
      }
    }

    mst[currentNode] = true;

    let neighbors = graphMap.get(currentNode) || [];
    for (let j = 0; j < neighbors.length; j++) {
      let node = neighbors[j][0];
      let weight = neighbors[j][1];

      if (mst[node] === false && weight < key[node]) {
        key[node] = weight;
        parent[node] = currentNode;
      }
    }
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (mst[i]) {
      sum += key[i];
    } else {
      return -1;
    }
  }
  return sum;
};
