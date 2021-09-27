//O(n)    =>
var findCenter = function (edges) {
  let node1 = edges[0][0];
  let node2 = edges[0][1];

  for (let i = 1; i < edges.length; i++) {
    if (edges[i][0] === node1 || edges[i][0] === node2) {
      return edges[i][0];
    }

    if (edges[i][1] === node1 || edges[i][1] === node2) {
      return edges[i][1];
    }
  }
};

//
//OR
// => Using Map
var findCenter = function (edges) {
  let map = new Map();
  for (let i = 0; i < edges.length; i++) {
    let node1 = edges[i][0];
    let node2 = edges[i][1];

    if (!map.has(node1)) {
      map.set(node1, 1);
    } else {
      map.set(node1, map.get(node1) + 1);
    }

    if (!map.has(node2)) {
      map.set(node2, 1);
    } else {
      map.set(node2, map.get(node2) + 1);
    }
  }

  let len = edges.length;
  for (const [key, val] of map.entries()) {
    if (val === len) {
      return key;
    }
  }
};
