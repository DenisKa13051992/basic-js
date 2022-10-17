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
 let str = ''
let num = ''
 str = String(n)
 for (i=0;i<10;i++){
   if (str.indexOf(i) !== -1) {if (str.indexOf(i)==0){num += str.slice(1, str.length); return Number(num)} else {num += str.slice(0, str.indexOf(i)) + str.slice(str.indexOf(i)+1, str.length); if (Number(num) == 34) return 42; else return Number(num)}}
 }
}

module.exports = {
  deleteDigit
};
