// BUBBLE SORT
// VIDEO EXAMPLE: https://www.youtube.com/watch?v=xli_FI7CuzA

// EXPLANATION: We loop through the array comparing each value to it's neighbor on the right. If the value at the first index is greater than the value at the next index, we swap the 2 values and continue to the next index. After each pass through, the greatest value will be at the last index of the array less the current index of the loop.

// TIME COMPLEXITY: O(n^2) because at the worse case, for each element of the array, we have to iterate the array once

const bubbleSort = (arr) => {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSorted = false;
      }
    }
  }
  return arr;
};

console.log("bubble sort", bubbleSort([5, 4, 3, 2, 1]));

// INSERTION SORT
// VIDEO EXAMPLE: https://www.youtube.com/watch?v=JU767SDMDvA

// EXPLANATION: We loop through the array comparing each value to it's neighbor on the left. If the value at the first index is greater than the value at the next index, we swap the 2 values. We continue checking the value with the value on the left until it is in the right spot. This forms a 'sorted' section and a 'non-sorted' section.

// TIME COMPLEXITY: We would still consider this O(n^2), although it is faster than bubble sort because the front section will remain sorted. However worst case is still close enough to O(n^2) that we have to consider it that.

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let curr = arr[i];
    while (arr[j] > curr && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
};

console.log("insertion sort", insertionSort([5, 4, 3, 2, 1]));

// SELECTION SORT
// VIDEO EXAMPLE: https://www.youtube.com/watch?v=g-PGLbMth_g

// EXPLANATION: Do one loop to find the lowest value, swap that with the last value of the sorted part

// TIME COMPLEXITY:

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
};

console.log("Selection Sort", selectionSort([5, 4, 3, 2]));

// QUICK SORT
// VIDEO EXAMPLE: https://www.youtube.com/watch?v=uXBnyYuwPe8

// EXPLANATION: In Quicksort, you pick a value 'pivot' which is the value you want to find a place for. You put all elements into the array to the left or to the right of the pivot depending on if the element is more or less than pivot
// Once you know the element 'pivot' is in the correct space, you call quicksort again on the elements left of the pivot and again on the elements right of the pivot. You keep doing this recursively until the array is sorted.

// TIME COMPLEXITY: O(n * log(n))

const basicQuicksort = (arr) => {
  const pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];
  if (arr.length <= 1) {
    return arr;
  }
  for (const el of arr.slice(0, arr.length - 1)) {
    el < pivot ? leftArr.push(el) : rightArr.push(el);
  }
  return [...basicQuicksort(leftArr), pivot, ...basicQuicksort(rightArr)];
};

console.log("Basic Quick Sort", basicQuicksort([1, 6, 4, 2, 1]));

const quickSortInPlace = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivot = partition(arr, left, right);
    quickSortInPlace(arr, left, pivot - 1);
    quickSortInPlace(arr, pivot + 1, right);
  }
  return arr;
};

const partition = (arr, left, right) => {
  const pivot = arr[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, j, i);
    }
  }
  swap(arr, i + 1, right);
  return i + 1;
};
const swap = (items, first, second) => {
  let temp = items[first];
  items[first] = items[second];
  items[second] = temp;
};

console.log("Quick Sort in Place", quickSortInPlace([1, 6, 4, 2, 1]));

// MERGE SORT
// VIDEO EXAMPLE: https://www.youtube.com/watch?v=xsmyLxbi-Kc

// EXPLANATION: We start by splitting the array in half into a 'left' and 'right' side. We keep splitting until each array is sorted (each array has length 1). We return at array length 1 and begin combining the sorted arrays in a new array of double the length. For example, we combine 2 arrays of size 2 into one array of size 4.

// TIME COMPLEXITY: O(n * log(n))

const merge = (arr) => {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return mergeHelper(merge(left), merge(right));
};

const mergeHelper = (left, right) => {
  let newArr = [];
  while (left.length && right.length) {
    left[0] < right[0] ? newArr.push(left.shift()) : newArr.push(right.shift());
  }
  return newArr.concat(left).concat(right);
};

console.log("merge", merge([7, 8, 3, 1, 5]));

var mergeleet = (nums1, m, nums2, n) => {
  let num1 = nums1.slice(0, m);
  let num2 = nums2.slice(0, n);
  console.log(num1, num2);
  let ans = [];
  while (num1.length && num2.length) {
    if (num1[0] < num2[0]) {
      ans.push(num1.shift());
    } else {
      ans.push(num2.shift());
    }
  }
  console.log("ans", ans);
  let ans1 = ans.concat(num1).concat(num2);
  console.log("ans1", ans1);
  return ans1;
};

console.log("merge", mergeleet([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

const bubble1 = (arr) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubble1([1, 6, 3, 1, 4, 5]));
