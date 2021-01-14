const swap = (arr, first, second) => {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}


// BUBBLE SORT
// EXPLANATION: We loop through the array comparing each value to it's neighbor on the right. If the value at the first index is greater than the value at the next index, we swap the 2 values and continue to the next index. After each pass through, the greatest value will be at the last index of the array less the current index of the loop.
// Big O: 

const bubble = arr => {
    let sorted = false;
    while(!sorted){
        sorted = true;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                swap(arr, i, i+1)
                sorted = false;
            }
        }
    }
    return arr;
}

console.log("bubble", bubble([7,2,1,7,3,5]));



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




// SELECTION SORT
// EXPLANATION: Do one loop to find the lowest value, swap that with the last value of the sorted part
// Big O: 

const select = arr => {
    for(let i = 0; i < arr.length; i++){
        let minIdx = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minIdx]){
                minIdx = j;
            }
        }
        swap(arr,i,minIdx);
    }
    return arr;
}

console.log("seelect", select([5,3,6,1]))





// MERGE SORT
// EXPLANATION: We start by splitting the array in half into a 'left' and 'right' side. We keep splitting until each array is sorted (each array has length 1). We return at array length 1 and begin combining the sorted arrays in a new array of double the length. For example, we combine 2 arrays of size 2 into one array of size 4.
// Big O: 

const merge = (arr) => {
    if(arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return mergeHelper(arr, merge(left), merge(right));
}

const mergeHelper = (arr, left, right) => {
    let newArr = [];
    while(left.length && right.length){
        if(left[0] < right[0]) {
            newArr.push(left.shift());
        } else {
            newArr.push(right.shift());
        }
    }
    return newArr.concat(left).concat(right);
}

console.log("merge", merge([5,3,6,1]))


// INSERTION SORT
// EXPLANATION: We loop through the array comparing each value to it's neighbor on the left. If the value at the first index is greater than the value at the next index, we swap the 2 values. We continue checking the value with the value on the left until it is in the right spot. This forms a 'sorted' section and a 'non-sorted' section.
// Big O: 

const insert = arr => {
    for(let i = 0; i < arr.length; i++){
        let j = i + 1;
        while(arr[i] > arr[j]){
            swap(arr, i, j);
            i--;
            j--;
        }
    }
    return arr;
}

console.log("insert", insert([5,3,6,1]))