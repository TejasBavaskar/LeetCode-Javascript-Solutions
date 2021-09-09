//O(k)    => k = number of valid permutations
var countArrangement = function (n) {
  let visited = Array(n + 1).fill(false);
  let count = 0;

  var solve = function (pos) {
    if (pos > n) {
      count++;
    }

    for (let i = 1; i <= n; i++) {
      if (!visited[i] && (pos % i === 0 || i % pos === 0)) {
        visited[i] = true;
        solve(pos + 1);
        visited[i] = false;
      }
    }
  };

  solve(1);
  return count;
};
