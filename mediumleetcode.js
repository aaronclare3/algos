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