// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography.
// During his last hike he took exactly N steps. For every step he took, he noted if it was an uphill, U , or a downhill, D step.
// Gary's hikes start and end at sea level and each step up or down represents a 1 unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level
// and ending with a step down to sea level. A valley is a sequence of consecutive steps below sea level,
// starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

// For example, if Gary's path is s=[DDUUUUDD], he first enters a valley 2 units deep.
// Then he climbs out an up onto a mountain 2 units high. Finally, he returns to sea level and ends his hike.

// Sample Input: 8 `UDDDUDUU`
// Sample Output: 1

// Explanation
// If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:

// _/\      _
//    \    /
//     \/\/

// He enters and leaves one valley.

const totalValleys = steps => {
  const stringArray = steps.split('');
  let valleys = 0, mountains = 0, currentElevation = 0;

  for (let i = 0; i < stringArray.length; i++) {
    // Handle descending
    if (stringArray[i] === 'D') {
      // If our previous elevation was sea level and we descend then
      // we are in a new valley
      if (currentElevation === 0) {
        valleys++;
      }
      currentElevation--;
    } else {
      if (currentElevation === 0) {
        mountains++;
      }
      currentElevation++;
    }
  }

  return { valleys, mountains };
};

const testOne = 'UDDDUDUU';
const testTwo = 'UDDUDU';

console.log(totalValleys(testOne));
console.log(totalValleys(testTwo));
