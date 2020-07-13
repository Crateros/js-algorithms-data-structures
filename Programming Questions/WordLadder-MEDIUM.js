// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest
// transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list.
// Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
// Example 1:

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.

const wordLadder = (beginWord, endWord, wordDict) => {
  // Create word set
  const wordSet = new Set(wordDict);

  // Check for presence of endWord in wordSet
  if (!wordSet.has(endWord)) return 0;

  // Create possible mutation set
  let charSet = new Set(wordDict.join('').split(''));

  // Create queue
  let queue = [beginWord];
  let queueLevel = 1;

  // Loop through queue BFS style, going level by level, until we encounter endWord
  while (queue.length) {
    // Remove first word from queue and convert to array
    let currentWordArray = queue.pop().split('');

    for (let i = 0; i < currentWordArray.length; i++) {
      let originalChar = currentWordArray[i];

      // Loop through possible permutations of current word
      for (char of charSet) {
        currentWordArray[i] = char;
        let permutation = currentWordArray.join('');

        // If endWord is found, increment queueLevel and return
        if (permutation === endWord) return (queueLevel += 1);

        // If an acceptable permutation is found add it to
        // the queue and remove it from the wordSet
        if (char !== originalChar && wordSet.has(permutation)) {
          queue.push(permutation);
          wordSet.delete(permutation);
        }
      }

      // Reset current char to initial value before moving on to next index
      currentWordArray[i] = originalChar;
    }

    queueLevel++;
  }

  // No path to endWord exists
  return 0;
};

const beginWord = 'hit';
const endWord = 'dog';
const wordDict = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
console.log(wordLadder(beginWord, endWord, wordDict));
