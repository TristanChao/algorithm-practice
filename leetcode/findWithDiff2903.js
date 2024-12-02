/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
  for (let i = 0; i < nums.length - indexDifference; i++) {
      for (let y = i + indexDifference; y < nums.length; y++) {
          if (Math.abs(nums[i] - nums[y]) >= valueDifference) {
              return ([i, y])
          }
      }
  }
  return ([-1, -1]);
};