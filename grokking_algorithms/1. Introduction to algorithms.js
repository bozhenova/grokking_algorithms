//Binary search

"use strict";

function binarySearch(array, item) {
  var low = 0;
  var high = array.length - 1;

  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    var guess = array[mid];
    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

binarySearch([1, 3, 5, 7, 9], 7);
