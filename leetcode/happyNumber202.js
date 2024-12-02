/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const pastSums = [];
  let currentNum = n;
  while (currentNum !== 1) {
      const digits = currentNum.toString().split('');
      let digitSum = 0;
      digits.forEach((digit) => {
          digitSum += parseInt(digit) * parseInt(digit);
      })
      if (pastSums.includes(digitSum)) {
          return false;
      } else {
          pastSums.push(digitSum);
          currentNum = digitSum;
      }
  }
  return true;
};

console.log('isHappy(19):', isHappy(19));