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

// Given a string, find the number of different characters in it.
// Example
// For s = "cabca", the output should be
// differentSymbolsNaive(s) = 3.
// There are 3 different characters a, b and c.

const differentSymbolsNaive = (s) => {
  let x = {};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (!x[curr]) {
      count++;
      x[curr] = 1;
    }
  }
  return count;
};

// Given array of integers, find the maximal possible sum of some of its k consecutive elements.
// Example
// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// arrayMaxConsecutiveSum(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:
// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8.

const arrayMaxConsecutiveSum = (a, k) => {
  let max = null;
  for (let i = 0; i < a.length - k + 1; i++) {
    let add = 0;
    for (let y = i; y < i + k; y++) {
      add += a[y];
    }
    if (max === null || add > max) max = add;
  }
  return max;
};

// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.
// Given an integer, find its digit degree.
// Example
// For n = 5, the output should be
// digitDegree(n) = 0;
// For n = 100, the output should be
// digitDegree(n) = 1.
// 1 + 0 + 0 = 1.
// For n = 91, the output should be
// digitDegree(n) = 2.
// 9 + 1 = 10 -> 1 + 0 = 1.

const digitDegree = (n) => {
  let count = 0;
  if (n < 10 && n > -1) return 0;
  while (n >= 10 || n < 0) {
    let x = n.toString();
    count++;
    n = 0;
    for (let i = 0; i < x.length; i++) {
      n += Number(x[i]);
    }
  }
  return count;
};

// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.
// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

const bishopAndPawn = (bishop, pawn) => {
  let obj = {
    a: 8,
    b: 7,
    c: 6,
    d: 5,
    e: 4,
    f: 3,
    g: 2,
    h: 1,
  };
  return Math.abs(obj[pawn[0]] - obj[bishop[0]]) ===
    Math.abs(pawn[1] - bishop[1])
    ? true
    : false;
};

// A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter.
// Given a string, check whether it is beautiful.
// Example
// For inputString = "bbbaacdafe", the output should be isBeautifulString(inputString) = true.
// This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), so since there aren't any letters that appear more frequently than the previous letter, this string qualifies as beautiful.
// For inputString = "aabbb", the output should be isBeautifulString(inputString) = false.
// Since there are more bs than as, this string is not beautiful.
// For inputString = "bbc", the output should be isBeautifulString(inputString) = false.
// Although there are more bs than cs, this string is not beautiful because there are no as, so therefore there are more bs than as.

const isBeautifulString = (a) => {
  let bucket = [];
  let x = a.split("").sort().join("");
  for (let i = 0; i < x.length; i++) {
    let f = i;
    let chunk = "";
    if (x[i] === x[f]) {
      while (x[i] === x[f]) {
        chunk += x[f];
        f++;
      }
      i = f - 1;
    } else {
      chunk = a[i];
    }
    bucket.push(chunk);
  }
  return checkBucket(bucket);
};

const checkBucket = (arr) => {
  if (!arr[0].startsWith("a")) return false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      arr[i].length < arr[i + 1].length ||
      arr[i + 1].charCodeAt(0) - arr[i].charCodeAt(0) > 1
    ) {
      return false;
    }
  }
  return true;
};

// An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").
// The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.
// Given a valid email address, find its domain part.
// Example
// For address = "prettyandsimple@example.com", the output should be
// findEmailDomain(address) = "example.com";
// For address = "fully-qualified-domain@codesignal.com", the output should be
// findEmailDomain(address) = "codesignal.com".

const findEmailDomain = (address) => {
  return address.slice(address.lastIndexOf("@") + 1);
};

// Given a string, return the shortest possible palindrome that can be created by adding to it.
const buildPalindrome = (st) => {
  if (isPalindrome(st)) return st;
  for (var i = 0; i < st.length; i++) {
    if (isPalindrome(st.slice(i, st.length))) {
      return st + Array.from(st.slice(0, i)).reverse().join("");
    }
  }
};

const isPalindrome = (string) => {
  return string == Array.from(string).reverse().join("");
};

// Given a string, return its encoding defined as follows:
// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.
// Example
// For s = "aabbbc", the output should be
// lineEncoding(s) = "2a3bc".

function lineEncoding(s) {
  let count = 1;
  let newS = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      if (count === 1) newS = newS + s[i];
      else newS = newS + count + s[i];
      count = 1;
    }
  }
  return newS;
}

// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.
// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.
function chessKnight(cell) {
  let spots = {
    a: 8,
    b: 7,
    c: 6,
    d: 5,
    e: 4,
    f: 3,
    g: 2,
    h: 1,
  };
  let count = 0;
  const valid = (x, y) => {
    console.log(x, y);
    if (x < 9 && x > 0 && y < 9 && y > 0) {
      count++;
    }
  };
  valid(spots[cell[0]] - 2, Number(cell[1]) - 1);
  valid(spots[cell[0]] - 1, Number(cell[1]) - 2);
  valid(spots[cell[0]] - 1, Number(cell[1]) + 2);
  valid(spots[cell[0]] - 2, Number(cell[1]) + 1);
  valid(spots[cell[0]] + 1, Number(cell[1]) + 2);
  valid(spots[cell[0]] + 1, Number(cell[1]) - 2);
  valid(spots[cell[0]] + 2, Number(cell[1]) - 1);
  valid(spots[cell[0]] + 2, Number(cell[1]) + 1);
  return count;
}

// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.
// Example
// For n = 152, the output should be
// deleteDigit(n) = 52;
// For n = 1001, the output should be
// deleteDigit(n) = 101.

function deleteDigit(n) {
  let options = [];
  let x = n.toString();
  for (let i = 0; i < x.length; i++) {
    options.push(x.slice(0, i) + x.slice(i + 1, x.length));
  }
  let max = Number(options[0]);
  for (let i = 1; i < options.length; i++) {
    if (Number(options[i]) > max) max = Number(options[i]);
  }
  return max;
}

// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.
// Example
// For text = "Ready, steady, go!", the output should be
// longestWord(text) = "steady".

function longestWord(text) {
  let bucket = [];
  let word = "";
  for (let i = 0; i < text.length; i++) {
    if (/^[A-Za-z]/.test(text[i])) {
      word += text[i];
    } else {
      bucket.push(word);
      word = "";
    }
    if (i === text.length - 1) {
      bucket.push(word);
    }
  }
  let max = 0;
  let idx = 0;
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i].length > max) {
      max = bucket[i].length;
      idx = i;
    }
  }
  return bucket[idx];
}

// Check if the given string is a correct time representation of the 24-hour clock.
// Example
// For time = "13:58", the output should be
// validTime(time) = true;
// For time = "25:51", the output should be
// validTime(time) = false;
// For time = "02:76", the output should be
// validTime(time) = false.

function validTime(time) {
  if (Number(time.substring(0, 2)) < 24 && Number(time.substring(3, 5)) < 60)
    return true;
  return false;
}

// CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.
// Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.
// Example
// For inputString = "2 apples, 12 oranges", the output should be
// sumUpNumbers(inputString) = 14.

function sumUpNumbers(input) {
  let ans = "";
  let sum = 0;
  let regex = /^\d+/g;
  for (let i = 0; i < input.length; i++) {
    if (input[i].match(regex)) {
      ans += input[i];
    } else {
      if (ans.length >= 1) {
        console.log(Number(ans));
        sum += Number(ans);
        ans = "";
      }
    }
    if (i === input.length - 1 && ans.length >= 1) {
      sum += Number(ans);
    }
  }
  return sum;
}

// Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.
// Example
// For
// matrix = [[1, 2, 1],
//           [2, 2, 2],
//           [2, 2, 2],
//           [1, 2, 3],
//           [2, 2, 1]]
// the output should be
// differentSquares(matrix) = 6.

function differentSquares(matrix) {
  let obj = {};
  let count = 0;
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      let x =
        String(matrix[i][j]) +
        String(matrix[i][j + 1]) +
        String(matrix[i + 1][j]) +
        String(matrix[i + 1][j + 1]);
      if (!obj[x]) {
        obj[x] = 1;
        count++;
      }
    }
  }
  return count;
}

// Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.
// Example
// For product = 12, the output should be
// digitsProduct(product) = 26;
// For product = 19, the output should be
// digitsProduct(product) = -1.

function digitsProduct(product) {
  let y = 1;
  while (y < 10000) {
    y = y.toString();
    let sum = 1;
    for (let i = 0; i < y.length; i++) {
      sum *= Number(y[i]);
    }
    if (sum === product) return Number(y);
    y = Number(y);
    y++;
  }
  return -1;
}

// You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.
// Return an array of names that will be given to the files.
// Example
// For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
// fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

