//O(n)
var reorderSpaces = function(text) {
  let totalSpace = text.split('').reduce((totalSpace, item) => {
      if(item === ' ') {
          totalSpace += 1;
      }
      return totalSpace;
  }, 0);
  
  let wordsArr = text.split(/\s+/g).filter(item => item !== '');
  let wordCount = wordsArr.length;
  
  let spaceToAdd = Math.floor(totalSpace / (wordCount - 1));
  
  let result = [];
  
  wordsArr.forEach((word, index) => {
      result.push(word);

      if(index < wordsArr.length-1) {
          result.push(' '.repeat(spaceToAdd));
          totalSpace -= spaceToAdd;
      }
      
  })

  if(totalSpace) {
      result.push(' '.repeat(totalSpace));
  }
  
  return result.join('');
};