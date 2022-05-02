const { NotImplementedError } = require("../extensions/index.js");

function countCats(matrix) {
  let count = 0;
  matrix.forEach((elem) => {
    elem.forEach((item) => {
      if (item === "^^") {
        count += 1;
      }
    });
  });
  return count;
}

module.exports = {
  countCats,
};
