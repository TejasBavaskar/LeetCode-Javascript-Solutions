//O(mn)
var flipAndInvertImage = function(image) {
  for(let i=0; i<image.length; i++) {
      image[i].reverse();
      image[i] = image[i].map(item => {
          return item === 0 ? 1 : 0;
      })
  }
  
  return image;
};