"use strict";

//countdown with a base case and recursion

function countdown(i) {
  console.log(i);
  if (i > 0) {
    countdown(i - 1);
  }
}

countdown(5);

//the call stack

function greet(name) {
  console.log(`hello, ${name}!`);
  greet2(name);
  console.log("getting ready to say bye...");
  bye();
}

function greet2(name) {
  console.log(`how are you, ${name}?`);
}

function bye() {
  console.log("ok bye!");
}

greet("Rita");

//the call stack with recursion

function fact(x) {
  if (x > 1) {
    return x * fact(x - 1);
  }
  return 1;
}

fact(3);
