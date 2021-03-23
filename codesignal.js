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

// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
// Example
// For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.
// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.
// For a = [2, 2], the output should be firstDuplicate(a) = 2;
// For a = [2, 4, 3, 5, 1], the output should be firstDuplicate(a) = -1.

function firstDuplicate(a) {
  let dups = {};
  for (let i = 0; i < a.length; i++) {
    if (dups[a[i]]) {
      return a[i];
    } else {
      dups[a[i]] = 1;
    }
  }
  return -1;
}

// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
// Example
// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.
// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.
// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.
// There are no characters in this string that do not repeat.

function firstNotRepeatingCharacter(s) {
  let noRepeat = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (noRepeat[char]) {
      noRepeat[char].count++;
    } else {
      noRepeat[char] = { idx: i, count: 1 };
    }
  }
  let min = null;
  for (let key in noRepeat) {
    if (noRepeat[key].count === 1) {
      if (min === null || noRepeat[key].idx < min) {
        min = noRepeat[key].idx;
      }
    }
  }
  return min === null ? "_" : s[min];
}

// Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.
// Example
// For inputString = "(bar)", the output should be reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be reverseInParentheses(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
const reverseInParentheses = (str) => {
  while (str.includes("(")) {
    let index1 = str.lastIndexOf("(");
    let index2 = index1;
    while (str[index2] != ")") {
      index2++;
    }
    let middle = str
      .substring(index1 + 1, index2)
      .split("")
      .reverse()
      .join("");
    let front = str.substring(0, index1);
    let end = str.substring(index2 + 1, str.length);
    str = front + middle + end;
  }
  return str;
};

// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
// Given two arrays a and b, check whether they are similar.
// Example
// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.
// The arrays are equal, no need to swap any elements.
// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.

const areSimilar = (a, b) => {
  let count = 0;
  let index1 = null;
  let index2 = null;
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      count++;
      index1 == null ? (index1 = i) : (index2 = i);
    }
  }
  if (count > 2 || a[index1] != b[index2] || a[index2] != b[index1])
    return false;
  return true;
};

//You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
// Example
// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.

const arrayChange = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      count += Math.abs(arr[i] - arr[i + 1] + 1);
      arr[i + 1] = arr[i] + 1;
    }
  }
  return count;
};

// Call two arms equally strong if the heaviest weights they each are able to lift are equal.
// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
// Example
// For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;

const areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
  return (
    Math.max(yourLeft, yourRight) === Math.max(friendsRight, friendsLeft) &&
    Math.min(friendsLeft, friendsRight) === Math.min(yourRight, yourLeft)
  );
};

// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
// Example
// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

const arrayMaximalAdjacentDifference = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let diff = Math.abs(arr[i] - arr[i + 1]);
    if (diff > max) {
      max = diff;
    }
  }
  return max;
};

// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// matrix = [[true, false, false],
// [false, true, false],
// [false, false, false]]

// minesweeper(matrix) = [[1, 2, 1],
// [2, 1, 1],
// [1, 1, 1]]

function minesweeper(matrix) {
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let count;
      // set count to -1 because it'll hit itself once and we don't want to include itself
      if (matrix[i][j] === true) {
        count = -1;
      } else {
        count = 0;
      }
      for (let y = i - 1; y < i + 2; y++) {
        for (let z = j - 1; z < j + 2; z++) {
          // if row or col are outside of the array, continue
          if (
            y < 0 ||
            y > matrix.length - 1 ||
            z < 0 ||
            z > matrix[0].length - 1
          ) {
            continue;
          }
          if (matrix[y][z] === true) {
            count++;
          }
        }
      }
      row.push(count);
    }
    newArr.push(row);
  }
  return newArr;
}

// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.
// Check if the given string is a correct variable name.
// Example
// For name = "var_1__Int", the output should be
// variableName(name) = true;
// For name = "qq-q", the output should be
// variableName(name) = false;
// For name = "2w2", the output should be
// variableName(name) = false.

