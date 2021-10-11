//O(V+E)
var minReorder = function (n, connections) {
  let graphMap = new Map();   //To store graph as undirected graph
  let edgeMap = new Map();    //To store the directed graph

  for (let i = 0; i < connections.length; i++) {            //E
    let start = connections[i][0];
    let end = connections[i][1];

    //Store directed graph
    if (!edgeMap.has(start)) {
      edgeMap.set(start, []);
    }
    edgeMap.get(start).push(end);

    //Store undirected graph
    if (!graphMap.has(start)) {
      graphMap.set(start, []);
    }
    graphMap.get(start).push(end);

    if (!graphMap.has(end)) {
      graphMap.set(end, []);
    }
    graphMap.get(end).push(start);
  }

  let visited = Array(n).fill(-1);
  let count = 0;

  var dfs = function (node) {                               //V
    let neighbors = graphMap.get(node) || [];

    for (let i = 0; i < neighbors.length; i++) {
      if (visited[neighbors[i]] === -1) {                   //If neighbors[i] is not visited
        if (edgeMap.get(node)?.includes(neighbors[i])) {    //and directed graph contains edge from node --> neighbors[i] 
          count++;                                          //then increment edge flip count
        }

        visited[neighbors[i]] = 1;
        dfs(neighbors[i]);
      }
    }
  };

  visited[0] = 1;
  dfs(0);
  return count;
};
