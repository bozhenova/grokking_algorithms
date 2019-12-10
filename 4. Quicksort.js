"use strict";

//function sum with recursion

function sum(arr) {
  var tArray = arr.slice();
  if (tArray.length > 1) {
    return tArray[0] + sum(tArray.slice(1));
  } else if (tArray.length == 1) {
    return tArray[0];
  }
  return null;
}

sum([2, 4, 6]);

//recursive count function

function count(array) {
  var tArray = array.slice();
  if (!tArray.length) {
    return null;
  }
  return 1 + count(tArray.slice(1));
}

count([2, 4, 6]);

//max number function
function maxNum(array) {
  var tArray = array.slice();
  if (!tArray.length) {
    return null;
  } else if (tArray.length === 1) {
    return tArray[0];
  } else if (tArray.length === 2) {
    return tArray[0] > tArray[1] ? tArray[0] : tArray[1];
  }
  const subMax = maxNum(tArray.slice(1));
  return tArray[0] > subMax ? tArray[0] : subMax;
}

maxNum([4, 2, 10]);

//binary search recursive function

function binarySearchRecursive(array, target, min, max) {
  var tArray = array.slice();
  if (min === undefined) {
    min = 0;
  }
  if (max === undefined) {
    max = array.length - 1;
  }
  var guess = Math.floor((max - min) / 2 + min);
  if (max <= min) {
    return tArray[guess] === target ? guess : null;
  } else if (tArray[guess] < target) {
    return binarySearchRecursive(tArray, target, guess + 1, max);
  }
  return binarySearchRecursive(tArray, target, min, guess - 1);
}

binarySearchRecursive([1, 3, 5, 7, 9], 3);
