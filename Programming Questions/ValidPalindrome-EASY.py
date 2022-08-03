# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
# Given a string s, return true if it is a palindrome, or false otherwise.

# Example 1:
# Input: s = "A man, a plan, a canal: Panama"
# Output: true
# Explanation: "amanaplanacanalpanama" is a palindrome.

# Example 2:
# Input: s = "race a car"
# Output: false
# Explanation: "raceacar" is not a palindrome.

# Example 3:
# Input: s = " "
# Output: true
# Explanation: s is an empty string "" after removing non-alphanumeric characters.
# Since an empty string reads the same forward and backward, it is a palindrome.

# This solution uses 2 pointers O(N) and no extra memory but actually performs worse than the solution below
class Solution:
    def isPalindrome(self, s: str) -> bool:
        left, right = 0, len(s) - 1

        while left < right:
            # Skip non-alphanumeric chars on left pointer
            while left < right and not self.charOrNum(s[left]):
                left += 1
            # Skip non-alphanumeric chars on right
            while right > left and not self.charOrNum(s[right]):
                right -= 1
            # If a mismatch is found break early, not a palindrome
            if s[left].lower() != s[right].lower():
                return False
            # Collapse left and right pointers in
            left, right = left + 1, right - 1
        # No violations, valid palindrome present
        return True

    def charOrNum(self, c):
        val = ord(c)
        # Range 48->58 is [0-9], range 65->91 is [A-Z], range 97->123 is [a-z]
        return val in range(48, 58) or val in range(65, 91) or val in range(97, 123)

#         newStr = ''

#         for c in s:
#             if c.isalnum():
#                 newStr += c.lower()
#         return newStr == newStr[::-1]
