//----- RUNNING SUM ------//
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

const runningSum = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }
  return nums;
};

// Reverse an array in place
const revArrInPlace = (arr) => {
  let len = arr.length;
  let halfLen = Math.round(arr.length / 2);
  for (let i = 0; i < halfLen; i++) {
    let temp = arr[i];
    arr[i] = arr[len - i - 1];
    arr[len - i - 1] = temp;
  }
  return arr;
};

console.log(revArrInPlace([0, 1, 2, 3, 4, 5, 6, 22]));

//----- REVERSE STRING 1 ------//
// split takes a string and puts characters into an array => ['h', 'e', 'l', 'l', 'o']
// then we can call reverse on the array => ['o', 'l', 'l', 'e', 'h']
// then we can join the array into a string again 'olleh'
const revString = (str) => {
  return str.split("").reverse().join("");
};
console.log(revString("helloworld123"));

//----- REVERSE STRING 2 ------//
// Create a new empty string, loop through each character of the str from the back and add that char to the new string
const revStringTwo = (str) => {
  let x = "";
  for (let i = str.length - 1; i >= 0; i--) {
    x += str[i];
  }
  return x;
};
console.log(revStringTwo("helloworld123"));

//----- PALINDROME ------//
// split takes a string and puts characters into an array => ['r', 'a', 'c', 'e', 'c', 'a', 'r']
// then we can call reverse on the array => ['r', 'a', 'c', 'e', 'c', 'a', 'r']
// then we can join the array into a string again 'racecar', and check if it matches the original word
const isPal = (word) => {
  return word.split("").reverse().join("") === word;
};
isPal("12342");

//----- REVERSE INT ------//
// changes int to string, change to array, reverses array, change back to string,
// parse the string back to int, multiple by the sign of the original number (in case it was negative)
const revInt = (num) => {
  return parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
};

// without changing the int to a string
const reverseInt = (x) => {
  let absInt = Math.abs(x);
  let rev = 0;
  let lastDig = 0;
  while (absInt > 0) {
    lastDig = absInt % 10;
    rev = rev * 10 + lastDig;
    absInt = Math.floor(absInt / 10);
  }
  return rev;
};
console.log(reverseInt(-743));

//----- FIZZBUZZ ------//
// We check whether the current number is a divisible by both 3 & 5
// then if we don't reach that, we check if it is only divisible by 3
// then if we don't hit either, we check if it is only divisible by 5
// then if none of the above, we print the number
const fizzbuzz = (num) => {
  for (let x = 0; x <= num; x++) {
    if (x % 15 === 0) {
      console.log("fizzbuzz");
    } else if (x % 3 === 0) {
      console.log("fizz");
    } else if (x % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(x);
    }
  }
};
fizzbuzz(77);

//----- MAX CHARACTER ------//
// first we create a new object to keep track of the characters and occurrences of characters
// When looping the string, we either add it to the object as 1 if it doesn't exist, or add 1 to it if it does
// Then we loop through the object and keep track of the highest value and it's associated key
const maxChar = (str) => {
  let obj = {};
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }
  let maxCharIdx = 0;
  let maxChar = "";
  for (let key in obj) {
    if (obj[key] > maxCharIdx) {
      maxCharIdx = obj[key];
      maxChar = key;
    }
  }
  return {
    maxChar: maxChar,
    idx: maxCharIdx,
  };
};
maxChar("hello");

//----- ROMAN NUMERAL TO NUM ------- //
// Given a string of Roman Numerals, return the integer it represents. Ex. "IV" returns 4 and "XII" returns 12

// First we create an object with keys being the characters and values being the integer value
// We loop through the string given, and for each letter, we check the object for if the value at the key of the string is less than the next letter.
// If it is less, we subtract the value from the total, if not, we add it to the total. Ex if given 'IV', we check if the value at 'I' (1) is less than
// the value at 'V' (5). If it is less, we know we need to take away 1 from the total.
const romanToInt = (s) => {
  let x = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    x[s[i]] < x[s[i + 1]] ? (ans -= x[s[i]]) : (ans += x[s[i]]);
  }
  return ans;
};

//----- LONGEST COMMON PREFIX ------- //
// Given an array of strings, find the longest common prefix. For example, given ['lowest', 'low', 'loaf'], return 'lo'

