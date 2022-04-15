// You are given an array of integers. Your task is to create pairs of them, such that every created pair has the same sum.
// This sum is not specified, but the number of created pairs should be the maximum possible.
// Each array element may belong to one pair only.

// Write a function:
// class Solution { public int solution(int[] A); }
// that, given an array A consisting of N integers, returns the maximum possible number of pairs with the same sum.
// Examples:
// 1. Given A = [1, 9, 8, 100, 2], the function should return 2. The pairs are (A[0], A[1]) and (A[2], A[4]); the sum of each pair is 10.
// 2. Given A = [2, 2, 2, 3], the function should return 1. Although, for instance, A[0]+A[1] = A[0]+A[2], the pairs (A[0], A[1]) and (A[0], A[2]) cannot exist at the same time, because they both contain a common element, A[0].
// 3. Given A = [5, 5], the function should return 1.
// Assume that:
// N is an integer within the range [2..50];
// each element of array A is an integer within the range [1..1,000].
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.