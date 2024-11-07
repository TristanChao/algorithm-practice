/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const zineLets = magazine.split('');
  const ransLets = ransomNote.split('');
  for (let letter of ransLets) {
      if (zineLets.includes(letter)) {
          zineLets.splice(zineLets.indexOf(letter), 1);
      } else {
          return false;
      }
  }
  return true;
};