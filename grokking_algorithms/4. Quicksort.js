"use strict";

//function sum with recursion

function sum(arr) {
  if (arr.length > 1) {
    return arr[0] + sum(arr.slice(1));
  } else if (arr.length == 1) {
    return arr[0];
  }
  return 0;
}

sum([2, 4, 6]);

//recursive count function

function count(array) {
  if (!array.length) {
    return 0;
  }
  return 1 + count(array.slice(1));
}

count([2, 4, 6]);

//max number function
function maxNum(array) {
  if (!array.length) {
    return null;
  } else if (array.length === 1) {
    return array[0];
  } else if (array.length === 2) {
    return array[0] > array[1] ? array[0] : array[1];
  }
  const subMax = maxNum(array.slice(1));
  return array[0] > subMax ? array[0] : subMax;
}

maxNum([4, 2, 10]);
