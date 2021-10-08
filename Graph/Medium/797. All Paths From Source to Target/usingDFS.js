//O(2^(n) * n)
//for n nodes there can be max possible paths = 2^(n-1)-1
//for each path, worst we need to travel n nodes
var allPathsSourceTarget = function (graph) {
  const dest = graph.length - 1;
  let pathList = [];

  var dfs = function (node, path) {
    path.push(node);
    if (node === dest) {
      pathList.push(path);
      return;
    }

    let neighbors = graph[node];
    for (let i = 0; i < neighbors.length; i++) {
      dfs(neighbors[i], [...path]);
    }
  };

  dfs(0, []);
  return pathList;
};
