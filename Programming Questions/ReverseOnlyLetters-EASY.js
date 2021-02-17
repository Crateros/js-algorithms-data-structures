// Given a string S, return the "reversed" string where all characters that
// are not a letter stay in the same place, and all letters reverse their positions.

// Example 1:
// Input: "ab-cd"
// Output: "dc-ba"

// Example 2:
// Input: "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

// Example 3:
// Input: "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

const reverseOnlyLetters = S => {
  const regex = /[a-zA-Z]/;
  const arr = S.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (regex.test(arr[left]) && regex.test(arr[right])) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    } else if (!regex.test(arr[left])) left++;
    else if (!regex.test[arr[right]]) right--;
  }
  return arr.join('');
};

console.log(reverseOnlyLetters("ab-cd"));
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
console.log(reverseOnlyLetters("Qedo1ct-eeLg=ntse-T!"));

