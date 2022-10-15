const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(team) {
  let arr = []
  if (!Array.isArray(team)){return false}
  if (team.length === 0){return false}
  for (i=0;i<team.length;i++){if (typeof team[i] === "string") {arr.push((team[i].split(' ').join('')))}}
  let arrr = []
  for (i=0;i<arr.length;i++){

    arrr[i] = arr[i].toUpperCase();

  }
  let arrrr = arrr.sort()
  
    teamName = "";
    for (i=0;i<arrrr.length;i++){

      teamName += arrrr[i][0].toUpperCase();
  
    }
    return teamName
    console.log(teamName)
  }

module.exports = {
  createDreamTeam
};
