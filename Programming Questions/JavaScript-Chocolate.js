// Lily has a chocolate bar consisting of a row of n squares where each
// square has an integer written on it. She wants to share it with Ron for
// his birthday, which falls on month m and day d. Lily only wants to give
// Ron a piece of chocolate if it contains m consecutive squares whose
// integers sum to d.
//
// Given m, d, and the sequence of integers written on each square of Lily's
// chocolate bar, how many different ways can Lily break off a piece of
// chocolate to give to Ron?


function getWays(squares, d, m){
    // Complete this function
    var count = 0;
    for (var i = 0; i < squares.length - (m - 1); i++) {
        var sum = squares[i];
        for (var j = i + 1; j < i+m; j++) {
            sum += squares[j]
        }
        if(sum === d) {
            count ++
        }
    }
   return count;
}
