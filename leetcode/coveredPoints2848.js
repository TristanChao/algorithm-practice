/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
  const pnts = [];
  nums.forEach((pointSet) => {
    for (let i = pointSet[0]; i <= pointSet[1]; i++) {
      if (!pnts.includes(i)) {
        pnts.push(i);
      }
    }
  })
  return pnts.length;
};