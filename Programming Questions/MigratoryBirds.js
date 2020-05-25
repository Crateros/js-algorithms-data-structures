// A flock of n birds is flying across the continent. Each bird has a type,
// and the different types are designated by the ID numbers 1, 2, 3, 4, and 5.

// Given an array of n integers where each integer describes the type of a bird in
// the flock, find and print the type number of the most common bird. If two or
// more types of birds are equally common, choose the type with the
// smallest ID number.

function main() {
  var n = parseInt(readLine());
  types = readLine().split(' ');
  types = types.map(Number);
  types = types.sort(function(a, b) {
    return a - b;
  });
  var holding = {};
  var values = [];
  var max = 0;
  var maxVal = 0;
  var position = 0;
  for (var i = 0; i < types.length; i++) {
    if (types[i] in holding) {
      holding[types[i]]++;
    } else holding[types[i]] = 1;
  }
  for (num in holding) {
    values.push(holding[num]);
    if (holding[num] > max) {
      max = holding[num];
    }
  }
  var keys = Object.keys(holding);

  for (var i = 0; i < values.length; i++) {
    if (values[i] > maxVal) {
      maxVal = values[i];
      position = i;
    }
  }
  console.log(keys[position]);
}
