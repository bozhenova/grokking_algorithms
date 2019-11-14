"use strict";

function findSmallest(arr) {
  var smallest = arr[0];
  var smallestIndex = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  var newArr = [];
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    var smallestIndex = findSmallest(arr);
    newArr.push(arr[smallestIndex]);
    arr.splice(smallestIndex, 1);
  }
  return newArr;
}

selectionSort([10, 4, 7, 1, 0]);
