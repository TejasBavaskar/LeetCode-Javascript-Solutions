//O(V^2)
var maximalNetworkRank = function (n, roads) {
  if (roads.length === 0) {
    return 0;
  }

  let graphMap = new Map();
  let degree = Array(n).fill(0);

  for (let i = 0; i < roads.length; i++) {
    let start = roads[i][0];
    let end = roads[i][1];

    degree[start] = degree[start] + 1;
    degree[end] = degree[end] + 1;

    if (!graphMap.has(start)) {
      graphMap.set(start, []);
    }
    graphMap.get(start).push(end);

    if (!graphMap.has(end)) {
      graphMap.set(end, []);
    }
    graphMap.get(end).push(start);
  }

  let ans = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {               //v
    for (let j = i + 1; j < n; j++) {         //v
      let tempAns = degree[i] + degree[j];
      if (graphMap.get(i)?.includes(j)) {
        tempAns--;
      }
      ans = Math.max(ans, tempAns);
    }
  }

  return ans;
};
