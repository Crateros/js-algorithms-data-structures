// 2 4 6 8
// 5 9 12 16
// 2 11 5 19
// 3 2 1 8
//
// Traverse this array going right, down, left, up in, etc (spiral), print all
// outputs in spiral order 2, 4, 6, 8, 16, 19, 8, 1, 2, 3, 2, 5, 9, 12, 5, 11
// Mark boundaries of untraversed array indices using variables

// T = Top left
// B = bottom left
// L = furthest bottom left
// R = furthest bottom right

function printSpiral(array, rows, columns) {

  var t = 0;
  var b = rows - 1;
  var l = 0;
  var r = columns - 1;
  //0 is traversing right, 1 is traversing down, 2 is traversing left, 3 is traversing up
  var direction = 0;
  var result = '';

  while(t <= b && l <= r) {
    //Traverse to the right
    if(direction === 0) {
      for(var i = l; i < r; i++) {
        result += array[t][i];
      }
      //Increment current row, change direction
      t++;
      direction = 1;
    }
    else if(direction === 1) {
      for(var i = t; i < b; i++) {
        result += array[i][r];
      }
      //Decrement row, change direction
      r--;
      direction = 2;
    }
    else if (direction === 2) {
      for(var i = r; i < l, i--) {

      }
    }
  }
}
