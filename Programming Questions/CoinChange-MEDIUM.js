// You are given coins of different denominations and a total amount of money.
// Write a function to compute the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

// Example 4:
// Input: coins = [1], amount = 1
// Output: 1

// Example 5:
// Input: coins = [1], amount = 2
// Output: 2

// Constraints:
// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

const coinChange = (coins, amount) => {
  // Create DP table to hold subproblem answers. Use size
  // amount + 1 to account for the fact that the array is 0 indexed
  // otherwise we would be finding solutions for amount - 1.
  const dpTable = new Array(amount + 1).fill(amount + 1);

  // coins = coins.sort((a, b) => a - b);

  // Start at the simplest sub-problem (amount = 0, coins = 0);
  dpTable[0] = 0;

  // Loop through all possible amounts up to amount (0.... amount)
  // This is <= so that we consider the final amount due to
  // zero indexing (this could also be i < dpTable.length)
  for (let i = 0; i <= amount; i++) {
    // Loop through all possible coins
    for (let j = 0; j < coins.length; j++) {
      // Check to see if the current coin is within the bounds of the desired amount
      if (coins[j] <= i) {
        console.log(i);
        console.log(j);
        // If current coin is within bounds we need to determine if our current number
        // of coins needed to solve the problem is less than introducing a new coin into the
        // equation. 1 + dpTable[i - coins[j]] is +1 for a new coin added to the lookup
        // of the previous sub-problems solution using said coin.
        console.log(dpTable[i], dpTable[i - coins[j]]);
        dpTable[i] = Math.min(dpTable[i], 1 + dpTable[i - coins[j]]);
        // Since our coins have been sorted if we encounter a coin that is larger
        // than our current amount we break out of the loop
      }
    }
  }
  return dpTable[amount] <= amount ? dpTable[amount] : -1;
};

console.log(coinChange([1, 2], 4));
// console.log(coinChange([1], 1));
// console.log(coinChange([474, 83, 404, 3], 264));
// console.log(coinChange([2], 265));
