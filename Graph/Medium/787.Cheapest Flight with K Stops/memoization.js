//O(n^2*k)
//Using DFS approach

var findCheapestPrice = function (n, flights, src, dst, k) {
  let map = new Map();
  for (let i = 0; i < flights.length; i++) {
    if (!map.has(flights[i][0])) {
      map.set(flights[i][0], []);
    }
    map.get(flights[i][0]).push([flights[i][1], flights[i][2]]);
  }
  let memo = new Map();

  var dfs = function (node, stops) {
    if (node === dst) {
      return 0;
    }

    if (stops < 0) {
      return Number.MAX_SAFE_INTEGER;
    }

    let key = node + " " + stops;
    if (memo.has(key)) {
      return memo.get(key);
    }

    let ans = Number.MAX_SAFE_INTEGER;
    if (map.has(node)) {
      let nodeList = map.get(node);
      for (let i = 0; i < nodeList.length; i++) {
        ans = Math.min(ans, dfs(nodeList[i][0], stops - 1) + nodeList[i][1]);
      }
    }
    memo.set(key, ans);
    return ans;
  };

  let ans = dfs(src, k);
  ans = ans !== Number.MAX_SAFE_INTEGER ? ans : -1;
  return ans;
};
