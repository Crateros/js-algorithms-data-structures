// There are a number of different toys lying in front of him, tagged with their prices.
// Mark has only a certain amount to spend, and he wants to maximize the number of toys
// he buys with this money.

// Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy?
// For example, if prices = [1, 2, 3, 4] and Mark has k = 7 to spend, he can buy a maximum of
// 3 items.

const buyToys = (budget, toys) => {
  const sortedToys = toys.sort((a, b) => a - b);
  let purchases = 0;

  for (let i = 0; i < sortedToys.length; i++) {
    if (budget - sortedToys[i] > -1) {
      budget -= sortedToys[i];
      purchases++;
    } else break;
  }

  return purchases;
};

const test = [4, 3, 1, 2, 99, 99, 99, 99, 99];
console.log(buyToys(7, test));
console.log(buyToys(11, test));
