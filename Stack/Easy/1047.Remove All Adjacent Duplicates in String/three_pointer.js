//O(n)
var removeDuplicates = function (s) {
  let current = 0;
  let prev = -1;
  let lastLetter = -1;
  s = s.split("");

  while (current < s.length) {
    if (prev >= 0) {
      if (s[prev] === s[current]) {
        s[prev] = "";
        s[current] = "";
        prev = lastLetter;
        lastLetter--;
        current++;
      } else {
        lastLetter = prev;
        prev = current;
        current++;
      }
    } else {
      prev = current;
      current++;
    }
  }

  s = s.filter((item) => {
    if (item !== "") {
      return item;
    }
    return "";
  });
  return s.join("");
};
