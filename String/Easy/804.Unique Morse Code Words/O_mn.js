//O(m*n)
var uniqueMorseRepresentations = function(words) {
  let dict = {
      'a': '.-',
      'b': '-...',
      'c': '-.-.',
      'd': '-..',
      'e': '.',
      'f': '..-.',
      'g': '--.',
      'h': '....',
      'i': '..',
      'j': '.---',
      'k': '-.-',
      'l': '.-..',
      'm': '--',
      'n': '-.',
      'o': '---',
      'p': '.--.',
      'q': '--.-',
      'r': '.-.',
      's': '...',
      't': '-',
      'u': '..-',
      'v': '...-',
      'w': '.--',
      'x': '-..-',
      'y': '-.--',
      'z': '--..'
  };
  
  let countDict = {};
  
  words.forEach(word => { //n words
      let temp = '';
      let i = 0;
      while(i < word.length) {  // m = word length
          temp += dict[word[i]];
          i++;
      }
      
      if(!(temp in countDict)) {
          countDict[temp] = 1;
      }
  })
  
  return Object.keys(countDict).length;
};