function fileNaming(names) {
  let obj = {};
  for (let i = 0; i < names.length; i++) {
    let curr = names[i];
    let dups = 1;
    obj[curr] = 1;
    if (obj[names[i + 1]]) {
      while (obj[names[i + 1] + "(" + dups + ")"]) {
        dups++;
      }
      obj[names[i + 1] + "(" + dups + ")"] = 1;
      names[i + 1] = names[i + 1] + "(" + dups + ")";
    }
  }
  return names;
}

// You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message. After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.
// Assuming that your hunch is correct, decode the message.
// Example
// For code = "010010000110010101101100011011000110111100100001", the output should be
// messageFromBinaryCode(code) = "Hello!".

function messageFromBinaryCode(code) {
  let ans = "";
  for (let i = 0; i < code.length; i += 8) {
    ans += String.fromCharCode(parseInt(code.substring(i, i + 8), 2));
  }
  return ans;
}

// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.
// Example
// For n = 3, the output should be
// spiralNumbers(n) = [[1, 2, 3],
//                     [8, 9, 4],
//                     [7, 6, 5]]

function spiralNumbers(n) {
  let count = 1;
  let ans = [];
  // create a matrix with 0 values
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    ans.push(row);
  }
  let r = 0;
  let c = 0;
  let loops = 0;
  while (count <= n * n) {
    while (c < n - loops) {
      ans[r][c] = count;
      count++;
      c++;
    }
    // keep column same, add one row
    c--;
    r++;
    while (r < n - loops) {
      ans[r][c] = count;
      count++;
      r++;
    }
    // keep row same, subtract one column
    r--;
    c--;
    while (c >= 0 + loops) {
      ans[r][c] = count;
      count++;
      c--;
    }
    // keep column same, subtract one row
    r--;
    c++;
    while (r > 0 + loops) {
      ans[r][c] = count;
      count++;
      r--;
    }
    // keep row same, add one column
    r++;
    c++;
    // add a loop because we don't want to override the values we already changed
    loops++;
  }
  return ans;
}

// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.
// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.
// Example

// For
// grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
//         [4, 6, 5, 8, 7, 9, 3, 2, 1],
//         [7, 9, 8, 2, 1, 3, 6, 5, 4],
//         [9, 2, 1, 4, 3, 5, 8, 7, 6],
//         [3, 5, 4, 7, 6, 8, 2, 1, 9],
//         [6, 8, 7, 1, 9, 2, 5, 4, 3],
//         [5, 7, 6, 9, 8, 1, 4, 3, 2],
//         [2, 4, 3, 6, 5, 7, 1, 9, 8],
//         [8, 1, 9, 3, 2, 4, 7, 6, 5]]
// the output should be
// sudoku(grid) = true;

// For
// grid = [[1, 3, 2, 5, 4, 6, 9, 2, 7],
//         [4, 6, 5, 8, 7, 9, 3, 8, 1],
//         [7, 9, 8, 2, 1, 3, 6, 5, 4],
//         [9, 2, 1, 4, 3, 5, 8, 7, 6],
//         [3, 5, 4, 7, 6, 8, 2, 1, 9],
//         [6, 8, 7, 1, 9, 2, 5, 4, 3],
//         [5, 7, 6, 9, 8, 1, 4, 3, 2],
//         [2, 4, 3, 6, 5, 7, 1, 9, 8],
//         [8, 1, 9, 3, 2, 4, 7, 6, 5]]
// the output should be
// sudoku(grid) = false.

function sudoku(grid) {
  if (!checkRows(grid) || !checkCols(grid) || !checkBlocks(grid)) return false;
  return true;
}

const checkRows = (grid) => {
  for (let r = 0; r < 9; r++) {
    let mark = {};
    for (let c = 0; c < 9; c++) {
      if (mark[grid[c][r]]) return false;
      mark[grid[c][r]] = 1;
    }
  }
  return true;
};

const checkCols = (grid) => {
  for (let r = 0; r < 9; r++) {
    let mark = {};
    for (let c = 0; c < 9; c++) {
      if (mark[grid[r][c]]) return false;
      mark[grid[r][c]] = 1;
    }
  }
  return true;
};

