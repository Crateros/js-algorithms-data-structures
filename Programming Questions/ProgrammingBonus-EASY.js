// MegaCorp wants to give bonuses to its employees based on how many
// lines of codes they have written. They would like to give the
// smallest positive amount to each worker consistent with the constraint
// that if a developer has written more lines of code than their neighbor,
// they should receive more money.

// Given an array representing a line of seats of employees at MegaCorp, determine how much each one should get paid.

// For example, given [10, 40, 200, 1000, 60, 30], you should return [1, 2, 3, 4, 2, 1].

const disperseBonuses = lines => {
  const bonuses = [];
  let baseBonus = 1;

  lines.forEach((e, i) => {
    if (lines[i - 1] < e) {
      baseBonus++;
    }

    // if (lines[index - 1] > element && lines[index + 1] < element) {
    //   baseBonus--;
    // }

    bonuses.push(baseBonus);
  });

  return bonuses;
};

const coderLines = [10, 40, 200, 1000, 60, 30];

console.log(disperseBonuses(coderLines));
