// FACTORIAL
// VIDEO EXAMPLE: https://www.youtube.com/watch?v=5KVH78giGp0

// EXPLANATION: Since factorial of 1 is just 1, we return 1 if n is 1. If n is anything other than 1, we return the result of n * the factorial of n-1. Once n hits 1, it will return 1 and 'recurse' it's way up the stack multiplying by n until it reaches the original n.

// TIME COMPLEXITY: O(n). For each call of the function that n is not 1, we have 3 'units'. Unit 1 is the first 'if statement' comparison. The second unit is multiplacation. The third unit is the subtraction.
// So we can say that T(n) = T(n-1) + T(0). If n = 4 we would have:
// T(n) = T(n-1) + 3
//      = T(n-2) + 6
//      = T(n-3) + 9
// We can simplify this to T(n) = T(n-k) + 3k + T(0) where k = n
// Since k = n and T(0) = 1, we can simplify this to T(n) = 3n + 1
// Since 3n grows as n grows, we know that this algorithm is O(n)


const factorial = (n) => {
    // n * n-1 * n-2 * n-3 etc until n-x = 1;
    if(n > 0 && n <= 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}


console.log(factorial(7));
console.log(factorial(8));