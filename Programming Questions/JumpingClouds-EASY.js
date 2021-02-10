// Emma is playing a new mobile game that starts with consecutively numbered clouds.
// Some of the clouds are thunderheads and others are cumulus. She can jump on any
// cumulus cloud (0) having a number that is equal to the number of the current
// cloud plus 1 or 2. She must avoid the thunderheads (1). Determine the minimum
// number of jumps it will take Emma to jump from her starting position to the last cloud.
// It is always possible to win the game.

// Sample input: c=[0, 1, 0, 0, 0, 1, 0]
// Sample output: 4 ([0, 2, 4, 6])

// Sample input: c=[0, 0, 1, 0, 0, 1, 0]
// Sample output: 4 ([1, 3, 4, 6])

// Sample input: c=[0, 0, 0, 0, 1, 0]
// Sample output: 3 ([1, 3, 5])

// Find the LEAST jumps necessary to get to the end, winning the game is always possible.

const cloudJumps = clouds => {
  console.log(clouds);
  let jumps = 0;
  let index = -1;
  let jumpIndex = [];

  while (index < clouds.length - 1) {
    if (clouds[index + 2] === 0) {
      jumps++;
      index += 2;
      jumpIndex.push(index);
    } else if (clouds[index + 1] === 0) {
      jumps++;
      index++;
      jumpIndex.push(index);
    }
  }

  return { jumps, jumpIndex };
};

const testCloudsOne = [0, 1, 0, 0, 0, 1, 0];
const testCloudsTwo = [0, 0, 0, 0, 1, 0];

console.log(cloudJumps(testCloudsOne));
console.log(cloudJumps(testCloudsTwo));
