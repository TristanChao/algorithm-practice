/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
  let maxPeople = 0;
  let currPeople = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === 'E') {
          currPeople++;
          if (currPeople > maxPeople) {
              maxPeople = currPeople;
          }
      } else {
          currPeople--;
      }
  }
  return maxPeople;
};