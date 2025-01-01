const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  const string = String(str);
  const addition = options.addition !== undefined ? options.addition : '';
  const addSeparator = options.additionSeparator ? options.additionSeparator : '|';
  const separator = options.separator ? options.separator : '+';
  const aTimes = options.additionRepeatTimes ? options.additionRepeatTimes : null;
  const times = options.repeatTimes ? options.repeatTimes : null;
  let result = '';
  if (!times && !aTimes) {
    return `${string}${addition}`;
  }
  if (!aTimes) {
    for (let i = 0; i < times; i += 1) {
      result += `${string}${String(addition)}${separator}`;
  }
  } else {
    let part = string;
    for (let i = 0; i < aTimes; i += 1) {
      part += `${String(addition)}${addSeparator}`;
    }
    part = part.slice(0 , part.lastIndexOf(addSeparator))
    for (let i = 0; i < times; i += 1) {
      result += `${part}${separator}`
    }
  }

  return result.slice(0, result.lastIndexOf(separator));
}

module.exports = {
  repeater
};
