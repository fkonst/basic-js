const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!")
  }

  const delNext = '--discard-next';
  const delPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  const commands = [delNext, delPrev, doubleNext, doublePrev]
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === delNext && i + 1 < arr.length) {
      i += 1;
    } else if (arr[i] === delPrev && result.length > 0 && arr[i - 2] !== delNext) {
      result.pop();
    } else if (arr[i] === doubleNext && i + 1 < arr.length) {
      result.push(arr[i + 1])
    } else if (arr[i] === doublePrev && result.length > 0 && arr[i - 2] !== delNext) {
      result.push(result[result.length - 1]);
    } else if (!commands.includes(arr[i])){
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = {
  transform
};
