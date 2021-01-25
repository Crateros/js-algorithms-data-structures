// Given an array nums of n integers where n > 1,  return an array output such that output[i]
// is equal to the product of all the elements of nums except nums[i].

// Example:
// Input:  [1,2,3,4]
// Output: [24,12,8,6]

// With division
const productExceptSelf = array => {
  // Loop through array twice, the first time getting
  // the maximum product, the second time dividing by
  // the outstanding index value until the result array
  // has been created O(2N) ==> O(N)

  let max = 1;
  let result = [];

  for (i of array)
    max *= i;
  for (i of array)
    result.push(max / i);

  return result;
};

const arrayOne = [1, 2, 3, 4];
console.log(productExceptSelf(arrayOne));

// Without division
const productExceptSelfAgain = array => {
  // Loop through array and create product arrays for the right side
  // products and the left side products. Loop through a final time
  // to combine those left and right products for the result
  // O(3N) ==> O(N)

  const left = new Array(array.length);
  const right = new Array(array.length);
  const product = [];

  left[0] = 1;
  right[array.length - 1] = 1;

  // Create left product array
  for (let i = 1; i < array.length; i++) {
    left[i] = array[i - 1] * left[i - 1];
  }

  // Create right product array
  for (let i = array.length - 1; i > 0; i--) {
    right[i - 1] = array[i] * right[i];
  }

  // Combine product arrays
  for (let i = 0; i < array.length; i++) {
    product.push(left[i] * right[i]);
  }

  return product;
};

console.log(productExceptSelfAgain(arrayOne));

// Without division and constant space
const productExceptSelfFinal = array => {
  // Same approach as the non-division solution but use
  // the result array and a variable to calculate the
  // products on the fly instead of calculating dedicated
  // left and right product arrays O(2N) ==> O(N)

  const result = new Array(array.length);
  result[0] = 1;
  let temp = 1;

  // Add left products to result
  for (let i = 1; i < array.length; i++) {
    result[i] = array[i - 1] * result[i - 1];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    result[i] = result[i] * temp;
    temp = temp * array[i];
  }

  return result;
};

console.log(productExceptSelfFinal(arrayOne));
