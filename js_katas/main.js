//
// card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
//
//

//create function called maskify that takes parameter cc

//accept argument for CC as a string
//store cc string in var
//loop through string.length -4

//create function
function maskify(cc) {
  var ccArray = cc.split("");
  //loop through string except last four characters
  for (i = 0; i < (ccArray.length-4); i++) {
    ccArray[i] = "*";
  }
  var ccString = ccArray.reduce((a, b) => a + b, 0);
  return ccString;
}

//************************ Next kata *******************************
// Is the number even?
//
// If the numbers is even return true. If it's odd, return false.
//
// Oh yeah... the following symbols/commands have been disabled!
//
// use of %

//code given
var isEven = function (n) {
  if (Math.round(n / 2) === n) {
    return true;
  }
  else {
    return false;
  }
}


//write function that takes n as parameter

// if n is even, return true else return false

// ******************** new kata **************

// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
// Examples:
//
// "din" => "((("
//
// "recede" => "()()()"
//
// "Success" => ")())())"
//
// "(( @" => "))(("


//code given

function duplicateEncode(word){
    // ...
}

// how to determine if one array item equals another

//
var res = str.split("");

function duplicateEncode(word){
  var array = word.split("");
  for (i=0; i < array.length; i++) {
    var ogItem = array[i]
    for (j=0; j < array.length; j++) {
      if (array[i] == array[j]) {
        return array[i];
      }
      break;
    }
  }
}

// ********** new kata ************
//
// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
//
// Task
//
// Implement a function named
//
// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// , which takes three arguments and generates a range of integers from min to max, with given step. The first is minimum value, second is maximum of range and the third is step.
//
//

//push to array appropriate value

// min += step
starting at 2, for as long as iteration is <= 10, push min += step to new array

function generateRange(min, max, step) {
  var stepArray = [];
  while (stepArray.every() < max) {
    var newNum = stepArray[] + step;
    stepArray.push(newNum);
  }
}












// whitespace