const checkBlocks = (grid) => {
  for (let r = 0; r < 9; r += 3) {
    for (let c = 0; c < 9; c += 3) {
      let mark = {};
      for (let row = r; row < 3 + r; row++) {
        for (let col = c; col < 3 + c; col++) {
          if (mark[grid[row][col]]) return false;
          mark[grid[row][col]] = 1;
        }
      }
    }
  }
  return true;
};

// Given a divisor and a bound, find the largest integer N such that:
// N is divisible by divisor.
// N is less than or equal to bound.
// N is greater than 0.
// It is guaranteed that such a number exists.
// Example
// For divisor = 3 and bound = 10, the output should be
// maxMultiple(divisor, bound) = 9.
// The largest integer divisible by 3 and not larger than 10 is 9.

function maxMultiple(divisor, bound) {
  let n = bound;
  while (n > 0) {
    if (n % divisor === 0) {
      return n;
    }
    n--;
  }
}

// One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.
// When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.
// Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.
// Example
// For n = 240, the output should be
// lateRide(n) = 4.
// Since 240 minutes have passed, the current time is 04:00. The digits sum up to 0 + 4 + 0 + 0 = 4, which is the answer.
// For n = 808, the output should be
// lateRide(n) = 14.
// 808 minutes mean that it's 13:28 now, so the answer should be 1 + 3 + 2 + 8 = 14.

function lateRide(n) {
  let h = n / 60;
  let r = h % 1;
  let m = r * 60;
  let str = String(Math.floor(h)) + String(Math.round(m));
  let tot = 0;
  for (let num in str) {
    tot += Number(str[num]);
  }
  console.log(str);
  return tot;
}

// Some phone usage rate may be described as follows:
// first minute of a call costs min1 cents,
// each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
// each minute after 10th costs min11 cents.
// You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?
// Example
// For min1 = 3, min2_10 = 1, min11 = 2, and s = 20, the output should be
// phoneCall(min1, min2_10, min11, s) = 14.
// Here's why:
// the first minute costs 3 cents, which leaves you with 20 - 3 = 17 cents;
// the total cost of minutes 2 through 10 is 1 * 9 = 9, so you can talk 9 more minutes and still have 17 - 9 = 8 cents;
// each next minute costs 2 cents, which means that you can talk 8 / 2 = 4 more minutes.
// Thus, the longest call you can make is 1 + 9 + 4 = 14 minutes long.

function phoneCall(min1, min2_10, min11, s) {
  let min = 0;
  const minOne = () => (s -= min1);
  const minTwo = () => (s -= min2_10);
  if (s >= min1) {
    minOne();
    min++;
  }
  while (s >= min2_10 && min < 10 && min > 0) {
    minTwo();
    min++;
  }
  while (s > 0 && s >= min11 && min >= 10) {
    min++;
    s -= min11;
  }
  return min;
}

// Given integers a and b, determine whether the following pseudocode results in an infinite loop
// while a is not equal to b do
// increase a by 1
// decrease b by 1
// Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.
// Example
// For a = 2 and b = 6, the output should be
// isInfiniteProcess(a, b) = false;
// For a = 2 and b = 3, the output should be
// isInfiniteProcess(a, b) = true.

function isInfiniteProcess(a, b) {
  if (a <= b && a % 2 === b % 2) return false;
  return true;
}

// In tennis, the winner of a set is based on how many games each player wins. The first player to win 6 games is declared the winner unless their opponent had already won 5 games, in which case the set continues until one of the players has won 7 games.
// Given two integers score1 and score2, your task is to determine if it is possible for a tennis set to be finished with a final score of score1 : score2.
// Example
// For score1 = 3 and score2 = 6, the output should be
// tennisSet(score1, score2) = true.
// Since player 1 hadn't reached 5 wins, the set ends once player 2 has won 6 games.
// For score1 = 8 and score2 = 5, the output should be
// tennisSet(score1, score2) = false.
// Since both players won at least 5 games, the set would've ended once one of them won the 7th one.
// For score1 = 6 and score2 = 5, the output should be
// tennisSet(score1, score2) = false.
// This set will continue until one of these players wins their 7th game, so this can't be the final score.

function tennisSet(score1, score2) {
  if (Math.max(score1, score2) > 7) return false;
  if (Math.max(score1, score2) < 6) return false;
  if (score1 > 4 && score2 > 4) {
    return (score1 === 7 || score2 === 7) && (score1 !== 7 || score2 !== 7);
  }
  if (Math.max(score1, score2) > 6) {
    return Math.min(score1, score2) > 4;
  }
  return true;
}
