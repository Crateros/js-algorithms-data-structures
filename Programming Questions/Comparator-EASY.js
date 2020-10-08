// Comparators are used to compare two objects. Create a comparator and use it to sort an array.
// Input is a player object: { name: string, score: integer }.

// Given an array of n player objects, write a comparator that sorts them in order of decreasing score.
// If 1 or more players have the same score, sort those players alphabetically ascending by name.

class Comparator {
  compare(playerA, playerB) {
    if (playerA.score === playerB.score) {
      return playerB.name.localeCompare(playerA.name);
    } else return playerB.score - playerA.score;
  }

  sort(playerArray) {
    let sorted = [];
    let ledger = [];

    for (let i = 0; i < playerArray.length - 1; i++) {
      let status = this.compare(playerArray[i], playerArray[i + 1]);
      ledger.push(status);

      if (status > -1) {
        sorted.push(playerArray[i], playerArray[i + 1]);
      } else {
        sorted.pop();
        sorted.push(playerArray[i + 1], playerArray[i]);
      }
    }
    console.log(ledger);
    if (ledger.some(e => e < 0)) return sorted;
  }
}

const arr = [
  { name: 'amy', score: 100 },
  { name: 'david', score: 100 },
  { name: 'heraldo', score: 50 },
  { name: 'aakansha', score: 75 },
  { name: 'aleska', score: 150 },
];

const comparator = new Comparator();
console.log(comparator.compare(arr[3], arr[4]));
console.log(comparator.compare(arr[0], arr[1]));
comparator.sort(arr);
