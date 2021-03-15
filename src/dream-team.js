const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam (members) {
  if (!Array.isArray(members)) {
    return false;
  }
      let arr = [];
      for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string') {
          let trims = members[i].trim();
          arr.push(trims[0].toUpperCase());
      }
      }
      return arr.sort().join('');
};

