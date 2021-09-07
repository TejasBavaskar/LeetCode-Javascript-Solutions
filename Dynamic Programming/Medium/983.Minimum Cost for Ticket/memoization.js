//O(n)    => n =days.length
var mincostTickets = function (days, costs) {
  let map = new Map();
  let pass = [1, 7, 30];

  var solve = function (i) {
    if (i >= days.length) {
      return 0;
    }

    if (map.has(i)) {
      return map.get(i);
    }

    let tempAns = Number.MAX_SAFE_INTEGER;
    let j = i;
    for (let k = 0; k < 3; k++) {
      while (j < days.length && days[j] < days[i] + pass[k]) {
        j++;
      }
      tempAns = Math.min(tempAns, costs[k] + solve(j));
    }

    map.set(i, tempAns);
    return tempAns;
  };

  return solve(0);
};