function variableName(name) {
  const regex = /[A-Za-z0-9_]/g;
  if (name[0].match(/[0-9]/g)) return false;
  for (i = 0; i < name.length; i++) {
    console.log(name[i].match(regex), name[i]);
    if (name[i].match(regex) === null) return false;
  }
  return true;
}

// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).
// Example
// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

function alphabeticShift(str) {
  str = str.split("");
  for (let s in str) {
    str[s] =
      str[s] === "z" ? "a" : String.fromCharCode(str[s].charCodeAt() + 1);
  }
  return str.join("");
}

// Given two cells on the standard chess board, determine whether they have the same color or not.
// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.

function chessBoardCellColor(cell1, cell2) {
  let celly1;
  let celly2;
  if (
    // both the ascii of the letter and the number are even or both are odd
    (cell1[0].charCodeAt() % 2 === 0 && cell1[1] % 2 === 0) ||
    (cell1[0].charCodeAt() % 2 !== 0 && cell1[1] % 2 !== 0)
  ) {
    celly1 = "bothEvenOrBothOdd";
  }
  if (
    // both the ascii of the letter and the number are even or both are odd
    (cell2[0].charCodeAt() % 2 === 0 && cell2[1] % 2 === 0) ||
    (cell2[0].charCodeAt() % 2 !== 0 && cell2[1] % 2 !== 0)
  ) {
    celly2 = "bothEvenOrBothOdd";
  }
  return celly1 === celly2;
}

// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).
// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.
// Example
// For n = 10 and firstNumber = 2, the output should be
// circleOfNumbers(n, firstNumber) = 7.

function circleOfNumbers(n, firstNumber) {
  let x = n / 2 + firstNumber;
  // if we surpass the number of elements (n), we return the remainder of x / n
  return x >= n ? x % n : x;
}

// You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.
// Example
// For deposit = 100, rate = 20, and threshold = 170, the output should be
// depositProfit(deposit, rate, threshold) = 3.
// Each year the amount of money in your account increases by 20%. So throughout the years, your balance would be:
// year 0: 100;
// year 1: 120;
// year 2: 144;
// year 3: 172.8.
// Thus, it will take 3 years for your balance to pass the threshold, so the answer is 3.

function depositProfit(deposit, rate, threshold) {
  let years = 0;
  while (deposit < threshold) {
    years++;
    deposit = deposit * (rate / 100) + deposit;
  }
  return years;
}

// Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. In other words, find the element x in a, which minimizes the following sum:
// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// (where abs denotes the absolute value)
// If there are several possible answers, output the smallest one.
// Example
// For a = [2, 4, 7], the output should be absoluteValuesSumMinimization(a) = 4.
// for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
// for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
// for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
// The lowest possible value is when x = 4, so the answer is 4.

function absoluteValuesSumMinimization(a) {
  let min = 1000000000;
  let minIdx = 0;
  for (let i = 0; i < a.length; i++) {
    let countEach = 0;
    for (let j = 0; j < a.length; j++) {
      countEach += Math.abs(a[j] - a[i]);
    }
    if (countEach < min) {
      min = countEach;
      minIdx = i;
    }
  }
  return a[minIdx];
}

// Given array of integers, remove each kth element from it.
// Example
// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
// extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

function extractEachKth(inputArray, k) {
  k = k - 1;
  if (k === 0) return [];
  for (let i = k; i < inputArray.length; i += k) {
    inputArray.splice(i, 1);
  }
  return inputArray;
}

const extractEachKth1 = (arr, k) => {
  return arr.filter((_, i) => (i + 1) % k);
};
console.log(extractEachKth1([1, 2, 3, 4, 5, 6], 3));

//Find the leftmost digit that occurs in a given string.
// Example
// For inputString = "var_1__Int", the output should be
// firstDigit(inputString) = '1';

const firstDigit = (inputString) => {
  return inputString.match(/[0-9]/g)[0];
};
