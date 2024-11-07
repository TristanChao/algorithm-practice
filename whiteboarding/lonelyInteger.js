// given array of ints
// all elements occur twice except one
// return the unique element


// function lonelyInt(nums) {
//   const intCount = new Map;
//   for (let num of nums) {
//     if (intCount.has(num.toString())) {
//       intCount.set(num.toString(), intCount.get(num) + 1);
//     } else {
//       intCount.set(num, 1);
//     }
//   }
//   for (let num of nums) {
//     if (intCount.get(num) === 1) {
//       return num;
//     }
//   }
// }

// console.log(lonelyInt([1, 1, 4, 4, 7, 7, 9]));

/*
function uniqueElem(intArr) {
  const record = {};
  for (let i = 0; i < intArr.length; i++) {
    if (!record.hasOwnProperty(intArr[i])) {
      record[intArr[i]] = 1;
    } else {
      record[intArr[i]]++;
    }
  }
  for (let key in record) {
    if (record[key] === 1) {
      console.log('found');
      return key;
    }
  }
  return 0;
}

console.log(uniqueElem([1, 1, 4, 4, 5, 7, 7, 9, 9]));
*/

function uniElem(nums) {
  let set = [];
  for (let num of nums) {
    if (set.includes(num)) {
      set.splice(set.indexOf(num), 1);
    } else {
      set.push(num);
    }
  }
  return set[0];
}

console.log(uniElem([1, 1, 4, 4, 5, 7, 7, 9, 9]));