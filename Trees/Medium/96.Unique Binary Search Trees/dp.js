var numTrees = function (n) {
  let arr = [];
  arr[0] = 1;
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = 0;
    for (let j = 0; j < i; j++) {
      arr[i] += arr[j] * arr[i - j - 1];
    }
  }

  return arr[n];
};
