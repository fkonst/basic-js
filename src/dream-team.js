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
function createDreamTeam(members) {
  if (!Array.isArray(members) || !members.length) {
    return false;
  }
  let result = [];
  for (let i = 0; i < members.length; i += 1) {
    if ( typeof members[i] === 'string') {
      const current = members[i].trim().toUpperCase().slice(0, 1);
      result.push(current);
    }
  }
  return result.length ? result.sort().join('') : false;
}

module.exports = {
  createDreamTeam
};
