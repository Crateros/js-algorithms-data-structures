// sum of all multiples of 3 or 5 less than 1000

function sumThreeAndFive() {
  var result = 0;
  var counter = 3;
  while(counter < 1000) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      result += counter;
    }
    counter ++;
  }
  return result
}
sumThreeAndFive();
