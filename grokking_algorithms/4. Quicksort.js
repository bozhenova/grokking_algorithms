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
