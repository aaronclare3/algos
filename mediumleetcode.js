//----- Rotate Matrix CTCI 1.7 ------- //
// Given an image represented by an N x N matrix, write a method to rotate the image by 90 degrees. Can you do this in place?


var rotateMatrix = arr => {
    for(let i = 0; i < arr.length; i++){
        for(let x = i; x < arr[i].length; x++){
            let temp = arr[i][x];
            arr[i][x] = arr[x][i];
            arr[x][i] = temp;
        }
    }
    for(let i = 0; i < arr.length; i++){
        for(let x = 0; x < arr.length/2; x++){
            let temp = arr[i][x];
            arr[i][x] = arr[i][arr.length-x-1];
            arr[i][arr.length-x-1] = temp;
        }
    }
    return arr;
}



//----- Zero Matrix CTCI 1.8 ------- //
// If an element in an M x N matrix is 0, its entire row and column should be set to 0

var zeroMatrix = arr => {
    let N = arr.length;
    let rowArr = [];
    let colArr = [];
    for(let x = 0; x < arr[0].length; x++){
        colArr.push(false);
    }
    for(let x = 0; x < N; x++){
        rowArr.push(false);
    }
    for(let row = 0; row < N; row++){
        for(let col = 0; col < arr[row].length; col++){
            if(arr[row][col] == 0){
                rowArr[row] = true;
                colArr[col] = true;
            }
        }
    }
    console.log(rowArr, colArr);
    var nullifyCols = (arr,col) => {
        console.log(arr);
        for(let row = 0; row < N; row++){
            arr[row][col] = 0
        }
    }
    var nullifyRows = (arr,row) => {
        for(let col = 0; col < arr[0].length; col++){
            arr[row][col] = 0;
        }
    }
    for(let row = 0; row < rowArr.length; row++){
        if(rowArr[row]) nullifyRows(arr, row);
    }
    for(let col = 0; col < colArr.length; col++){
        if(colArr[col]) nullifyCols(arr, col);
    }
    return arr;
}





//----- 1721. Swapping Nodes in a Linked List ----- //
// You are given the head of a linked list, and an integer k.
// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

var swapNodes = function(head, k) {
    let x = k - 1;
    let r1 = head;
    while(x > 0){
        r1 = r1.next;
        x--;
    }
    let r2 = head;
    count = 1;
    while(r2.next){
        count++;
        r2 = r2.next;
    }
    let runnerCount = count - k + 1;
    let r3 = head;
    while(runnerCount > 1){
        r3 = r3.next;
        runnerCount--;
    }
    let temp = r3.val;
    r3.val = r1.val;
    r1.val = temp;
    return head;
}



// MEETING SCHEDULER
// given 2 peoples scheduled meetings and daily availability ranges, return the time frames that you could schedule a meeting of x duration that would work for both parties.

// input:
// schedule 1 meetings: [[9,10:30],[12,13],[16,18]]
// person 1 hours: [9, 20]
// schedule 2 meetings: [[10,11.5],[12.5,14.5],[14.5,15],[16,17]]
// person 2 hours: [10, 18:30]
// meeting duration: 0.5 (hours)

// output: 
// (available times to schedule the meeting): [[11.5,12],[15,16],[18,18.5]]

const sched = (arr1, bounds1, arr2, bounds2, block) => {
    let earliestTimeAvailable = Math.max(bounds1[0], bounds2[0]);
    let latestTimeAvailable = Math.min(bounds1[1], bounds2[1]);
    let combinedMeetings = [[earliestTimeAvailable]];
    while(arr1.length && arr2.length){
        if(arr1[0][0] < arr2[0][0]){
            combinedMeetings.push(arr1.shift());
        } else if(arr1[0][0] == arr2[0][0]){
            if(arr1[0][1] <= arr2[0][1]){
                combinedMeetings.push(arr1.shift())
            }else{
                combinedMeetings.push(arr2.shift());
            }
        }else {
            combinedMeetings.push(arr2.shift());
        }
    } 
    let combinedSchedules = combinedMeetings.concat(arr1).concat(arr2);
    combinedSchedules.push([latestTimeAvailable]);    
    // let combinedSchedules = [...combinedMeetings.concat(arr1).concat(arr2), [lastBound]
    return checkFreeSpace(combinedSchedules, block);
}

const checkFreeSpace = (combinedMeetings, block) => {
    let openSlots = [];
    for(let i = 0; i < combinedMeetings.length-1; i++){
        if(combinedMeetings[i].length == 1 && combinedMeetings[i+1][0] - combinedMeetings[i][0] >= block){
            openSlots.push([combinedMeetings[i][0], combinedMeetings[i+1][0]])
        }
        else if(combinedMeetings[i+1][0] - combinedMeetings[i][1] >= block ){
            openSlots.push([combinedMeetings[i][1], combinedMeetings[i+1][0]])
        }
    }
    return openSlots;
}


let sched1 = [[9,10.5],[12,13],[16,18]];
let sched2 = [[10,11.5], [12.5,14.5], [14.5,15], [16,17]];
let sched1bound = [9,20];
let sched2bound = [9.5,18.5];
let meetingDurationHours = .5;

console.log(sched(sched1, sched1bound, sched2, sched2bound, meetingDurationHours));



