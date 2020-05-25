// Given 6x6 2D array:
//
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
//
// We define an hourglass in array to be a subset of values with indices falling
// in this pattern in array's graphical representation:
//
// a b c
//   d
// e f g
//
// There are 16 hourglasses in array, and an hourglass sum is the sum of an
// hourglass' values.
//
// Calculate the hourglass sum for every hourglass in array,
// then print the maximum hourglass sum.
//
// Sample Input
//
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0
//
// Sample Output
//
// 19
//
// Array contains the following hourglasses:
//
// 1 1 1   1 1 0   1 0 0   0 0 0
//  1       0       0       0
// 1 1 1   1 1 0   1 0 0   0 0 0
//
// 0 1 0   1 0 0   0 0 0   0 0 0
//  1       1       0       0
// 0 0 2   0 2 4   2 4 4   4 4 0
//
// 1 1 1   1 1 0   1 0 0   0 0 0
//  0       2       4       4
// 0 0 0   0 0 2   0 2 0   2 0 0
//
// 0 0 2   0 2 4   2 4 4   4 4 0
//  0       0       2       0
// 0 0 1   0 1 2   1 2 4   2 4 0
// 
// The hourglass with the maximum sum (19) is:
//
// 2 4 4
//   2
// 1 2 4

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    //Hourglass sum structure: top row: a[n] + a[n+1] + a[n+2]
    //                                mid row: a+1[n+1]
    //                         bot row: a+2[n] + a+2[n+1] + a+2[n+2]
    // console.log(arr);
    var biggestHourglass;
    for (var i = 0; i < arr.length - 2; i++) {
        for (var j = 0; j < arr[i].length - 2; j++) {
          var topRow = arr[i][j] + arr[i][j+1] + arr[i][j+2];
          var midRow = arr[i+1][j+1];
          var botRow = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
          var hourglassTotal = topRow + midRow + botRow;
          if (biggestHourglass === undefined) {
              biggestHourglass = hourglassTotal;
          }
          else if (hourglassTotal > biggestHourglass) {
              biggestHourglass = hourglassTotal;
          }
        }
    }
    console.log(biggestHourglass);
}
