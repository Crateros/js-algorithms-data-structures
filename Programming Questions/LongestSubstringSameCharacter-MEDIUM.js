// Write a function which, given a string S consisting of lowercase letters of the English alphabet,
// returns the longest consistent fragment of S which begins and ends with the same letter.
// If there are many possible answers you should return the one starting at the earliest position.

//     Examples:
//     1. Given S = "cbaabaab", your function should return "baabaab".
//     2. Given S = "performance", your function should return "erformance".
//     3. Given S = "cat", your function should return "c".
//     Write an efficient algorithm for the following assumptions:
//     the length of S is within the range [1..100,000];
//     string S consists only of lowercase letters (a−z).

const longestSubstringSameCharacter = (str) => {
    