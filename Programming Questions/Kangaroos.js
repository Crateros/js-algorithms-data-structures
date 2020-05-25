// There are two kangaroos on an x-axis ready to jump in the positive direction
// (i.e, toward positive infinity). The first kangaroo starts at location x1
// and moves at a rate of v1  meters per jump. The second kangaroo starts at location x2
// and moves at a rate of v2 meters per jump. Given the starting locations and
// movement rates for each kangaroo, can you determine if they'll ever
// land at the same location at the same time?

// Print YES if they can land on the same location at the same time; otherwise,
// print NO.
// Note: The two kangaroos must land at the same location after making the same
// number of jumps.

j = number of jumps

v1(j) + x1 = v2(j) + x2
---> v1(j) - v2(j) = x2 - x1
---> v1 - v2 = (x2 - x1) / j
---> (v1 - v2) / (x2 - x1) = 1 / j
---> (x2 - x1) / (v1 - v2) = j
if j is positive > 0 then kangaroos will meet.
however, j could be positive fraction (kangaroos will not meet), so compare
j to Math.round(j).
Also check if divided by 0 ~ Infinity. Check to make sure denominator does not
equate to 0, (v1 - v2) > 0


function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);

    var numberOfJumps = (x2 - x1) / (v1 - v2);
    if (numberOfJumps > 0 && numberOfJumps === Math.round(numberOfJumps) && (v1 - v2) > 0) {
        console.log("YES");
    }
    else
        console.log("NO");
}
