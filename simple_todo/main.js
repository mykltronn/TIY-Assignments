// create a ToDo list that does the following:
// - user inputs text to a field
// - user input is added as a <li>
// - <input> field clears on "enter"
// - <li> text strike-through on hover
// - fade li to hide/remove on click


//grab <input> element
var inputTag = document.getElementById('new-todo');

//isolate <input>'s data
// inputTag.value

//grab <ul> element
var ulParent = document.getElementById('todo-list');

//create new child elemnt, <li>
var newLI = document.createElement('li');

//add user input to <li>
newLI.textContent = inputTag.value;

//append <li> to <ul>
ulParent.appendChild(newLI);
//
