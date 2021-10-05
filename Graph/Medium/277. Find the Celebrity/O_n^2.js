//O(n^2)
var solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function (n) {
    let outDegree = Array(n).fill(0);
    let inDegree = Array(n).fill(0);

    for (let i = 0; i < n; i++) {       //n
      for (let j = 0; j < n; j++) {     //n
        if (i === j) {
          continue;
        }

        if (knows(i, j)) {
          outDegree[i]++;
          inDegree[j]++;
        }
      }
    }

    for (let i = 0; i < n; i++) {
      if (outDegree[i] === 0 && inDegree[i] === n - 1) {
        return i;
      }
    }
    return -1;
  };
};
