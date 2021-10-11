//O(V+E)
var possibleBipartition = function (n, dislikes) {
  let map = new Map();
  for (let i = 0; i < dislikes.length; i++) {   //E
    let start = dislikes[i][0];
    let end = dislikes[i][1];

    if (!map.has(start)) {
      map.set(start, []);
    }
    map.get(start).push(end);

    if (!map.has(end)) {
      map.set(end, []);
    }
    map.get(end).push(start);
  }

  let color = Array(n + 1).fill(-1);

  var isBipartite = function (node) {
    color[node] = 1;
    let queue = [];
    queue.push(node);

    while (queue.length) {
      let tempNode = queue.shift();
      let neighbors = map.get(tempNode) || [];
      for (let i = 0; i < neighbors.length; i++) {
        if (color[neighbors[i]] === -1) {
          color[neighbors[i]] = 1 - color[tempNode];
          queue.push(neighbors[i]);
        } else {
          if (color[neighbors[i]] === color[tempNode]) {
            console.log("returning false fortempNode= ", tempNode);
            return false;
          }
        }
      }
    }

    return true;
  };

  for (let i = 1; i <= n; i++) {    //V
    if (color[i] === -1) {
      if (!isBipartite(i)) {
        return false;
      }
    }
  }

  return true;
};
