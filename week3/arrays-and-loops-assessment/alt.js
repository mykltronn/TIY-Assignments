//create a ToDo list

//create reference to <input> object to capture user input and //place it in new li
var userInputField = document.getElementById('todoInput');

//create reference to the parent object where I want to store the user input, that is ul
var toDoUL = document.getElementById('todoList');

//create event listener that listens for keypress of Enter on input field
//event listener performs function on keypress that, if enter is pressed, user input is turned in to a list item, also the input field is cleared

// "Anything stored as a parameter of a function within an event listener will be passed the reference of that even as the argument" ie, for the keypress event the fuction inside the listener is passed the keycode for that key. The function is passed some reference to the event-- probably an ID or code"

//Above is incorrect. even is that reference itself. See below. even.keycode says grab the keycode id from keypress. So "event" is interchangable with "keypress" in this case.


userInputField.createEventListener('keypress', function addItem(event){
  if (event.keyCode === 13) {
    // assign the value attribute of <input> field to a new var
    let userInput = userInputField.value;
    // remove content of value attribute of <input> maybe change placeholder attribute to something cheeky
    userInputField.value = "";
    userInputField.setAttribute("placeholder", "Surely thats not all...");
    //create var containing newly created li
    var newLI = document.createElement('li');
    //add user input to newly create <li>
    newLI.textContent(userInput);
    //add new li to existing ul
    toDoUL.append(newLI);
  }
  return event;
})



//create a new <li> element

//add user input to new li element

//append new li input containing new content to existing ul



// user inputs to field
// user presses Enter
// user input is added to html
// input field is cleared for next input
