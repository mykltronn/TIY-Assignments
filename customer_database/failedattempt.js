// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element



console.log('linked up!');

var apiObject;
var picture;
var firstName;
var lastName;
var email;
var addressLineOne;
var addressLineTwo;
var blurryBit;

function getUserInfo() {

  'use strict';

  fetch('https://randomuser.me/api').then(
    function(response) {
      if (response.status !== 200) {
        console.log("bad response" + response.status);
        return
      }
      response.json().then(function(data) {
        apiObject = data.results[0];
        picture = apiObject.picture.large;
        firstName = apiObject.name.first;
        lastName = apiObject.name.last;
        email = apiObject.email;
        addressLineOne = apiObject.location.street;
        addressLineTwo = apiObject.location.city + ", " + apiObject.location.state + " " + apiObject.location.postcode;
        blurryBit = apiObject.id.value;
      });
    })
};
getUserInfo();
setTimeout(console.log("This chump's info is " + firstName + " " + lastName + ", " + email + "-- " + addressLineOne + ", " + addressLineTwo + ", " + blurryBit), 20000);

var customerArray = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
// array contains 12 empty objects
for (i = 0; i < customerArray.length; i++) {
  getUserInfo();
  var detailsObject = {
    "picture": picture,
    "name": firstName + lastName,
    "email": email,
    "addressOne": addressLineOne,
    "addressTwo": addressLineTwo,
    "SSN": blurryBit
  };
  customerArray[i] = detailsObject;
};


//call the API function inside a loop. This loop iterates over an empty array []. For every iteration of the loop, it appends an object containing the random users data.

// every time the
// create an array that stores all them datas in an array.
// var personalDeetsArray = []

// vvv function for adding a div with class "facebox" and unique id
// take fetched data and loop through and get"
// -- apiMain[].name.first
// -- apiMain.name.last
// -- apiMain.
