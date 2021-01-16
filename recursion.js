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


// Reverse String
// VIDEO EXAMPLE: https://www.youtube.com/watch?v=AgMq_wzwAXM

// EXPLANATION: Base case is when there is no string. If there is still a string, call the function again with the first character chopped off and added to the end.

const revString = str => {
    if(!str){
        return "";
    }
    return revString(str.substring(1)) + str[0];
}

console.log(revString("helloworld"))


// MERGE SORT
// VIDEO EXAMPLE: https://www.youtube.com/watch?v=xsmyLxbi-Kc

// EXPLANATION: We start by splitting the array in half into a 'left' and 'right' side. We keep splitting until each array is sorted (each array has length 1). We return at array length 1 and begin combining the sorted arrays in a new array of double the length. For example, we combine 2 arrays of size 2 into one array of size 4.

// TIME COMPLEXITY: O(n * log(n))

const merge = arr => {
    if(arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
    return mergeHelper(merge(left), merge(right));
}

const mergeHelper = (left, right) => {
    let newArr = [];
    while(left.length && right.length){
        left[0] < right[0] ? newArr.push(left.shift()) : newArr.push(right.shift());
    }
    return newArr.concat(left).concat(right);
}

console.log("merge", merge([7,8,3,1]))






// QUICK SORT
// EXPLANATION: In Quicksort, you pick a value 'pivot' which is the value you want to find a place for. You put all elements into the array to the left or to the right of the pivot depending on if the element is more or less than pivot
// Once you know the element 'pivot' is in the correct space, you call quicksort again on the elements left of the pivot and again on the elements right of the pivot. You keep doing this recursively until the array is sorted.
// Big O: 


const quick = (arr, left = 0, right = arr.length - 1) => {
    if(left < right){
        let pivot = partition(arr, left, right);
        quick(arr, left, pivot-1);
        quick(arr, pivot+1, right);
    }
    return arr;
}

const partition = (arr, left, right) => {
    let pivot = arr[right];
    let i = left - 1;
    for(let j = left; j < right; j++){
        if(arr[j] <= pivot){
            i++;
            swap(arr, j, i);
        }
    }
    swap(arr, i+1, right);
    return i+1;
}

console.log("quick", quick([5,3,6,1]))
