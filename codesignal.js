// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.
// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
// matrix = [[0, 1, 1, 2],
//           [0, 5, 0, 0],
//           [2, 0, 3, 3]]
// the output should be
// matrixElementsSum(matrix) = 9.
// There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.

const matrixElementsSum = (matrix) => {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // if the room is on the top floor, there will not be a room above it, so add it
      if (i === 0) {
        count += matrix[i][j];
      } else {
        // if it is not on the top floor, check the floor above it to see if it is haunted. If the floor above is not haunted, add it. If the floor above is haunted, set the current room to haunted as well so that the next floor down can check above it.
        if (matrix[i - 1] && matrix[i - 1][j] !== 0) {
          count += matrix[i][j];
        } else {
          matrix[i][j] = 0;
        }
      }
    }
  }
  return count;
};

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.
// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

const almostIncreasingSequence = (sequence) => {
  let count = 0;
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      // if it is the last element that is out of place, or the out of place one is in between, cut it out
      if (!sequence[i + 2] || sequence[i + 2] > sequence[i]) {
        sequence.splice(i + 1, 1);
        count++;
        i--;
      }
      // cut out the current one
      else {
        sequence.splice(i, 1);
        count++;
        i--;
      }
      if (count >= 2) {
        return false;
      } else {
        i--;
      }
    }
  }
  return true;
};

// Given an array of strings, return another array containing all of its longest strings.
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

const allLongestStrings = (inputArray) => {
  let newArr = [];
  let maxLen = inputArray[0].length;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > maxLen) {
      maxLen = inputArray[i].length;
    }
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === maxLen) {
      newArr.push(inputArray[i]);
    }
  }
  return newArr;
};

// Given two strings, find the number of common characters between them.
// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.
// Strings have 3 common characters - 2 "a"s and 1 "c".

const commonCharacterCount = (s1, s2) => {
  let count = 0;
  let a1 = s1.split("");
  let a2 = s2.split("");
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a1[i] === a2[j]) {
        count++;
        a1.splice(i, 1);
        a2.splice(j, 1);
        i--;
        j--;
      }
    }
  }
  return count;
};

// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.
// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

const isLucky = (n) => {
  let x = n.toString();
  let one = 0;
  let two = 0;
  for (let i = 0; i < x.length; i++) {
    if (i < x.length / 2) {
      one += Number(x[i]);
    } else {
      two += Number(x[i]);
    }
  }
  return one === two;
};

//Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

const sortByHeight = (a) => {
  var s = a.filter((h) => h > 0).sort((a, b) => a - b);
  console.log(s, a);
  return a.map((p) => {
    if (p !== -1) {
      return s.shift();
    }

    return -1;
  });
};

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
// input
// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]
// output
// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]

// What helped me finally understand this problem was that what we need to do is change the rows to columns and columns to rows. For example, the first row becomes the last column and the last row becomes the first column. So what we do first is swap the rows and columns so columns are rows and rows are columns. Then all we have to do is flip the first column and the last column
function rotateImage(a) {
  let n = a.length;
  // first we turn the rows into columns and the columns into rows
  for (let row = 0; row < n; row++) {
    for (let col = row; col < a[row].length; col++) {
      let temp = a[row][col];
      a[row][col] = a[col][row];
      a[col][row] = temp;
    }
  }
  // then all we have to do is swap the first column with the last column
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < Math.floor(n / 2); col++) {
      let temp = a[row][n - 1 - col];
      a[row][n - 1 - col] = a[row][col];
      a[row][col] = temp;
    }
  }
  return a;
}
