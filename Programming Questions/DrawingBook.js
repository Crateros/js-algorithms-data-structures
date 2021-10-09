// Brie’s Drawing teacher asks her class to open their n-page book to page number p.
// Brie can either start turning pages from the front of the
// book (i.e., page number 1) or from the back of the book (i.e., page number n),
// and she always turns pages one-by-one
// (as opposed to skipping through multiple pages at once).
// When she opens the book, page 1 is always on the right side:

// Each page in the book has two sides, front and back, except for the last page
// which may only have a front side depending on the total number of pages of the
// book (see the Explanation sections below for additional diagrams).

// Given n and p, find and print the minimum number of pages Brie must turn in
// order to arrive at page p.

function solve(n, p) {
  // Complete this function
  var startCount = 0;
  var endCount = 0;

  if (n / 2 >= p) {
    if (n === 2 && p === 1) {
      return startCount;
    }
    for (var i = 0; i <= n; i += 2) {
      if (i === p || i + 1 === p) {
        return startCount;
      }
      startCount++;
    }
  } else {
    if (n % 2 === 0 && p === n - 1) {
      endCount++;
      return endCount;
    }
    for (var i = n; i > 0; i -= 2) {
      if (i === p || i - 1 === p) {
        return endCount;
      }
      endCount++;
    }
  }
}

function solve(n, p) {
  // Complete this function
  var halfway = Math.floor(n / 2);
  var count = 0;

  if (p > halfway) {
    var rev = n - p;
    if (rev > 1) {
      count = Math.floor(rev / 2);
    } else if (n % 2 === 0 && rev === 1) {
      count = 1;
    }
  } else {
    if (p > 1) {
      count = Math.floor(p / 2);
    }
  }
  return count;
}

// 0 --> 1
// 1 --> 2,3
// 2 --> 4,5
// 3 --> 6,7
// 4 --> 8,9
// 5 --> 10

const pageTurner = (n, p) => {
  const half = Math.floor(n / 2);
  let count = 0;

  // Start at the beginning
  if (half >= p) {
    while (count * 2 < p - 1) {
      count++;
    }
  }

  return count;
}

console.log(pageTurner(10,1));
console.log(pageTurner(10,2));
console.log(pageTurner(10,4));
console.log(pageTurner(10,5));
console.log(pageTurner(10,9));
console.log(pageTurner(10,10));