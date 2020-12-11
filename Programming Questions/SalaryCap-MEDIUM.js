// Given an array of salaries and a budget K adjust the individual salaries
// so that the salary total equals K

// Example 1:

// Input: salaries = [100, 300, 200, 400], budget = 800
// Output: 250
// Explanation: k should be 250, so the total salary after the reduction 100 + 250 + 200 + 250 is exactly equal to 800.
// You can assume that solution always exists.

const salaryCap = (salaries, budget) => {
  const sorted = salaries.sort();
  let runningBudget = budget;
  let cap = budget / salaries.length;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] < cap) {
      runningBudget -= sorted[i];
      cap = runningBudget / (sorted.length - (i + 1));
    } else {
      sorted.fill(cap, i, sorted.length);
      break;
    }
  }

  return { cap };
};

const salaryCapTwo = (arr, k) => {
  arr.sort();
  let salaries = arr.length;
  let runningBudget = k;
  let cap = runningBudget / salaries;

  for (let i = 0; i < arr.length; i++) {
    cap = runningBudget / salaries;
    if (arr[i] < cap) {
      runningBudget -= arr[i];
      salaries--;
    } else break;
  }

  return cap;
};

console.log(salaryCap([100, 300, 200, 400], 800));
console.log(salaryCap([100, 200, 240, 460], 800));
console.log(salaryCap([200, 200, 200, 200], 800));
console.log(salaryCap([100, 100, 100, 100, 200], 600));
console.log(salaryCap([100], 100));
console.log(salaryCap([1, 1, 2, 4, 9], 13));