// The idea is that you want to create a variable 'prefix' which contains the longest current prefix. We want to first loop through each letter (character)
// in the first word, and for each of those letters, we want to loop through the corresponding letter in the other words. If any of these don't match,
// to the current letter in the first word, we just return the current prefix. If they do match, we take the current prefix and add the letter,
// and move to the next letter in the first word. If they match all the way through the first word we can return the prefix

var longestCommonPrefix = (strs) => {
  let prefix = "";
  if (strs.length == 0) return prefix;
  for (let i = 0; i < strs[0].length; i++) {
    let character = strs[0][i];
    for (let x = 0; x < strs.length; x++) {
      if (strs[x][i] !== character) return prefix;
    }
    prefix = prefix + character;
  }
  return prefix;
};

//----- VALID PARENTHESES ------- //
// here we want to use a stack because for each open bracket, we want to push it onto the stack, and for each closing bracket, we want to make sure it matches the most recent opening bracket
// If either we loop and find a character that does not match, or we finish looping and the stack is not empty, we know we do not have matching parenthesis

var isValid = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      case "(":
        stack.push(")");
        break;
      default:
        if (s[i] !== stack.pop()) {
          return false;
        }
    }
  }
  return stack.length === 0;
};

//----- SUBTRACT PRODUCT AND SUM ------- //
// Given a number n, take the product of each digit and subtract it from the sum of each digit.

var subtractProductAndSum = function (n) {
  let x = n.toString().split("");
  let prod = 0;
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += parseInt(x[i]);
    if (i === 0) {
      prod = parseInt(x[i]);
    } else {
      prod = prod * parseInt(x[i]);
    }
  }
  return prod - sum;
};

var subtractProductAndSum = (n) => {
  let digits = Array.from(String(n), Number);
  let sum = digits.reduce((a, b) => a + b);
  let prod = digits.reduce((a, b) => a * b);
  return prod - sum;
};

//----- Depth of parentheses ------- //
// Given a string, determine the max depth of the parentheses. If there are none, return 0

// My initial thought was to use a stack, as I have used that before in a parentheses problem, but after completing it, we can refactor it to be better
var maxDepth = function (s) {
  let stack = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        stack.push(s[i]);
        break;
      case ")":
        stack.pop(s[i]);
        break;
      default:
        break;
    }
    stack.length > max ? (max = stack.length) : "";
  }
  return max;
};

// Instead of using an array that acts like a stack, we could just use a variable to count the open parentheses and subtract one for the close parentheses.
// After all, that is basically what we did in the top one, we just inefficiently used an array
var maxDepth = (s) => {
  let count = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      count++;
      // set max to either max, or count - whichever is bigger
      max = Math.max(max, count);
    } else if (s[i] == ")") {
      count--;
    }
  }
  return max;
};

//----- Linked List Binary to Decimal ------- //
// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The entire linked list holds the binary representation of a number.
// Return the decimal value of the number in the linked list.

// var getDecimalValue = function(head) {
//     let num = '';
//     while(head.next){
//         num = num + head.val.toString();
//         head = head.next;
//     }
//     num = num + head.val.toString();
//     return parseInt(num,2); // This converts the string of binary to a number using base 2
// };

// getDecimalValue([1,0,1,1,1]);

//----- Unique Chars - CTCI 1.1 ------- //
// Check if all characters in a given string are unique

var areCharsUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let x = i + 1; x < str.length; x++) {
      if (str[i] == str[x]) {
        return false;
      }
    }
  }
  return true;
};

var charsUnique = (str) => {
  let newObj = {};
  for (let i = 0; i < str.length; i++) {
    let val = str[i];
    console.log(val);
    if (newObj[val]) {
      return false;
    }
    newObj[val] = true;
  }
  return true;
};

//----- String Permutation CTCI 1.2 ------- //
// Given 2 strings, check whether they are permutations of each other

var checkPerms = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }
  let arr1 = str1.split("").sort();
  let arr2 = str2.split("").sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("here");
      return false;
    }
  }
  return true;
};

var checkPerms = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let newObj = {};
  for (let i = 0; i < str1.length; i++) {
    if (newObj[str1[i]]) {
      newObj[str1[i]]++;
    }
    newObj[str1[i]] = 1;
  }

  for (let x = 0; x < str1.length; x++) {
    if (!newObj[str2[x]]) {
      return false;
    } else {
      newObj[str2[x]]--;
      if (newObj[str2[x]] < 0) {
        return false;
      }
    }
  }
  return true;
};

