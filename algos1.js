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






