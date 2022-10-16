const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() { return this.arr.length
    
  },
  addLink(value) {
    // if (!value){this.arr.push(`()`)
    // return this;} else {
    this.arr.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || typeof position !== 'number' || position>this.arr.length || position<=0) {this.del(); throw new Error("You can't remove incorrect link!")} else {
    this.arr.splice(position-1, 1);
    return this;}
  },
  reverseChain() {
    this.arr.reverse();
    return this
  },
  finishChain() {
    let str = ""
    str = this.arr.join('~~')
    this.del()
    return str
  },
  del() {
    this.arr.length = 0;
  }
};

module.exports = {
  chainMaker
};
