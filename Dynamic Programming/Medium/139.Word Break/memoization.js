//This is similar to Matrix Chain Multiplication
//O(n*m)
var wordBreak = function (s, wordDict) {
  let visited = Array(s.length + 1);

  var solve = function (i) {
    if (i >= s.length) {
      return 1;
    }

    if (visited[i] !== undefined) {
      return visited[i];
    }

    let temp = "";
    for (let k = i; k < s.length; k++) {    //n
      temp += s[k];
      if (wordDict.includes(temp)) {      //m
        if (solve(k + 1)) {
          visited[i] = true;
          return visited[i];
        }
      }
    }
    visited[i] = false;
    return visited[i];
  };

  return solve(0);
};
