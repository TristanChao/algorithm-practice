/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  coordinates.sort((a, b) => a[1] - b[1]);
  coordinates.sort((a, b) => a[0] - b[0]);
  const xcoords = coordinates.map((coord) => coord[0]);
  const ycoords = coordinates.map((coord) => coord[1]);
  if (Math.max(...xcoords) === Math.min(...xcoords) || Math.max(...ycoords) === Math.min(...ycoords)) {
      return true;
  }
  const slope = (coordinates[1][0] - coordinates[0][0]) / (coordinates[1][1] - coordinates[0][1])
  for (let i = 2; i < coordinates.length; i++) {
      const frontCoord = coordinates[i];
      const backCoord = coordinates[i - 1];
      if ((frontCoord[0] - backCoord[0]) / (frontCoord[1] - backCoord[1]) !== slope) {
          return false;
      }
  }
  return true;
};