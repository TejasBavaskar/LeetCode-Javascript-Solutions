//O(m + m*n)
//m = no. of equations    n = no. of queries
var calcEquation = function (equations, values, queries) {
  let map = new Map();
  for (let i = 0; i < equations.length; i++) {      //O(m)
    let start = equations[i][0];
    let end = equations[i][1];

    if (!map.has(start)) {
      map.set(start, []);
    }

    map.get(start).push([end, values[i]]);

    if (!map.has(end)) {
      map.set(end, []);
    }
    map.get(end).push([start, 1 / values[i]]);
  }

  let visited = [];
  var dfs = function (node_s, node_e) {
    if (visited.includes(node_s)) {
      return -1;
    }
    if (node_s === node_e) {
      return 1;
    }
    visited.push(node_s);
    let nodeList = map.get(node_s) || [];
    for (let i = 0; i < nodeList.length; i++) {
      let [x, val] = nodeList[i];
      let tempAns = val * dfs(x, node_e);
      if (tempAns < 0) {
        continue;
      }
      return tempAns;
    }
    return -1;
  };

  let ans = [];
  for (let i = 0; i < queries.length; i++) {       //O(n)
    let start = queries[i][0];
    let end = queries[i][1];

    let tempAns = -1.0;
    if (map.has(start) && map.has(end)) {
      visited = [];
      tempAns = dfs(start, end);                   //O(m)
    }

    ans.push(tempAns);
  }

  return ans;
};
