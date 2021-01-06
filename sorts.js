// BUBBLE SORT
// VIDEO EXAMPLE: https://www.youtube.com/watch?v=xli_FI7CuzA
// EXPLANATION: We loop through the array comparing each value to it's neighbor on the right. If the value at the first index is greater than the value at the next index, we swap the 2 values and continue to the next index. After each pass through, the greatest value will be at the last index of the array less the current index of the loop.
// TIME COMPLEXITY: O(n^2) because at the worse case, for each element of the array, we have to iterate the array once

const bubbleSort = (arr) => {
    let isSorted = false;
    while(!isSorted){
        isSorted = true;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                isSorted = false;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5,4,3,2,1]));
console.log(bubbleSort([8,4,1,9,10,6]));




// INSERTION SORT
// VIDEO EXAMPLE: https://www.youtube.com/watch?v=JU767SDMDvA

// EXPLANATION: We loop through the array comparing each value to it's neighbor on the left. If the value at the first index is greater than the value at the next index, we swap the 2 values. We continue checking the value with the value on the left until it is in the right spot. This forms a 'sorted' section and a 'non-sorted' section.

// TIME COMPLEXITY: 

const insertionSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let x = i+1;
        let change = i;
        if(arr[x] < arr[i]){
            while(arr[x] < arr[change]){
                let temp = arr[change];
                arr[change] = arr[x];
                arr[x] = temp; 
                change--;
                x--;
            } 
        }
    }
    return arr;
}

console.log(insertionSort([5,4,3,2,1]));
console.log(insertionSort([8,4,1,9,10,6]));