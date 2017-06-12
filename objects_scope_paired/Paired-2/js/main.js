/**************************************************************************************
AUTHOR THE FOLLOWING DATE AND MATH OBJECTS AND MAKE THE ASSERTIONS PASS
**************************************************************************************
DATE OBJECTES
**************************************************************************************
# 1
Declare a variable, 'date'.
Pass in a date string into the date constructor.
It should return the date for Indepencence Day.
**************************************************************************************/
( function() {
  "use strict";

  //Your code here.
  var date;
  date = new Date("Thu Jul 04 1776 00:00:00 GMT-0400 (EDT)")
  console.log( "Independence Day date: ", date );
  console.assert( date == "Thu Jul 04 1776 00:00:00 GMT-0400 (EDT)", "#1: Test failed. Check the parameters. Returned: " + date )
} )();


/**************************************************************************************
# 2
Declare a variable, 'date'.
Pass in three intergers into the date constructor.
It should return new year's day for 2018.
**************************************************************************************/
( function() {
  "use strict";

  //Your code here.
var date;
date = new Date(2018, 0, 1)


console.log( "Happy new year!: ", date );
console.assert( date == "Thu Feb 01 2018 00:00:00 GMT-0500 (EST)", "#2: Test failed. Check the parameters. Returned: " + date )
} )();


/**************************************************************************************
# 3
Declare a variable, 'date'.
Pass in a date string into the date constructor. Include time: hh:mm:ss.
I.e, 'November 28, 2017 12:30:00'
See assertion for date and time.
**************************************************************************************/
( function() {
  "use strict";

  //Your code here.
var date;
date = new Date(1975, 9, 13, 11, 13, 0, 0);

  console.log( "Day and time: ", date );
  console.assert( date == "Mon Oct 13 1975 11:13:00 GMT-0400 (EDT)", "#3: Test failed. Check the parameters. Returned: " + date )
} )();


/**************************************************************************************
# 4
Declare two variables, 'date' and 'year'.
Each function nees to have a specific purpose in order to return the current year.
HINT: you will need to use 'getFullYear()' for one of the variables.
**************************************************************************************/
( function() {
  "use strict";

//date variable here
var date = new Date();
//year variable here
var year = date.getFullYear();



  console.log( "Current year: ", year );
  console.assert( year == "2017", "#4: Test failed. Check the function. Are you 'getting' the full year?. Returned: " + date )
} )();


/**************************************************************************************
MATH OBJECTS
**************************************************************************************/
/**************************************************************************************
# 5
Declare a variable, 'roundNum'.
It should round a given number to be 184. Use the appropiate math method.
**************************************************************************************/
( function() {
  "use strict";

//Your code here
var roundNum = Math.floor(184.3);



 console.log( "roundNum: ", roundNum );
 console.assert( roundNum == "184", "#5: Test failed. Check your math method and parameters. Return: " + roundNum )
} )();


/**************************************************************************************
# 6
Declare a variable, 'power'.
Use the pow math method.
It should return 256. Use the appropiate math method.
**************************************************************************************/
( function() {
  "use strict";

  //Your code here.
  var power = Math.pow(4, 4);


  console.log( "power: ", power );
  console.assert( power == "256", "#6: Test failed. Check your math method and parameters. Return: " + power )
} )();


/**************************************************************************************
SCOPE, COMPARTMENTALIZATION, AND HOISTING
FIX THE FOLLOWING FUNCTIONS TO MAKE THE ASSERTIONS PASS
**************************************************************************************
# 7
Scope
Fix scope to make the assertion pass.
The global variable should be 'prius'.
**************************************************************************************/
( function() {
  "use strict";

  var car = 'prius';

  function changeCar() {
    var car = 'beattle';
  }
  changeCar();


  console.log( "global variable: ", car );
  console.assert( car == "prius", "#7: Test failed. Fix scope." )
} )();


/**************************************************************************************
# 8
Compartmentalization
Fix compartmentalization so that the assertions pass. Something needs to be done to styling() to isolate it from the global scope...
**************************************************************************************/
( function() {
  "use strict";
  const language = 'HTML';

function styling() {
  const language = 'CSS'
  console.log(language);
  console.assert(language == "CSS", "Test Failed. Did you compartmentalize?");
};
styling();

console.log(language);
console.assert(language == "HTML", "Test Failed. Did you compartmentalize?");
} )();



/**************************************************************************************
# 9
Hoisting
Fix hoisting so that the assertions pass.
Where should the 'sum' asserting go?
Where should 'multiply()' go?
**************************************************************************************/

( function() {
  "use strict";

  function hoistThis() {
    var sum;
    function multiply( sum ) {
      return sum * 2;
      console.assert( sum * 2 == "8", "#9: Test failed. Check your function hoisting" );

    }
    multiply( sum );
    sum = 2 + 2;
    console.assert( sum == "4", "#9: Test failed. Check hoisting" );


  };
  hoistThis();
} )();


/**************************************************************************************
OBJECTS
COMPLETE THE FOLLOWING FUNCTIONS TO MAKE THE ASSERTIONS PASS
**************************************************************************************
# 10
Dot notation
Edit the following object using dot notation to 'add' the missing computer component, an 'nvidia' GPU.
**************************************************************************************/

( function() {
  "use strict";
  const computer = {
    motherboard: "full",
    processor: "i-7",
    memory: "4GB",
  };
 //Add missing property here.
computer.GPU = 'nvidia';

  console.log( "#10: computer", computer )
  console.assert( computer.GPU == "nvidia", "Test failed. The computer should have an 'nvidia' GPU" )
} )();


/**************************************************************************************
# 11
Bracket notation
The following object is empty. Use bracket notation so that 'car' has two doors, four wheels, an engine (use a boolean), the type is 'sport', the engine-size is a v-8 and the model is a mustang.
**************************************************************************************/

( function() {
  "use strict";
  var car = {};

car[ "doors" ] == 2
car[ "wheels" ] == 4
car[ "engine" ] == true
//Add properties here.

  console.log( "#11: ", car )
  console.assert( car[ "doors" ] == 2, "#11: Test failed. See required properties" )
  console.assert( car[ "wheels" ] == 4, "#11: Test failed. See required properties" )
  console.assert( car[ "engine" ] == true, "#11: Test failed. See required properties" )
  console.assert( car[ "type" ] == "sport", "#11: Test failed. See required properties" )
  console.assert( car[ "engine-size" ] == "v-8", "#11: Test failed. See required properties" )
  console.assert( car[ "model" ] == "mustang", "#11: Test failed. See required properties" )
} )();
