# Write a function to find the longest common prefix string amongst an array of strings.
# If there is no common prefix, return an empty string "".

# Example 1:
# Input: strs = ["flower", "flow", "flight"]
# Output: "fl"

# Example 2:
# Input: strs = ["dog", "racecar", "car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.


# Constraints:
# 1 <= strs.length <= 200
# 0 <= strs[i].length <= 200
# strs[i] consists of only lowercase English letters.


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # 1. take entire first string as longest common prefix
        # 2. compare next strings and widdle down when match fails
        # 3. return result

        prefix = list(strs[0])

        for index, string in enumerate(strs):
            # Convert string to list for char-to-char comparison
            current = list(string)
            # Bail early if either list is empty
            # if len(prefix) == 0 or len(current) == 0:
            #     return ""
            # # Bail early if either list has a first char mismatch
            # if prefix[0] != current[0]:
            #     return ""

            new_prefix = []
            i = 0
            while i < len(prefix) and i < len(current):
                if prefix[i] is current[i]:
                    new_prefix.append(prefix[i])
                    i += 1
                else:
                    break
            prefix = new_prefix

        return ''.join(prefix)
