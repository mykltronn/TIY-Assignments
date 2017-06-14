// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

var customersArray;
(function(){

  'user string';

  fetch('https://randomuser.me/api/?results=12').then(
    function(response) {
      if (response.status !== 200) {
        console.log("bad respone: " + response.status);
        return
      }
      response.json().then(function(data){
        customersArray = data.results;
        // console.log(customersArray);

        for (i = 0; i < customersArray.length; i++) {
          var customer = customersArray[i];
          // console.log(customer.name.first);

          let markup = `
            <ul>
              <li class="image"><img src="${customer.picture.large}"></li>
              <li class="name">${customer.name.first + " " + customer.name.last}</li>
              <li class="email">${customer.email}</li>
              <li class="address">${customer.location.street}<br>${customer.location.city + ", " + customer.location.state + " " + customer.location.postcode}</li>
              <li class="phone">${customer.cell}</li>
              <li class="id">${customer.id.value}</li>
            </ul>
          `
          var newUl = document.getElementById('customers');

          newUl.innerHTML += markup

        };


//"customer" is the loop's current object. So customer's name would be customer.name.first

      })
    }
  )
})();

// usersArray is an array of 12 objects:
// each object is a person
// so: loop through usersArray.

// -- each customerArray[i] will be a new person

// -- each iteration will create a new div with to following:
//"""
//  <div class="image-box"><img id="image1"></div>
//  <div class="name"></div>
//  <div class="email"></div>
//  <div class="address" id="name3"></div>
//  <div class="ssn"></div>
//"""
//-- how to set new image to each. How to set divs content at creation?
// function doWork() {
//   for (i = 0; i < customersArray.length; i++) {
//     var customer = customersArray[i];
//   };
// }
//
// setTimeout(doWork, 0);
//
//
//
// function getUserInfo() {
//
//   'use strict';
//
//   fetch('https://randomuser.me/api').then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log("bad response" + response.status);
//         return
//       }
//       response.json().then(function(data) {
//         apiObject = data.results[0];
//         picture = apiObject.picture.large;
//         firstName = apiObject.name.first;
//         lastName = apiObject.name.last;
//         email = apiObject.email;
//         addressLineOne = apiObject.location.street;
//         addressLineTwo = apiObject.location.city + ", " + apiObject.location.state + " " + apiObject.location.postcode;
//         blurryBit = apiObject.id.value;
//       });
//     })
// };
// getUserInfo();
// setTimeout(console.log("This chump's info is " + firstName + " " + lastName + ", " + email + "-- " + addressLineOne + ", " + addressLineTwo + ", " + blurryBit), 20000);
//
// var customerArray = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
// // array contains 12 empty objects
// for (i = 0; i < customerArray.length; i++) {
//   getUserInfo();
//   var detailsObject = {
//     "picture": picture,
//     "name": firstName + lastName,
//     "email": email,
//     "addressOne": addressLineOne,
//     "addressTwo": addressLineTwo,
//     "SSN": blurryBit
//   };
//   customerArray[i] = detailsObject;
// };


//call the API function inside a loop. This loop iterates over an empty array []. For every iteration of the loop, it appends an object containing the random users data.

// every time the
// create an array that stores all them datas in an array.
// var personalDeetsArray = []

// vvv function for adding a div with class "facebox" and unique id
// take fetched data and loop through and get"
// -- apiMain[].name.first
// -- apiMain.name.last
// -- apiMain.
