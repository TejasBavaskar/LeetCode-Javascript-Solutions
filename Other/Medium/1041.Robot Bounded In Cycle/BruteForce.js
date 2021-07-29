var isRobotBounded = function (instructions) {
  let x = 0;
  let y = 0;
  let currentDir = "N";

  var getDirection = function (move, currentDir) {
    let returnVal = "";
    switch(currentDir) {
      case 'N' :
        returnVal = (move === "L") ? "E" : "W";
        break;
      case 'S' :
        returnVal = (move === "L") ? "W" : "E";
        break;
      case 'E' :
        returnVal = (move === "L") ? "S" : "N";
        break;
      case 'W' :
        returnVal = (move === "L") ? "N" : "S";
        break;
    }
    return returnVal;
  };

  let arr = instructions.split("");
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "G":
        if (currentDir === "N") {
          y += 1;
        } else if (currentDir === "W") {
          x += 1;
        } else if (currentDir === "S") {
          y += -1;
        } else if (currentDir === "E") {
          x += -1;
        }
        break;
      case "L":
      case "R":
        currentDir = getDirection(arr[i], currentDir);
        break;
    }
  }

  if ((x === 0 && y === 0) || currentDir !== "N") {
    return true;
  }

  return false;
};
