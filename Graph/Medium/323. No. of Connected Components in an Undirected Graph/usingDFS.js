//O(V+E)    => Using DFS
var countComponents = function (n, edges) {
  let map = new Map();
  for (let i = 0; i < edges.length; i++) {
    let start = edges[i][0];
    let end = edges[i][1];

    if (!map.has(start)) {
      map.set(start, []);
    }
    map.get(start).push(end);

    if (!map.has(end)) {
      map.set(end, []);
    }
    map.get(end).push(start);
  }

  let visited = Array(n).fill(false);

  var dfs = function (node) {
    visited[node] = true;

    let nodeList = map.get(node) || [];

    for (let j = 0; j < nodeList.length; j++) {
      if (!visited[nodeList[j]]) {
        dfs(nodeList[j]);
      }
    }
  };

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      dfs(i);
    }
  }

  return count;
};
