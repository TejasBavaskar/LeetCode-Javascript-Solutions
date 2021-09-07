//O(3^n)    ==> n = days.length
var mincostTickets = function (days, costs) {
  let pass = [1, 7, 30];

  var solve = function (i) {
    if (i >= days.length) {
      return 0;
    }

    let tempAns = Number.MAX_SAFE_INTEGER;
    let j = i;
    for (let k = 0; k < 3; k++) {
      while (j < days.length && days[j] < days[i] + pass[k]) {
        j++;
      }
      tempAns = Math.min(tempAns, costs[k] + solve(j));
    }

    return tempAns;
  };

  return solve(0);
};

