/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
  let topDivScore = [Math.min(...divisors), 0]  // [div, divScore]
  for (let div of divisors) {
      let divScore = 0;
      for (let num of nums) {
          if (num % div === 0) {
              divScore++;
          }
      }
      if (divScore > topDivScore[1]) {
          topDivScore = [div, divScore]
      } else if (divScore === topDivScore[1] && div < topDivScore[0]) {
          topDivScore = [div, divScore]
      }
  }
  return topDivScore[0];
};