// Lena is preparing for an important coding competition that is preceded by a number of sequential preliminary contests.
// Initially, her luck balance is 0. She believes in "saving luck", and wants to check her theory.
// Each contest is described by two integers, L[i]  and T[i].

// L[i] is the amount of luck associated with a contest. If Lena wins the contest,
// her luck balance will decrease by -L[i]; if she loses it, her luck balance will increase by +L[i].

// T[i] denotes the contest's importance rating. 1 is important, 0 if it's unimportant.
// If Lena loses no more than K important contests, what is the maximum amount of luck she can have after competing in all the preliminary contests?
// This value may be negative.

// For example, K = 2  and:
// Contest		L[i]	T[i]
// 1		5	1
// 2		1	1
// 3		4	0

// If Lena loses all of the contests, her luck will be 5 + 4 + 1 = 10.
// Since she is allowed to lose K = 2 important contests, and there are only 2 important contests
// she can lose all three contests to maximize her luck at 10.
// If K = 1, she has to win at least 1 of the 2 important contests.
// She would choose to win the lowest value important contest worth 1.
// Her final luck will be 5 + 4 - 1 = 8.

// Sample Input:
// [
//   [6, 3],
//   [5, 1],
//   [2, 1],
//   [1, 1],
//   [8, 1],
//   [10, 0],
//   [5, 0],
// ]

// Sample Output:29

const luckBalance = (contests, failLimit) => {
  let luck = 0;
  let sorted = [];
  let testFails = 0;

  contests.forEach(contest => sorted.push(parseInt(contest.join(''))));
  sorted.sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] % 10 === 0) luck += sorted[i] / 10;
    else {
      if (testFails < failLimit) {
        luck += Math.floor(sorted[i] / 10);
        testFails++;
      } else {
        luck -= Math.floor(sorted[i] / 10);
      }
    }
  }

  return luck;
};

const testOne = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]];
const testTwo = [[5, 1], [1, 1], [4, 0]];
console.log(luckBalance(testOne, 3));
console.log(luckBalance(testTwo, 2));
