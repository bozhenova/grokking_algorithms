"use strict";

//check voter
var voted = {};
function checkVoter(name) {
  if (voted[name]) {
    console.log("kick them out!");
  } else {
    voted[name] = true;
    console.log("let them vote!");
  }
}

checkVoter("Tom");
checkVoter("Mike");
checkVoter("Mike");
