//O(V+E)
//Logic: return Topological sort but if any cycle detected return empty []; 
var findOrder = function (numCourses, prerequisites) {
  let map = new Map();
  for (let i = 0; i < prerequisites.length; i++) {
    let node1 = prerequisites[i][0];
    let node2 = prerequisites[i][1];

    if (!map.has(node1)) {
      map.set(node1, []);
    }
    map.get(node1).push(node2);
  }

  let ans = [];
  let visited = Array(numCourses).fill(false);
  let track = Array(numCourses).fill(false);

  var dfs = function (node) {
    visited[node] = true;
    track[node] = true;
    let list = map.get(node) || [];

    for (let i = 0; i < list.length; i++) {
      if (!visited[list[i]]) {
        dfs(list[i]);
      }

      if (visited[list[i]] && track[list[i]]) {
        return true;
      }
    }
    ans.push(node);
    track[node] = false;
    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      if (dfs(i)) {
        return [];
      }
    }
  }

  return ans;
};
