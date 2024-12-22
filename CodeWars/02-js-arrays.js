//======================Training JS #4: Basic data types--Array===========
//https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript

const getLength = (arr) => arr.length;
const getFirst = (arr) => arr[0];
const getLast = (arr) => arr[arr.length - 1];

const pushElement = (arr) => {
  const el = 1;
  arr.push(el);
  return arr;
};
const popElement = (arr) => {
  arr.pop();
  return arr;
};

//==========================Sum of positive========================
//https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// Using .reduce

const positiveSum = (arr) =>
  arr.reduce(
    (accumulator, currentValue) =>
      currentValue > 0 ? accumulator + currentValue : accumulator,
    0
  );

//=======Find Maximum and Minimum Values of a List=======================
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

const max = (numbers) =>
  numbers.reduce((accumulator, currentValue) =>
    Math.max(accumulator, currentValue)
  );
const min = (numbers) =>
  numbers.reduce((accumulator, currentValue) =>
    Math.min(accumulator, currentValue)
  );
//const min = (numbers) => Math.min(...numbers);
//const max = (numbers) => Math.max(...numbers);

//======================Smallest value of an array=======================
//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

const smValorIndex = (arr, toReturn) =>
  toReturn === "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

//=======================Array contains the value=======================
//https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

const check = (a, x) => a.includes(x);

//==================Least Larger=========================================
//https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4/train/javascript

function leastLarger(arr, index) {
  const target = arr[index];
  let minLargerValue = Infinity;
  let resultIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target && arr[i] < minLargerValue) {
      minLargerValue = arr[i];
      resultIndex = i;
    }
  }
  return resultIndex;
}

function findNextLargerIndex(arr, index) {
  const target = arr[index];
  let minLargerValue = Infinity;
  let resultIndex = -1;

  arr.forEach((value, i) => {
    if (value > target && value < minLargerValue) {
      minLargerValue = value;
      resultIndex = i;
    }
  });

  return resultIndex;
}
console.log(leastLarger([4, 1, 3, 5, 6], 0));
console.log(leastLarger([4, 1, 3, 5, 6], 4));
console.log(findNextLargerIndex([4, 1, 3, 5, 6], 0));
console.log(findNextLargerIndex([4, 1, 3, 5, 6], 4));

//========================2626. Array Reduce Transformation=============
//https://leetcode.com/problems/array-reduce-transformation/description/

const reduce = (nums, fn, init) => {
  let result = init;
  if (nums) {
    for (let i = 0; i < nums.length; i++) {
      result = fn(result, nums[i]);
    }
  }
  return result;
};