//----- URLify CTCI 1.3 ------- //
// Given a string and a number n, replace every space with %20. n represents the final length that the string should be. If there is extra room at the end, add spaces.

var URLify = (str) => {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == " ") {
      arr[i] = "%20";
    }
  }
  return arr.join("");
};

var URLify = (str, n) => {
  let count = 0;
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      count++;
    }
  }
  count = n - count;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " " && count > 0) {
      newStr += "%20";
      count--;
    } else if (str[i] != " ") {
      newStr += str[i];
    }
  }
  while (count > 0) {
    newStr += "%20";
    count--;
  }
  return newStr;
};

//----- Palindrome Permutations CTCI 1.4 ------- //
// Given a string, determine whether or not it is a permutation of a palindrome. (Ex. "omm" is true because it could be rearranged to spell mom. "raecacr" is also true because you can rearrange it to spell racecar)

var palPerm = (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let x = str[i];
    if (!obj[x]) {
      obj[x] = 1;
    } else {
      obj[x]++;
    }
  }
  let countOdds = 0;
  for (let key in obj) {
    if (obj[key] % 2 != 0) {
      countOdds++;
    }
    if (countOdds > 1) {
      return false;
    }
  }
  return true;
};

console.log(
  palPerm("hello") == false,
  palPerm("racecar") == true,
  palPerm("lllehohel") == true,
  palPerm("tacoca") == false
);

//----- One Edit Away CTCI 1.5 ------- //
// Given 2 strings, determine whether they are just one edit away. An edit can be an insertion of a letter, a deletion of a letter, or a replacement of a letter.

var checkEdits = (str1, str2) => {
  // If they are more than 1 length apart, they can't be one edit away
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }
  let longerStr;
  let shorterStr;
  let count = 0;
  let x = 0;
  if (str1.length != str2.length) {
    // Check for insertion or deletion (same thing in reverse)
    if (str1.length > str2.length) {
      longerStr = str1;
      shorterStr = str2;
    } else {
      longerStr = str2;
      shorterStr = str1;
    }

    for (let i = 0; i < longerStr.length; i++) {
      // If the characters dont match, I want to pause the index on the shorter str, but increment the longer str
      if (longerStr[i] != shorterStr[x]) {
        x--;
        count++;
      }
      x++;
    }
  } else {
    // This checks for replacement
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] != str2[i]) {
        count++;
      }
    }
  }
  return count > 1 ? false : true;
};

var stringCompression = (str) => {
  let num = 1;
  let finalStr = "";
  for (let i = 0; i < str.length; i++) {
    let currStr = str[i];
    while (str[i] == str[i + 1]) {
      num++;
      i++;
    }
    finalStr += `${currStr}` + `${num}`;
    num = 1;
  }
  return finalStr.length > str.length ? str : finalStr;
};

var stringCompression = (str) => {
  let num = 0;
  let finalStr = "";
  for (let i = 0; i < str.length; i++) {
    num++;
    if (str[i] != str[i + 1]) {
      finalStr += `${str[i]}` + `${num}`;
      num = 0;
    }
  }
  return finalStr.length > str.length ? str : finalStr;
};

// DEFANG IP ADDRESS
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

const defangIPaddr = (address) => {
  let newStr = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] == ".") {
      newStr += "[.]";
    } else {
      newStr += address[i];
    }
  }
  return newStr;
};

// EXTRA CANDIES
// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]

const kidsWithCandies = (candies, extraCandies) => {
  let max = 0;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) {
      max = candies[i];
    }
  }
  for (let i = 0; i < candies.length; i++) {
    candies[i] = candies[i] + extraCandies >= max ? true : false;
  }
  return candies;
};

// RICHEST CUSTOMER
// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10

const maximumWealth = (arr) => {
  let globalMax = 0;
  for (let i = 0; i < arr.length; i++) {
    let currCust = 0;
    for (let j = 0; j < arr[i].length; j++) {
      currCust += arr[i][j];
    }
    if (currCust > globalMax) globalMax = currCust;
  }
  return globalMax;
};

