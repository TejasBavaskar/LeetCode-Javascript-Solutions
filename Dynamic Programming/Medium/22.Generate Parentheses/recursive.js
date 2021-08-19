//O(2^n)
//What is O(2^n)? => https://stackoverflow.com/questions/34915869/example-of-big-o-of-2n
var generateParenthesis = function (n) {
  let result = [];

  var solve = function (str, open, close) {
    if (open === 0 && close === 0) {
      result.push(str);
      return;
    }

    if (open > 0) {
      solve(str + "(", open - 1, close);
    }

    if (open < close) {
      solve(str + ")", open, close - 1);
    }
  };

  solve("", n, n);
  return result;
};
