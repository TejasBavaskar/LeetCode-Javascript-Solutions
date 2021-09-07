//O(n^2)
var numTeams = function (arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let leftSmall = 0;
    let leftBig = 0;
    let rightSmall = 0;
    let rightBig = 0;

    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        leftSmall++;
      } else {
        leftBig++;
      }
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        rightSmall++;
      } else {
        rightBig++;
      }
    }

    count += leftSmall * rightBig + leftBig * rightSmall;
  }
  return count;
};
