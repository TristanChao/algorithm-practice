/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
  const strArr = s.split('');
  for (let i = 0; i <= Math.floor((strArr.length - 1) / 2); i++) {
      const oppIndex = strArr.length - 1 - i;
      if (strArr[i] !== strArr[oppIndex]) {
          if (s.charCodeAt(i) < s.charCodeAt(oppIndex)) {
              strArr[oppIndex] = strArr[i];
          } else {
              strArr[i] = strArr[oppIndex];
          }
      }
  }
  return strArr.join('');
};