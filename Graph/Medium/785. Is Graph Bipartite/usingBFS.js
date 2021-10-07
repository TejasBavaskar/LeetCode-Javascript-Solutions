//O(V+E)
var isBipartite = function (graph) {
  let colorMark = [];

  var bfs = function (newNode) {
    let queue = [];
    queue.push([newNode]);
    colorMark[newNode] = 0;

    while (queue.length) {
      let node = queue.shift();
      let currentColor = colorMark[node];
      console.log(node, currentColor);

      let nodeList = graph[node];
      for (let i = 0; i < nodeList.length; i++) {
        if (colorMark[nodeList[i]] === undefined) {
          colorMark[nodeList[i]] = 1 - currentColor;
          queue.push(nodeList[i]);
        } else {
          if (colorMark[nodeList[i]] === currentColor) {
            return false;
          }
        }
      }
    }

    return true;
  };

  for (let i = 0; i < graph.length; i++) {
    if (colorMark[i] === undefined) {
      if (!bfs(i)) {
        return false;
      }
    }
  }
  return true;
};
