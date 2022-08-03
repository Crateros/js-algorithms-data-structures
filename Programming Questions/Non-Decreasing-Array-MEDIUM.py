# Given an array nums with n integers, your task is to check if it could become non-decreasing
# by modifying at most one element. We define an array is non-decreasing if
# nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

# Example 1:
# Input: nums = [4,2,3]
# Output: true
# Explanation: You could modify the first 4 to 1 to get a non-decreasing array.

# Example 2:
# Input: nums = [4,2,1]
# Output: false
# Explanation: You can't get a non-decreasing array by modify at most one element.


class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        modified = False

        # Compare all pairs using length - 1
        for i in range(len(nums) - 1):
            # Already in ascending order, continue
            if nums[i] <= nums[i+1]:
                continue
            # If we already performed a modification then we
            # cannot meet the requirements
            if modified:
                return False

            # We want to decrease the left element, either it is our
            # only option when i is 0 or the lookahead vaue is greater than
            # or equal to the lookbehind value, meaning we can safely set nums[i]
            # without throwing off previous ascending order
            if i == 0 or nums[i+1] >= nums[i - 1]:
                nums[i] = nums[i+1]
            # Otherwise we know that we cannot change nums[i] as it would break previous
            # ordering so we set nums[i+1] to nums[i] in order to fulfill the ascending order
            else:
                nums[i + 1] = nums[i]
            # track modifications
            modified = True
        # We detected 1 or fewer modifications
        return True
