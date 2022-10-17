const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
let num = 1;
let s = ''
  for (i=0;i<str.length;i++) {if (str[i]==str[i+1]) {num += 1; if (str[i+1]!==str[i+2]) {s += num + str[i]; num = 1}}
else if (str[i]!==str[i-1]){s += str[i]} else {}}
return s
}



module.exports = {
  encodeLine
};
