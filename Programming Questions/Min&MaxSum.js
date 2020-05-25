// Given five positive integers, find the minimum and maximum values that can be
// calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line
// of two space-separated long integers.

function main() {
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);
    var arr = [];
    var minSum = 0;
    var maxSum = 0;
    arr.push(a,b,c,d,e);
    arr.sort(function(a,b) {
        return a-b;
    });
    for (var i = 0; i < arr.length - 1; i++) {
        minSum += arr[i];
        maxSum += arr[(arr.length - 1) - i];
    }
    console.log(minSum, maxSum);
}
