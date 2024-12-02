/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
  const numBin = n.toString(2).split('');
  let setBitCnt = 0;
  for (let bit of numBin) {
      if (bit === '1') setBitCnt++;
  }
  return setBitCnt;
};
