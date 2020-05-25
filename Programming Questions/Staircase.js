// Write a program that prints a staircase of size .
//
// Input Format
//
// A single integer, , denoting the size of the staircase.
//
// Output Format
//
// Print a staircase of size  using # symbols and spaces.
//
// Note: The last line must have  spaces in it.
//
// Sample Input
//
// 6
// Sample Output
//
//      #
//     ##
//    ###
//   ####
//  #####
// ######
//Can use .repeat to concat string with repeated characters, make sure and use \n
//for new line.

function main() {
    var n = parseInt(readLine());
    var result = '';
    for (var i = 1; i <= n; i++) {
        result += ' '.repeat(n - i) + '#'.repeat(i) + '\n';
    }
    console.log(result);
}
