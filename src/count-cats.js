const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  if (Array.isArray(backyard) == true) {
    let arr = [];
    let counter = 0;
    for (let i = 0; i < backyard.length; i++) {
      arr = arr.concat(backyard[i]);
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '^^') counter++;
    }
    return counter;
  }
};
