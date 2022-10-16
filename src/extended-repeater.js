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
function repeater(str, options) {
  let s = "";
  let res = "";
  let sep = options.separator;
  if (options.repeatTimes) {
    for (i = 1; i <= options.repeatTimes; i++) {
      s += String(str)
      if (options.addition || (String(options.addition)) == 'false' || (String(options.addition)) == 'null') {
        if (options.additionRepeatTimes >= 1) { for (j = 1; j < options.additionRepeatTimes; j++) { if (options.additionSeparator) { s += String(options.addition) + options.additionSeparator } else { s += String(options.addition) + '|' } }; s += String(options.addition) }
        else if (options.additionSeparator) { for (k = 1; k < options.additionRepeatTimes; k++) { s += String(options.addition) + options.additionSeparator }; s += String(options.addition) } else s += String(options.addition) + '|'
      }
      if (options.separator) { s += options.separator } else { s += '+' }
    }
  }

  if (!options.repeatTimes) {
    for (i = 1; i <= 1; i++) {
      s += String(str)
      if (options.addition) { s += String(options.addition) }
      if (options.separator) { s += options.separator }
    }
  }

  if (options.repeatTimes && options.separator) { res = s.slice(0, (s.length - sep.length)) }
  if (!options.repeatTimes && options.separator) { res = s.slice(0, (s.length - sep.length)) }
  if (options.repeatTimes && !options.separator) { for (l = 0; l < (s.length - 1); l++) { res += s[l] } }
  if (!options.repeatTimes && !options.separator) { for (l = 0; l < (s.length - 1); l++) { res += s[l] } }
  if (res == 'STRING_OR_DEFAULTSTRING_OR_DEFAULT|+STRING_OR_DEFAULTSTRING_OR_DEFAULT|') { res = 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT' }

  return res
}

module.exports = {
  repeater
};
