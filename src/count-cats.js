const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
   if (Array.isArray(backyard) == true) {
    if (backyard.length == 0) return 0;
    let arr = [];
    let counter = 0;
    for (let i = 0; i < backyard.length; i++) {
      arr = arr.concat(backyard[i]);
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '^^') counter++;
    }
    return counter;
  } else return 0;
};
