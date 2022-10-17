const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

let alf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class VigenereCipheringMachine {
  constructor(isDirect = true){
    this.reverseT = !isDirect;
  }
  
   encrypt(worden, key) {
   if (worden == undefined || key == undefined){throw new Error('Incorrect arguments!')}
    let key1 = '';
    let num = 0;
    let str = '';
    key1 = key.split(' ').join('')
    for (let i=0,j=0;i<worden.length;i++,j++){
     if (alf.indexOf(worden[i].toUpperCase()) == -1) {str += worden[i]; j--} else {
    if (j<key1.length) {num = alf.indexOf(worden[i].toUpperCase()) + alf.indexOf(key1[j].toUpperCase()); str += alf[num%26]}
    else {j = -1; i--; }}
    } 
    if (this.reverseT == true) {return str.split('').reverse().join('')}
    else {return str}
    
  }
  decrypt(worddec, key) {
    if (worddec == undefined || key == undefined){throw new Error('Incorrect arguments!')}
    let key1 = '';
    let num = 0;
    let str = '';
    key1 = key.split(' ').join('')
    for (let i=0,j=0;i<worddec.length;i++,j++){
     if (alf.indexOf(worddec[i].toUpperCase()) == -1) {str += worddec[i]; j--} else {
    if (j<key1.length) {num = alf.indexOf(worddec[i].toUpperCase()) - alf.indexOf(key1[j].toUpperCase()); if (num<0){num = 26+num}; str += alf[num%26]}
    else {j = -1; i--; }}
    } 
    if (this.reverseT == true) {return str.split('').reverse().join('')}
    else {return str}    
} 
}
module.exports = {
  VigenereCipheringMachine
};
