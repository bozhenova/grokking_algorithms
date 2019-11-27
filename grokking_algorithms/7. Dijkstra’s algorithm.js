"use strict";

const graph = {
  start: {
    A: 6,
    B: 2
  },
  A: {
    fin: 1
  },
  B: {
    A: 3,
    fin: 5
  },
  fin: {}
};

const parents = {
  A: start,
  B: start,
  In: Null
};

const processed = [];
