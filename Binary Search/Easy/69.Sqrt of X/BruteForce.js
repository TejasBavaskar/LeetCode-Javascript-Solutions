//O(n) => n/2
var mySqrt = function (x) {
  if (x === 0) {
    return 0;
  }

  if (x === 1 || x === 2 || x === 3) {
    return 1;
  }

  let temp = [1, 4];

  let i = 2;
  for (i = 2; i <= Math.floor(x / 2); i++) {
    let sqr = i * i;

    if (x < sqr) {
      return i - 1;
    } else if (x > sqr) {
      temp[i] = sqr;
    }
  }

  return i - 1;
};
