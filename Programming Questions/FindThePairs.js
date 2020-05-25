// John's clothing store has a pile of n loose socks where each sock i is labeled
// with an integer, ci, denoting its color. He wants to sell as many socks as
// possible, but his customers will only buy them in matching pairs.
// Two socks, i and j, are a single matching pair if ci=cj.
//
// Given n and the color of each sock, how many pairs of socks can John sell?
//
// * Unique pairs only, one pair of 10-10 cannot share a common sock with
// another 10 sock, so 10, 10, 10, 10 can only make 2 pairs!

function main() {
    var n = parseInt(readLine());
    c = readLine().split(' ');
    c = c.map(Number);
    c.sort(function(a,b) {
        return a-b;
    });
    var count = 0;
    for (var i = 0; i < c.length - 1; i++) {
        if(c[i] === c[i+1]) {
            count ++;
            i++;
        }
    }
    console.log(count);
}
