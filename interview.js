// 884. Uncommon Words from Two Sentences
// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Return a list of all uncommon words.
// You may return the list in any order.

const uncommon = (sentenceA, sentenceB) => {
  const words = {};
  let ans = [];
  newSentenceA = sentenceA.split(" ");
  newSentenceB = sentenceB.split(" ");
  for (let i = 0; i < newSentenceA.length; i++) {
    currentWord = newSentenceA[i];
    words[currentWord] ? words[currentWord]++ : (words[currentWord] = 1);
  }
  for (let i = 0; i < newSentenceB.length; i++) {
    currentWord = newSentenceB[i];
    words[currentWord] ? words[currentWord]++ : (words[currentWord] = 1);
  }
  for (let key in words) {
    if (words[key] === 1) {
      ans.push(key);
    }
  }
  return ans;
};

// console.log(
//   uncommon("the fast dog jumped over the moon", "the slow dog flew over a car")
// );

// 961. N-Repeated Element in Size 2N Array
// In an array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

// Example 1:
// Input: [1,3,2,3]
// Output: 3

// Example 2:
// Input: [7,7,1,2,3,4,5,6,7,7,7,7];
// Output: 7

const repeatedNum = (arr) => {
  let nums = {};
  for (let i = 0; i < arr.length; i++) {
    if (nums[arr[i]]) {
      return arr[i];
    } else {
      nums[arr[i]] = 1;
    }
  }
};

// console.log(repeatedNum([5, 3, 5, 2, 4, 1]));

// mutateTheArray
// given an array 'arr', mutate each index of arr so that arr[i] = arr[i-1] + arr[i] + arr[i+1]. If arr[i-1] or arr[i+1] do not exist, you may use 0.
// Example
// Input: arr = [4,6,1,2]
// Output: [10, 11, 9, 3]

const mutate = (arr) => {
  let temp = {};
  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[i];
    let before = temp[i - 1] || 0;
    let after = arr[i + 1] || 0;
    arr[i] = before + arr[i] + after;
  }
  return arr;
};

// console.log(mutate([4, 6, 1, 2, 16]));

// 728. Self Dividing Numbers
// A self-dividing number is a number that is divisible by every digit it contains. For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0. Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example 1:
// Input:
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

const selfDivide = (left, right) => {
  let ans = [];
  for (let i = left; i <= right; i++) {
    let x = i;
    while (x >= 1) {
      let last = x % 10;
      if (i % last !== 0) {
        break;
      }
      x = x / 10;
    }
    ans.push(i);
  }
  return ans;
};

console.log(selfDivide(1, 22));

function sudoku2(grid) {
  for (let row = 0; row < grid.length; row++) {
    let nums = {};
    for (let col = 0; col < grid[row].length; col++) {
      console.log(grid[row][col]);
      let curr = grid[row][col];
      if (curr / curr === 1) {
        if (nums[curr]) {
          return false;
        } else {
          nums[curr] = true;
        }
      }
    }
  }
  return true;
}
let grid = [
  [".", ".", ".", "1", "4", ".", ".", "2", "."],
  [".", ".", "6", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", ".", ".", ".", "."],
  [".", "6", "7", ".", ".", ".", ".", ".", "9"],
  [".", ".", ".", ".", ".", ".", "8", "1", "."],
  [".", "3", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", "7", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", "7", "."],
];
console.log(sudoku2(grid));
