//----- RUNNING SUM ------//
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

const runningSum = nums => {
    for(let i = 1; i < nums.length; i++){
        nums[i] = nums[i-1] + nums[i];
    }
    return nums;
};


//----- REVERSE STRING 1 ------//
// split takes a string and puts characters into an array => ['h', 'e', 'l', 'l', 'o']
// then we can call reverse on the array => ['o', 'l', 'l', 'e', 'h']
// then we can join the array into a string again 'olleh'
const revStringShort = str => {
    return str.split('').reverse().join('');
}
revStringShort("Hello there");

//----- REVERSE STRING 2 ------//
// Create a new empty string, loop through each character of the str and add that char first, then the rest of the newStr
const revStringLong = str => {
    let newStr = "";
    for (let char of str)
    newStr = char + newStr;
    return newStr;
}
revStringLong("Hello there");


//----- PALINDROME ------//
// split takes a string and puts characters into an array => ['r', 'a', 'c', 'e', 'c', 'a', 'r']
// then we can call reverse on the array => ['r', 'a', 'c', 'e', 'c', 'a', 'r']
// then we can join the array into a string again 'racecar', and check if it matches the original word
const isPal = word => {
    return word.split('').reverse().join('') === word;
}
isPal("12342");



//----- REVERSE INT ------//
// changes int to string, change to array, reverses array, change back to string, 
// parse the string back to int, multiple by the sign of the original number (in case it was negative)
const revInt = num => {
    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
}


// without changing the int to a string
const reverseInt = x => {
    let k = Math.abs(x);
    let rev = 0;
    let lastDigit = 0;
    while(k > 0){
        lastDigit = k % 10;
        rev = rev * 10 + lastDigit;
        k = parseInt(k / 10);
    }
    return rev;
}
revInt(-743);



//----- FIZZBUZZ ------//
// We check whether the current number is a divisible by both 3 & 5
// then if we don't reach that, we check if it is only divisible by 3
// then if we don't hit either, we check if it is only divisible by 5
// then if none of the above, we print the number
const fizzbuzz = num => {
    for(let x = 0; x <= num; x++){
        if(x % 15 === 0){
            console.log("fizzbuzz");
        } else if(x % 3 === 0){
            console.log("fizz");
        } else if(x % 5 === 0){
            console.log("buzz");
        } else {
            console.log(x);
        }
    }
}
fizzbuzz(77);


//----- MAX CHARACTER ------//
// first we create a new object to keep track of the characters and occurrences of characters
// When looping the string, we either add it to the object as 1 if it doesn't exist, or add 1 to it if it does
// Then we loop through the object and keep track of the highest value and it's associated key
const maxChar = str => {
    let obj = {};
    for(let char of str) {
        obj[char] = obj[char] + 1 || 1;
    }
    let maxCharIdx = 0;
    let maxChar = '';
    for(let key in obj){
        if(obj[key] > maxCharIdx){
            maxCharIdx = obj[key];
            maxChar = key;
        }
    }
    return {
        maxChar: maxChar,
        idx: maxCharIdx
    };
}
maxChar("hello");


//----- ROMAN NUMERAL TO NUM ------- //
// Given a string of Roman Numerals, return the integer it represents. Ex. "IV" returns 4 and "XII" returns 12

// First we create an object with keys being the characters and values being the integer value
// We loop through the string given, and for each letter, we check the object for if the value at the key of the string is less than the next letter. 
// If it is less, we subtract the value from the total, if not, we add it to the total. Ex if given 'IV', we check if the value at 'I' (1) is less than
// the value at 'V' (5). If it is less, we know we need to take away 1 from the total.
const romanToInt = s => {
    let x = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    };
    let ans = 0;
    for(let i = 0; i < s.length; i++){
        x[s[i]] < x[s[i+1]] ? ans -= x[s[i]] : ans += x[s[i]];
    }
    return ans;
};


//----- LONGEST COMMON PREFIX ------- //
// Given an array of strings, find the longest common prefix. For example, given ['lowest', 'low', 'loaf'], return 'lo'

// The idea is that you want to create a variable 'prefix' which contains the longest current prefix. We want to first loop through each letter (character)
// in the first word, and for each of those letters, we want to loop through the corresponding letter in the other words. If any of these don't match,
// to the current letter in the first word, we just return the current prefix. If they do match, we take the current prefix and add the letter, 
// and move to the next letter in the first word. If they match all the way through the first word we can return the prefix

var longestCommonPrefix = strs => {
    let prefix = "";
    if(strs.length == 0) return prefix;
    for(let i = 0; i < strs[0].length; i++){
        let character = strs[0][i];
        for(let x = 0; x < strs.length; x++){
            if(strs[x][i] !== character) return prefix; 
        } 
        prefix = prefix + character;
    }
    return prefix;
};



//----- VALID PARENTHESES ------- //
// here we want to use a stack because for each open bracket, we want to push it onto the stack, and for each closing bracket, we want to make sure it matches the most recent opening bracket
// If either we loop and find a character that does not match, or we finish looping and the stack is not empty, we know we do not have matching parenthesis

var isValid = s => {
    let stack = [];
    for(let i = 0; i < s.length; i++){
        switch (s[i]){
            case '{':
                stack.push("}");
                break;
            case '[':
                stack.push("]");
                break;
            case '(':
                stack.push(")");
                break;
            default:
                if(s[i] !== stack.pop()){
                    return false;
                }    
        }
    }
    return stack.length === 0;
}


//----- SUBTRACT PRODUCT AND SUM ------- //
// Given a number n, take the product of each digit and subtract it from the sum of each digit.

var subtractProductAndSum = function(n) {
    let x = n.toString().split('');
    let prod = 0;
    let sum = 0;
    for(let i = 0; i < x.length; i++){
        sum += parseInt(x[i]);
        if(i === 0){
            prod = parseInt(x[i]);
        }else {
            prod = prod * parseInt(x[i])
        }
    }
    return prod - sum;
};

var subtractProductAndSum = n => {
    let digits = Array.from((String(n)), Number);
    let sum = digits.reduce((a,b) => a+b);
    let prod = digits.reduce((a,b) => a*b);
    return prod-sum;
}












