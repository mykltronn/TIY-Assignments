console.log("linked!")

// create selector for clock div <^>

// add date content to clock div

//create reference to seconds of date

//create reference to background color

//increment rgb value of background reference relative to seconds


  //create selector for clock div
  var clockDiv = document.getElementById('clock');
  var body = document.getElementById('body');

//create event listener for page load and add function for running clock on page
body.addEventListener('onload', function currentClock() {

  //create a Date Object
  var d = new Date ();

  //extract hours minues seconds from date Object
  var currentHour = d.getHours();
  var currentMin = d.getMinutes();
  var currentSec = d.getSeconds();

  //format hours minutes seconds
  currentHour = (currentHour <10 ? "0" : "") + currentHour;
  currentMin = (currentMin <10 ? "0" : "") + currentMin;
  currentSec = (currentSec <10 ? "0" : "") + currentSec;

  //store string of hour min sec in a var
  var currentTime = currentHour + ":" + currentMin + ":" + currentSec;

  //add currentTime content to clockDiv

  clockDiv.innerHTML = "TIME!!";

  return clockDiv;

});

//display clock on load and reload every seconds








// whitespace