// COUNT THE NUMBER OF CONSISTENT STRINGS

// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed. Return the number of consistent strings in the array words.

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

const countConsistentStrings = (allowed, words) => {
  let count = 0;
  for (let w in words) {
    let x = true;
    for (let s in words[w]) {
      if (!allowed.includes(words[w][s])) {
        x = false;
      }
    }
    x && count++;
  }
  return count;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));

// 1221. Split a String in Balanced Strings

// Balanced strings are those who have equal quantity of 'L' and 'R' characters. Given a balanced string s split it in the maximum amount of balanced strings. Return the maximum amount of splitted balanced strings.
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

const balancedStringSplit = (str) => {
  let balance = 0,
    count = 0;
  for (let s in str) {
    str[s] == "L" ? balance-- : balance++;
    if (balance == 0) {
      count++;
    }
  }
  return count;
};
console.log("Balanced String", balancedStringSplit("RLRRLLRLRL"));

// 1678. Goal Parser Interpretation
// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order. Given the string command, return the Goal Parser's interpretation of command.

// Input: command = "G()(al)"
// Output: "Goal"

const interpret = (command) => {
  let str = "";
  for (let s = 0; s < command.length; s++) {
    if (command[s] == "(" && command[s + 1] != "a") {
      str += "o";
      s++;
    } else if (command[s] == "(") {
      str += "al";
      s += 3;
    } else if (command[s] == "G") {
      str += "G";
    }
  }
  return str;
};

console.log(interpret("G()(al)"));

// 1662. Check If Two String Arrays are Equivalent
// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise. A string is represented by an array if the array elements concatenated in order forms the string.

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true

const arrayStringsAreEqual = (word1, word2) => {
  return word1.join("") == word2.join("");
};

var sumOddLengthSubarrays = function (arr) {
  let tot = 0;
  let num = 0;
  while (num < arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + num]) {
        for (let j = i; j <= num + i; j++) {
          tot += arr[j];
        }
      }
    }
    num += 2;
  }
  return tot;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));

// 1720. Decode XORed Array
// There is a hidden integer array arr that consists of n non-negative integers. It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3]. You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0]. Return the original array arr. It can be proved that the answer exists and is unique.

const decode = (encoded, first) => {
  let newArr = [first];
  for (let i = 0; i < encoded.length; i++) {
    newArr.push(Math.abs(encoded[i] ^ newArr[i]));
  }
  return newArr;
};

console.log("decode XOR", decode([5, 1, 3, 5], 6));

// 1486. XOR Operation in an Array
// Given an integer n and an integer start. Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length. Return the bitwise XOR of all elements of nums.
// Input: n = 5, start = 0
// Output: 8

const xorOperation = (n, start) => {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans ^= start + 2 * i;
  }
  return ans;
};

console.log("XOR Array", xorOperation(5, 0) == 8);

// 1534. Count Good Triplets

// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets. A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.
// Return the number of good triplets.

const countGoodTriplets = (arr, a, b, c) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) > a) continue;
      for (let k = j + 1; k < arr.length; k++) {
        if (Math.abs(arr[j] - arr[k]) > b) continue;
        if (Math.abs(arr[i] - arr[k]) <= c) count++;
      }
    }
  }
  return count;
};

console.log(
  "count good triplets",
  countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)
);

// 1295. Find Numbers with Even Number of Digits
// Input: nums = [12,345,2,6,7896]
// Output: 2

const findNumbers = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 == 0) {
      count++;
    }
  }
  return count;
};

// 167. Two Sum II - Input array is sorted
// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.

const twoSum = (numbers, target) => {
  let p1 = 0;
  let p2 = numbers.length - 1;
  while (numbers[p1] + numbers[p2] !== target) {
    if (numbers[p2] + numbers[p1] > target) {
      p2--;
    } else {
      p1++;
    }
  }
  return [p1 + 1, p2 + 1];
};

// On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

// You can move according to these rules:

// In 1 second, you can either:
// move vertically by one unit,
// move horizontally by one unit, or
// move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
// You have to visit the points in the same order as they appear in the array.
// You are allowed to pass through points that appear later in the order, but these do not count as visits.

// Example 1:

