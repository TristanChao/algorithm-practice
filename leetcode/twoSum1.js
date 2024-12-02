/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const possible = [];
  for (let num of nums) {
      if (possible.includes(target - num)) {
          if (num !== target - num) {
              return [nums.indexOf(num), nums.indexOf(target - num)];
          } else {
              return [nums.indexOf(num), nums.indexOf(target - num, nums.indexOf(num)+1)];
          }
      } else {
          possible.push(num);
      }
  }
};