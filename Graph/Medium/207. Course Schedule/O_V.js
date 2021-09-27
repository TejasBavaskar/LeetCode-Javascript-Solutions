//O(V+E)    => V = no. of courses i.e. nodes
//Logic=> Detect if cycle in directed graph then true otherwise false
var canFinish = function (numCourses, prerequisites) {
  if (prerequisites.length === 0) {
    return true;
  }
  let map = new Map();
  for (let i = 0; i < prerequisites.length; i++) {
    let node1 = prerequisites[i][0];
    let node2 = prerequisites[i][1];

    if (node1 === node2) {
      return false;
    }
    if (!map.has(node1)) {
      map.set(node1, []);
    }
    map.get(node1).push(node2);
  }

  var isCycle = function (node) {
    visited[node] = true;
    track[node] = true;

    let list = map.get(node) || [];
    for (let i = 0; i < list.length; i++) {
      if (!visited[list[i]]) {
        isCycle(list[i]);
      }

      if (visited[list[i]] && track[list[i]]) {
        return true;
      }
    }
    track[node] = false;
    return false;
  };

  let visited = Array(numCourses).fill(false);
  let track = Array(numCourses).fill(false);

  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      if (isCycle(i)) {
        return false;
      }
    }
  }

  return true;
};