// Input: points = [[1,1],[3,4],[-1,0]]
// Output: 7
// Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]
// Time from [1,1] to [3,4] = 3 seconds
// Time from [3,4] to [-1,0] = 4 seconds
// Total time = 7 seconds

const minTimeToVisitAllPoints = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let diff1 = Math.abs(arr[i][0] - arr[i + 1][0]);
    let diff2 = Math.abs(arr[i][1] - arr[i + 1][1]);
    count += Math.max(diff1, diff2);
  }
  return count;
};

// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on. For convenience, the full table for the 26 letters of the English alphabet is given below:
// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation:
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".

const uniqueMorseRepresentations = (words) => {
  let morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let alpha = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };
  let ans = 0;
  let obj = {};
  for (let i = 0; i < words.length; i++) {
    let code = "";
    for (let j = 0; j < words[i].length; j++) {
      let alphaKey = words[i][j];
      if (alphaKey in alpha) {
        code += morse[alpha[alphaKey]];
      }
    }
    if (obj[code]) {
      ans += 0;
    } else {
      obj[code] = 1;
      ans += 1;
    }
  }
  return ans;
};

// 961. N-Repeated Element in Size 2N Array
// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

// Example 1:
// Input: [1,2,3,3]
// Output: 3

const repeatedNTimes = (A) => {
  let n = A.length / 2;
  let obj = {};
  for (let i = 0; i < A.length; i++) {
    let curr = A[i];
    if (obj[curr]) {
      return curr;
    } else {
      obj[curr] = 1;
    }
  }
};

// 728. Self Dividing Numbers
// A self-dividing number is a number that is divisible by every digit it contains. For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0. Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example 1:
// Input:
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

const selfDividingNumbers = (left, right) => {
  let count = [];
  for (let i = left; i < right + 1; i++) {
    let arr = i
      .toString()
      .split("")
      .map((nums) => parseInt(nums));
    let isDiv = true;
    for (let j in arr) {
      if (i % arr[j] !== 0) {
        isDiv = false;
      }
    }
    if (isDiv) {
      count.push(i);
    }
  }
  return count;
};

console.log(selfDividingNumbers(1, 22));

// 1374. Generate a String With Characters That Have Odd Counts
// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.
// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.

const generateTheString = (n) => {
  return n % 2 === 0 ? "a".repeat(n - 1) + "b" : "a".repeat(n);
};

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    let node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else if (node.right.data > data) {
      this.add(node.right);
    }
  }
}

// 1287. Element Appearing More Than 25% In Sorted Array
// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.
// Return that integer.

const findSpecialInteger = (arr) => {
  if (arr.length === 1) return arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      let x = i;
      let count = 1;
      while (arr[x] == arr[x + 1]) {
        count++;
        x++;
      }
      if (count / arr.length > 0.25) return arr[i];
    }
  }
};

// Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.

// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

const findTheDistanceValue = (arr1, arr2, d) => {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        count++;
        break;
      }
    }
  }
  return arr1.length - count;
};

// 884. Uncommon Words from Two Sentences
// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Return a list of all uncommon words.
// You may return the list in any order.

const uncommonFromSentences = (A, B) => {
  let arr = [];
  let obj = {};
  for (const word of A.split(" ")) {
    obj[word] ? obj[word]++ : (obj[word] = 1);
  }
  for (const word of B.split(" ")) {
    obj[word] ? obj[word]++ : (obj[word] = 1);
  }
  for (let keys in obj) {
    if (obj[keys] == 1) arr.push(keys);
  }
  return arr;
};

const firstLetter = (str) => {
  const first = str[0];
  if (Number(first) * 0 === 0) return "Digit";
  else if (/^[a-zA-Z0-9- ]*$/.test(str) == false) return "Other";
  else if (first === first.toUpperCase()) return "Upper";
  else if (first === first.toLowerCase()) return "Lower";
};

const removeWhiteSpace = (str) => {
  const whitespace = " ";
  let ans = "";
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == whitespace) {
      i++;
    }
    ans += str[i];
  }
  return ans;
};

console.log(removeWhiteSpace("hello world it is me h"));

// 605. Can Place Flowers
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

const canPlaceFlowers = (flowerbed, n) => {
  if (n === 0) return true;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] != 1 && flowerbed[i + 1] !== 1 && flowerbed[i - 1] !== 1) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n <= 0;
};
