//O(n+m)    => n = no. of nodes   m = no. of edges
var cloneGraph = function (node) {
  let map = new Map();

  var solve = function (node) {
    if (!node) {
      return node;
    }

    if (map.has(node)) {
      return map.get(node);
    }

    let newNode = new Node(node.val, []);
    map.set(node, newNode);

    for (let i = 0; i < node.neighbors.length; i++) {
      let tempNode = node.neighbors[i];
      newNode.neighbors.push(solve(tempNode));
    }

    return newNode;
  };

  return solve(node);
};
