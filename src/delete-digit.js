const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strN = String(n);
  
  let result = 0;
  for (let i = 0; i < strN.length; i += 1) {
    let current;
    if (i > 0 || i < strN.length - 1) {
      current = +(strN.slice(0 , i) + strN.slice(i + 1));
    } else if (i === 0) {
      current = +strN.slice(i + 1);
    } else if (i === strN.length - 1) {
      current = +strN.slice(0, strN.length - 1)
    }
    if (current > result) {
      result = current;
    }
  }
  return result;
}

module.exports = {
  deleteDigit
};
