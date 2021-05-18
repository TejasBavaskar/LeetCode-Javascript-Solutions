var removePalindromeSub = function(s) {
  return s.localeCompare(s.split('').reverse().join('')) === 0 ? 1 : 2;
};