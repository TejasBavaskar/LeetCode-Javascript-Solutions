//O(nlogn + n*(m^2))    => m = max length of word
var longestStrChain = function (words) {
  let map = new Map();
  words.sort((a, b) => a.length - b.length);    //nlogn
  let ans = 0;

  for (let word of words) {   //n
    let maxGen = 0;
    for (let i = word.length - 1; i >= 0; i--) {      //max(m)
      let tempWord = word.slice(0, i) + word.slice(i + 1);
      if (map.has(tempWord)) {
        maxGen = Math.max(map.get(tempWord), maxGen);
      }
    }
    map.set(word, maxGen + 1);
    ans = Math.max(ans, maxGen + 1);
  }

  return ans;
};
