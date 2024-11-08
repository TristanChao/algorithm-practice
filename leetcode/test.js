// for a given string
// 1. create an indexing data structure for 1st occurrence of any word
// 2. provide a function to search for a given word within the data structure

const wordIndexes = new Map();

function indexWords(str) {
  const wordArr = str.toLowerCase().split(' ');
  let strIndex = 0;
  wordArr.forEach((word) => {
    if (wordIndexes.get(word) === undefined) {
      wordIndexes.set(word, strIndex);
    }
    strIndex += word.length + 1;
  })
}


function searchWord(word) {
  const lowerWord = word.toLowerCase();
  const searchIndex = wordIndexes.get(lowerWord);
  if (searchIndex !== undefined) {
    return searchIndex;
  } else {
    return -1;
  }
}

indexWords('The quick brown fox jumps over the lazy dog.');
console.log({wordIndexes});
console.log(searchWord('the'));