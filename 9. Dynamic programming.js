"use strict";

function longestCommonSequence(string1, string2) {
  let lcs = 0;

  let table = [];
  let len1 = string1.length;
  let len2 = string2.length;
  for (let row = 0; row <= len1; row++) {
    table[row] = [];
    for (let col = 0; col <= len2; col++) {
      table[row][col] = 0;
    }
  }
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (string1[i] === string2[j]) {
        table[i + 1][j + 1] = table[i][j] + 1;
      }
      if (table[i + 1][j + 1] > lcs) {
        lcs = table[i + 1][j + 1];
      }
    }
  }
  console.log(table);
  return lcs;
}

longestCommonSequence('fisha', 'hisha');