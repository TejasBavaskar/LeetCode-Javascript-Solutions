//O(n)
var minCost = function (s, cost) {
  let min = 0;
  let i = 0;
  let j = 1;

  while (i < s.length) {
    if (s[i] === s[j]) {
      if (cost[i] < cost[j]) {
        min += cost[i];
        i = j;
        j++;
      } else {
        min += cost[j];
        j++;
      }
    } else {
      i = j;
      j++;
    }
  }

  return min;
};
