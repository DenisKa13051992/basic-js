const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * const checked = function (arr) {this.arr.some(check())}
function check(a){for (i=0;i<a.length;i++) if (Array.isArray(a[i])) {return true}}
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
const checked = function (arr) {this.arr.some(check())}
function check(a){for (i=0;i<a.length;i++) if (Array.isArray(a[i])) {return true}}
 const den = (arr) => arr.some(item=>Array.isArray(item));
class DepthCalculator {
  calculateDepth(arr) {let time = 1; if (den(arr)) { 
    return time + this.calculateDepth(arr.flat())} 
    return time
    }
}

module.exports = {
  DepthCalculator
};

// let time = 1;
// const checked = function (arr) {this.arr.some(check())}
// function check(a){for (i=0;i<a.length;i++) if (Array.isArray(a[i])) {return true}}


// module.exports = new DepthCalculator {
//   calculateDepth(arr) {
//     if (checked(arr)) {return time + calculateDepth(arr.flat())}
//   };  
 
