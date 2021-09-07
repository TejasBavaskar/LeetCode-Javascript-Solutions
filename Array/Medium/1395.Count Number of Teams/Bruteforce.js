//O(n^3)
var numTeams = function (rating) {
  let i = 0;
  let count = 0;

  while (i <= rating.length - 3) {
    let j = i + 1;
    while (j <= rating.length - 2) {
      let k = j + 1;
      while (k < rating.length) {
        if (
          (rating[i] < rating[j] && rating[j] < rating[k]) ||
          (rating[i] > rating[j] && rating[j] > rating[k])
        ) {
          count++;
        }
        k++;
      }
      j++;
    }
    i++;
  }

  return count;
};
