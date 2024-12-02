/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
  const merge = [...nums1, ...nums2];
  merge.sort((a, b) => a[0] - b[0]);
  for (let i = merge.length - 1; i > 0; i--) {
      if (merge[i][0] === merge[i-1][0]) {
          merge[i-1][1] += merge[i][1];
          merge.splice(i, 1);
      }
  }
  return merge;
};