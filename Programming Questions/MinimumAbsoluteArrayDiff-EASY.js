// Given an array of integers, find and print the minimum absolute difference between any two elements in the array.

// For example, given the array a = [-2, 2, 4] The minimum absolute difference is 2.

const findAbsoluteMinDiff = array => {
    const sorted = array.sort((a,b) => a - b);
    const length = sorted.length;
    let absMinDif = Math.abs(sorted[0] - sorted[1]);

    for (let i = 1; i < length - 1; i++) {
        const currentDif = Math.abs(sorted[i] - sorted[i + 1]);
        if (currentDif < absMinDif) absMinDif = currentDif;
    }

    return absMinDif
}

const test = [-2, 2, 4];
const testTwo = [3, -7, 0];
const testThree = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];

console.log(findAbsoluteMinDiff(test));
console.log(findAbsoluteMinDiff(testTwo));
console.log(findAbsoluteMinDiff(testThree));
