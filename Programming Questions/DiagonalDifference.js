// Given a square matrix of size N x N , calculate the absolute difference between
// the sums of its diagonals.
// The primary diagonal is:
// 11
//       5
//             -12
//
// Sum across the primary diagonal: 11 + 5 - 12 = 4
//
// The secondary diagonal is:
//             4
//       5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

function main() {
    var n = parseInt(readLine());
    var a = [];
    var priDiag = 0;;
    var secDiag = 0;;
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    for(i = 0, j=a.length -1; i < a.length; i++, j--) {
        priDiag += parseInt(a[i][i]);
        secDiag += parseInt(a[i][j]);
    }
    console.log(Math.abs(priDiag - secDiag));
}
