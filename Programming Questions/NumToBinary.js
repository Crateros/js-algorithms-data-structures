// Given a base-10 integer , n, convert it to binary (base-2). Then find and print
// the base-10 integer denoting the maximum number of consecutive 1's in n's
// binary representation.

//Make note of the == instead of ===, comparing string 1 to number 1, can use
// == to compare likeness between data types, whereas === enforces strict
// data type comparison.

function main() {
    var n = parseInt(readLine());
    var binary = n.toString(2);
    var currentCount = 0;
    var finalCount = 0;
    for(var i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            currentCount ++;
            if (currentCount > finalCount) {
            finalCount = currentCount;
            }
        }
        else {
            currentCount = 0;
        }
    }
    console.log(finalCount);
}
