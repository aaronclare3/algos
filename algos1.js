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


