// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.
// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
// matrix = [[0, 1, 1, 2],
//           [0, 5, 0, 0],
//           [2, 0, 3, 3]]
// the output should be
// matrixElementsSum(matrix) = 9.
// There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.

const matrixElementsSum = (matrix) => {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // if the room is on the top floor, there will not be a room above it, so add it
      if (i === 0) {
        count += matrix[i][j];
      } else {
        // if it is not on the top floor, check the floor above it to see if it is haunted. If the floor above is not haunted, add it. If the floor above is haunted, set the current room to haunted as well so that the next floor down can check above it.
        if (matrix[i - 1] && matrix[i - 1][j] !== 0) {
          count += matrix[i][j];
        } else {
          matrix[i][j] = 0;
        }
      }
    }
  }
  return count;
};
